import { useState, useRef, useEffect, RefObject, MouseEvent, ChangeEvent } from 'react';
import { ArrowDown } from '~/components/Svg';
import classNames from 'classnames/bind';
import style from './LocationForm.module.scss';
import cityApi from '../../api/cityApi';
import { DistrictType, LocationType, ProvinceType, WardType } from '~/types';
interface PropsLocation {
    onSubmit: (value: LocationType) => void;
}
export default function LocationForm({ onSubmit }: PropsLocation) {
    const [provinceValue, setProvinceValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');
    const [wardValue, setWardValue] = useState('');
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
    const cx = classNames.bind(style);
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
            setProvinceValue(element.textContent || '');
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
            setDistrictValue(element.textContent || '');
            setWardList(res.wards);
            inputDistrictRef.current?.blur();
        };
        fetch();
    };
    const handleClickWardItem = (e: MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLDivElement;
        setWardValue(element.textContent || '');
        onSubmit({ province: provinceValue, district: districtValue, ward: wardValue });
    };
    const handleChangeProvince = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setProvinceValue(element.value);
    };
    const handleChangeDistrict = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setDistrictValue(element.value);
    };
    const handleChangeWard = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setWardValue(element.value);
    };
    return (
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
                        value={provinceValue}
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
                        value={districtValue}
                        ref={inputDistrictRef}
                        placeholder="Vui lòng chọn quận/huyện"
                        className={cx('input', { ['disable']: !provinceValue })}
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
                        value={wardValue}
                        ref={inputWardRef}
                        placeholder="Vui lòng chọn quận/huyện"
                        className={cx('input', { ['disable']: !districtValue })}
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
    );
}
