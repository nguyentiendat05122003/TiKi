import CloseIcon from '@mui/icons-material/Close';
import { RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import classNames from 'classnames/bind';
import { ChangeEvent, MouseEvent, RefObject, forwardRef, useEffect, useRef, useState } from 'react';
import Button from '~/components/Button';
import { ArrowDown } from '~/components/Svg';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setLocation } from '~/slices/LocationSlice';
import { DistrictType, LocationType, ProvinceType, WardType } from '~/types';
import { FormatLocationFull } from '~/utils/formatLocationFull';
import style from './Location.module.scss';
import cityApi from './api/cityApi';
interface LocationProps {
    onClick: () => void;
}
const Location = forwardRef<HTMLDivElement, LocationProps>(({ onClick }, ref) => {
    const cx = classNames.bind(style);
    const location = useAppSelector((state) => state.location.value);
    const [isShowLocationForm, setIsShowLocationForm] = useState(false);
    const [provinceValue, setProvinceValue] = useState<ProvinceType>({
        name: '',
        code: 0,
        districts: [],
    });
    const [districtValue, setDistrictValue] = useState<DistrictType>({
        name: '',
        code: 0,
        wards: [],
    });
    const [wardValue, setWardValue] = useState<WardType>({
        name: '',
        code: 0,
    });
    const inputProvinceRef = useRef<HTMLInputElement>(null);
    const inputDistrictRef = useRef<HTMLInputElement>(null);
    const inputWardRef = useRef<HTMLInputElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const arrowDistrictRef = useRef<HTMLDivElement>(null);
    const arrowWardRef = useRef<HTMLDivElement>(null);
    const [provinceList, setProvinceList] = useState<ProvinceType[]>([]);
    const [districtList, setDistrictList] = useState<DistrictType[]>([]);
    const [wardList, setWardList] = useState<WardType[]>([]);
    const [isShowMenuProvince, setIsShowMenuProvince] = useState(false);
    const [isShowMenuDistrict, setIsShowMenuDistrict] = useState(false);
    const [isShowMenuWard, setIsShowMenuWard] = useState(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetch = async () => {
            const res = await cityApi.getAllProvince();
            setProvinceList(res);
        };
        fetch();
    }, []);
    const handleClickInput = (inputRef: RefObject<HTMLInputElement>, arrowRef: RefObject<HTMLDivElement>): void => {
        inputRef.current?.focus();
        inputRef.current?.classList.add(cx('active'));
        arrowRef.current?.classList.add(cx('icon-active'));
        if (inputRef.current === inputProvinceRef.current) {
            setIsShowMenuProvince(true);
        } else if (inputRef.current === inputDistrictRef.current) {
            setIsShowMenuDistrict(true);
        } else if (inputRef.current === inputWardRef.current) {
            setIsShowMenuWard(true);
        }
    };
    const handleBlur = (inputRef: RefObject<HTMLInputElement>, arrowRef: RefObject<HTMLDivElement>): void => {
        inputRef.current?.classList.remove(cx('active'));
        arrowRef.current?.classList.remove(cx('icon-active'));
        if (inputRef.current === inputProvinceRef.current) {
            setIsShowMenuProvince(false);
        } else if (inputRef.current === inputDistrictRef.current) {
            setIsShowMenuDistrict(false);
        } else if (inputRef.current === inputWardRef.current) {
            setIsShowMenuWard(false);
        }
    };
    const handleClickProvinceItem = (e: MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLDivElement;
        const fetch = async () => {
            const params = {
                code: element.tabIndex,
                params: {
                    depth: 2,
                },
            };
            const res = await cityApi.getDistricts(params);
            setDistrictList(res.districts);
            setProvinceValue(res);
            inputProvinceRef.current?.blur();
        };
        fetch();
    };
    const handleClickDistrictItem = (e: MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLDivElement;
        const fetch = async () => {
            const params = {
                code: element.tabIndex,
                params: {
                    depth: 2,
                },
            };
            const res = await cityApi.getWards(params);
            setDistrictValue(res);
            setWardList(res.wards);
            inputDistrictRef.current?.blur();
        };
        fetch();
    };
    const handleClickWardItem = (e: MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLDivElement;
        const fetch = async () => {
            const code = element.tabIndex;
            const res = await cityApi.getWard(code);
            console.log(res);
            setWardValue(res);
            inputWardRef.current?.blur();
        };
        fetch();
    };
    useEffect(() => {
        if (!provinceValue?.name?.trim()) {
            const fetch = async () => {
                const res = await cityApi.getAllProvince();
                setProvinceList(res);
            };
            fetch();
            return;
        }
        const fetch = async () => {
            const res = await cityApi.searchProvince({ q: provinceValue.name });
            setProvinceList(res);
        };
        fetch();
    }, [provinceValue]);
    useEffect(() => {
        if (!districtValue?.name.trim() && provinceValue.name) {
            const fetch = async () => {
                const params = {
                    code: provinceValue.code,
                    params: {
                        depth: 2,
                    },
                };
                const res = await cityApi.getDistricts(params);
                setDistrictList(res.districts);
                inputProvinceRef.current?.blur();
            };
            fetch();
            return;
        }
        const fetch = async () => {
            const res = await cityApi.searchDistrict({ q: districtValue.name, p: provinceValue?.code });
            setDistrictList(res);
        };
        fetch();
    }, [districtValue]);
    useEffect(() => {
        if (!wardValue?.name.trim() && districtValue.name) {
            const fetch = async () => {
                const params = {
                    code: districtValue.code,
                    params: {
                        depth: 2,
                    },
                };
                const res = await cityApi.getWards(params);
                setWardList(res.wards);
            };
            fetch();
            return;
        } else {
            const fetch = async () => {
                const res = await cityApi.searchWard({
                    q: wardValue.name,
                    p: provinceValue?.code,
                    d: districtValue?.code,
                });
                setWardList(res);
            };
            fetch();
        }
    }, [wardValue, districtValue, provinceValue]);
    const handleChangeProvince = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setProvinceValue((prev) => {
            return { ...prev, name: element.value };
        });
    };
    const handleChangeDistrict = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setDistrictValue((prev) => {
            return { ...prev, name: element.value };
        });
    };
    const handleChangeWard = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setWardValue((prev) => {
            return { ...prev, name: element.value };
        });
    };
    const handleClick = () => {
        if (!onClick) return;
        onClick();
    };
    const handleChangeOption = (e: ChangeEvent, value: string) => {
        if (value === 'dynamic') {
            setIsShowLocationForm(true);
            console.log(e);
        } else if (value === 'current') {
            setIsShowLocationForm(false);
        }
    };
    const handleSubmit = (value: LocationType) => {
        dispatch(setLocation(value));
        setIsShowLocationForm(false);
        if (!onClick) return;
        onClick();
    };
    return (
        <>
            <div className={cx('overlay')}>
                <div ref={ref} className={cx('location-container')}>
                    <div className={cx('location-wrapper')}>
                        <div onClick={handleClick} className={cx('btn-close')}>
                            <CloseIcon className={cx('icon-close')} style={{ fontSize: '2rem' }} />
                        </div>
                        <div className={cx('location-header')}>
                            <p className={cx('title')}>Địa chỉ giao hàng</p>
                        </div>
                        <div className={cx('location-body')}>
                            <p className={cx('description')}>
                                Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng cùng phí đóng gói, vận
                                chuyển một cách chính xác nhất.
                            </p>
                            <div className={cx('btn-wrapper')}>
                                <RadioGroup defaultValue="current" onChange={handleChangeOption}>
                                    <button className={cx('btn-picker')}>
                                        <FormControlLabel
                                            value="current"
                                            control={<Radio size="medium" />}
                                            label={<span className={cx('text')}>{FormatLocationFull(location)}</span>}
                                        />
                                    </button>
                                    <button className={cx('btn-picker')}>
                                        <FormControlLabel
                                            value="dynamic"
                                            control={<Radio size="medium" />}
                                            label={<span className={cx('text')}>Chọn khu vực giao hàng khác</span>}
                                        />
                                    </button>
                                </RadioGroup>
                            </div>
                            {isShowLocationForm && (
                                <div className={cx('wrapper')}>
                                    <div className={cx('row')}>
                                        <p className={cx('title')}>Tỉnh/Thành phố</p>
                                        <div className={cx('content')}>
                                            <input
                                                onBlur={() => {
                                                    handleBlur(inputProvinceRef, arrowRef);
                                                }}
                                                onClick={() => {
                                                    handleClickInput(inputProvinceRef, arrowRef);
                                                }}
                                                onChange={handleChangeProvince}
                                                value={provinceValue?.name}
                                                ref={inputProvinceRef}
                                                placeholder="Vui lòng chọn tỉnh/thành phố"
                                                className={cx('input')}
                                            />
                                            <div className={cx('icon-wrapper')}>
                                                <span className={cx('separator')}></span>
                                                <div ref={arrowRef} className={cx('icon')}>
                                                    <ArrowDown className={cx('arrow')} />
                                                </div>
                                            </div>
                                            {isShowMenuProvince && (
                                                <div onMouseDown={(e) => e.preventDefault()} className={cx('menu')}>
                                                    <div className={cx('menu-wrapper')}>
                                                        {provinceList.map((item) => {
                                                            return (
                                                                <div
                                                                    onClick={handleClickProvinceItem}
                                                                    key={item.code}
                                                                    tabIndex={item.code}
                                                                    className={cx('menu-item')}
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('row')}>
                                        <p className={cx('title')}>Quận/Huyện</p>
                                        <div className={cx('content')}>
                                            <input
                                                onBlur={() => {
                                                    handleBlur(inputDistrictRef, arrowDistrictRef);
                                                }}
                                                onClick={() => {
                                                    handleClickInput(inputDistrictRef, arrowDistrictRef);
                                                }}
                                                onChange={handleChangeDistrict}
                                                value={districtValue?.name}
                                                ref={inputDistrictRef}
                                                placeholder="Vui lòng chọn quận/huyện"
                                                className={cx('input', { ['disable']: !provinceValue.name })}
                                            />
                                            <div className={cx('icon-wrapper')}>
                                                <span className={cx('separator')}></span>
                                                <div ref={arrowDistrictRef} className={cx('icon')}>
                                                    <ArrowDown className={cx('arrow')} />
                                                </div>
                                            </div>
                                            {isShowMenuDistrict && (
                                                <div onMouseDown={(e) => e.preventDefault()} className={cx('menu')}>
                                                    <div className={cx('menu-wrapper')}>
                                                        {districtList.map((item) => {
                                                            return (
                                                                <div
                                                                    key={item.code}
                                                                    onClick={handleClickDistrictItem}
                                                                    tabIndex={item.code}
                                                                    className={cx('menu-item')}
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('row')}>
                                        <p className={cx('title')}>Phường/Xã</p>
                                        <div className={cx('content')}>
                                            <input
                                                onBlur={() => {
                                                    handleBlur(inputWardRef, arrowWardRef);
                                                }}
                                                onClick={() => {
                                                    handleClickInput(inputWardRef, arrowWardRef);
                                                }}
                                                onChange={handleChangeWard}
                                                value={wardValue?.name}
                                                ref={inputWardRef}
                                                placeholder="Vui lòng chọn phường/xã"
                                                className={cx('input', { ['disable']: !districtValue.name })}
                                            />
                                            <div className={cx('icon-wrapper')}>
                                                <span className={cx('separator')}></span>
                                                <div ref={arrowWardRef} className={cx('icon')}>
                                                    <ArrowDown className={cx('arrow')} />
                                                </div>
                                            </div>
                                            {isShowMenuWard && (
                                                <div onMouseDown={(e) => e.preventDefault()} className={cx('menu')}>
                                                    <div className={cx('menu-wrapper')}>
                                                        {wardList.map((item) => {
                                                            return (
                                                                <div
                                                                    key={item.code}
                                                                    onClick={handleClickWardItem}
                                                                    tabIndex={item.code}
                                                                    className={cx('menu-item')}
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className={cx('location-form')}></div>
                        </div>
                        <div className={cx('location-footer')}>
                            <Button
                                onClick={() => {
                                    handleSubmit({
                                        province: provinceValue?.name || '',
                                        district: districtValue?.name,
                                        ward: wardValue?.name,
                                    });
                                }}
                                className={cx('btn-submit')}
                            >
                                GIAO ĐẾN ĐỊA CHỈ NÀY
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
export default Location;
