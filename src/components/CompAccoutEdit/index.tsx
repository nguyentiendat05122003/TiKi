import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import classNames from 'classnames/bind';
import { FormEvent, useEffect, useState, ChangeEvent } from 'react';
import { images } from '~/assets/image';
import { days, months, years } from '~/constants';
import { axiosClientCountry } from '~/services';
import Button from '../Button';
import Image from '../Image';
import Nation from '../National';
import { ArrowDownThin } from '../Svg';
import style from './AccountEdit.module.scss';
import UploadAvatar from '../UploadAvatar';
import { useSnackbar } from 'notistack';
interface birthDayType {
    day: string;
    month: string;
    year: string;
}
export default function CompAccountEdit() {
    const cx = classNames.bind(style);
    const { enqueueSnackbar } = useSnackbar();
    const [countryList, setCountryList] = useState([]);
    const [avatar, setAvatar] = useState(() => {
        return JSON.parse(localStorage.getItem('avatar') || 'null') || images.avatarColor;
    });
    const [classNameAvatar, setClassNameAvatar] = useState(() => {
        return JSON.parse(localStorage.getItem('avatar') || 'null') || '';
    });
    const [name, setName] = useState(() => {
        return JSON.parse(localStorage.getItem('info-user') || 'null')?.name || '';
    });
    const [nickName, setNickName] = useState(() => {
        return JSON.parse(localStorage.getItem('info-user') || 'null')?.nickName || '';
    });
    const [birthDay, setBirthDay] = useState(() => {
        return (
            JSON.parse(localStorage.getItem('info-user') || 'null')?.birthDay || {
                day: '0',
                month: '0',
                year: '0',
            }
        );
    });
    const [national, setNational] = useState(() => {
        return JSON.parse(localStorage.getItem('info-user') || 'null')?.national || '';
    });
    const [gender, setGender] = useState(() => {
        return JSON.parse(localStorage.getItem('info-user') || 'null')?.gender || '';
    });
    const [isShowNational, setIsShowNational] = useState(false);
    const [isShowUploadAvatar, setIsShowUploadAvatar] = useState(false);
    const getCountries = async () => {
        try {
            const res = await axiosClientCountry.get('');
            setCountryList(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCountries();
    }, []);
    const handleClickNation = () => {
        setIsShowNational(!isShowNational);
    };
    const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const handleChangeNickName = (e: FormEvent<HTMLInputElement>) => {
        setNickName(e.currentTarget.value);
    };
    const handleChangeDay = (e: ChangeEvent<HTMLSelectElement>) => {
        setBirthDay((prev: birthDayType) => {
            return { ...prev, day: e.target.value };
        });
    };
    const handleChangeMonth = (e: ChangeEvent<HTMLSelectElement>) => {
        setBirthDay((prev: birthDayType) => {
            return { ...prev, month: e.target.value };
        });
    };
    const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
        setBirthDay((prev: birthDayType) => {
            return { ...prev, year: e.target.value };
        });
    };
    const handleClickSubmit = () => {
        localStorage.setItem('info-user', JSON.stringify({ nickName, name, birthDay, national, gender }));
        enqueueSnackbar('Cập nhật thông tin thành công', {
            style: { height: '100%' },
            autoHideDuration: 1000,
            variant: 'success',
            anchorOrigin: { horizontal: 'center', vertical: 'top' },
            hideIconVariant: false,
        });
    };
    const handleChangeGender = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };
    const handleChooseNational = (value: string) => {
        setNational(value);
    };
    const handleChooseAvatar = () => {
        setIsShowUploadAvatar(true);
    };
    const handleClickIsShowUploadAvatar = () => {
        setIsShowUploadAvatar(false);
    };
    const handleChangeAvatar = (value: string) => {
        setAvatar(value);
        setClassNameAvatar(true);
        localStorage.setItem('avatar', JSON.stringify(value));
    };
    return (
        <div>
            <div className={cx('header')}>Thông tin tài khoản</div>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('info-left')}>
                        <span className={cx('info-title')}>Thông tin cá nhân</span>
                        <div className={cx('account-info')}>
                            <div className={cx('form-info')}>
                                <div className={cx('form-avatar')}>
                                    <div onClick={handleChooseAvatar} className={cx('avatar-wrapper')}>
                                        <div>
                                            <div className={cx('avatar-view')}>
                                                <Image
                                                    src={avatar}
                                                    className={cx(
                                                        {
                                                            'avatar-default': [`${avatar === images.avatarColor}`],
                                                        },
                                                        {
                                                            'avatar-img': classNameAvatar,
                                                        },
                                                    )}
                                                />
                                            </div>
                                            <div className={cx('edit')}>
                                                <Image className={cx('edit-img')} src={images.edit} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-name')}>
                                    <div className={cx('form-control')}>
                                        <label className={cx('label-name')}>Họ & Tên</label>
                                        <input
                                            value={name}
                                            onChange={handleChangeName}
                                            className={cx('input-name')}
                                            type="text"
                                        />
                                    </div>
                                    <div className={cx('form-control')}>
                                        <label className={cx('label-name')}>Nickname</label>
                                        <input
                                            value={nickName}
                                            onChange={handleChangeNickName}
                                            placeholder="Thêm nickname"
                                            className={cx('input-name')}
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('form-control')}>
                                <label className={cx('label-name')}>Ngày sinh</label>
                                <div className={cx('container')}>
                                    <select
                                        value={birthDay.day}
                                        onChange={handleChangeDay}
                                        className={cx('select-Time')}
                                        name="day"
                                    >
                                        {days.map((day) => {
                                            return (
                                                <option key={day} value={day}>
                                                    {day === 0 ? 'Ngày' : day}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <select
                                        value={birthDay.month}
                                        onChange={handleChangeMonth}
                                        className={cx('select-Time')}
                                        name="day"
                                    >
                                        {months.map((month) => {
                                            return (
                                                <option key={month} value={month}>
                                                    {month === 0 ? 'Tháng' : month}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <select
                                        value={birthDay.year}
                                        onChange={handleChangeYear}
                                        className={cx('select-Time')}
                                        name="day"
                                    >
                                        {years.map((year) => {
                                            return (
                                                <option key={year} value={year}>
                                                    {year === 0 ? 'Năm' : year}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="">Giới tính</label>
                                <FormControl>
                                    <RadioGroup
                                        onChange={handleChangeGender}
                                        value={gender}
                                        row={true}
                                        defaultValue={gender}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Nam" />
                                        <FormControlLabel value="male" control={<Radio />} label="Nữ" />
                                        <FormControlLabel value="other" control={<Radio />} label="Khác" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div onClick={handleClickNation} className={cx('form-control')}>
                                <label htmlFor="">Quốc tịch</label>
                                <div className={cx('container')}>
                                    <input readOnly value={national} type="text" className={cx('national')} />
                                    <ArrowDownThin className={cx('icon-down')} />
                                </div>
                            </div>
                            <div className={cx('form-control')}>
                                <label>&nbsp;</label>
                                <Button onClick={handleClickSubmit} className={cx('btn-submit')}>
                                    Lưu thay đổi
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('info vertical')}></div>
                    <div className={cx('info-right')}>
                        <span className={cx('info-title')}>Số điện thoại và Email</span>
                        <div className={cx('email-phone')}>
                            <div className={cx('list-item')}>
                                <div className={cx('info')}>
                                    <Image className={cx('img')} src={images.phone} />
                                    <div className={cx('detail')}>
                                        <span>Số điện thoại</span>
                                        <span>0862172319</span>
                                    </div>
                                </div>
                                <div className={cx('update')}>
                                    <button className={cx('btn-update')}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('email-phone')}>
                            <div className={cx('list-item')}>
                                <div className={cx('info')}>
                                    <Image className={cx('img')} src={images.message} />
                                    <div className={cx('detail')}>
                                        <span>Địa chỉ email</span>
                                        <span>nguyentiendat39000@gmail.com</span>
                                    </div>
                                </div>
                                <div className={cx('update')}>
                                    <button className={cx('btn-update')}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                        <span className={cx('info-title')}>Bảo mật</span>
                        <div className={cx('email-phone')}>
                            <div className={cx('list-item')}>
                                <div className={cx('info')}>
                                    <Image className={cx('img')} src={images.lock} />
                                    <div className={cx('detail')}>
                                        <span>Thiết lập mật khẩu</span>
                                    </div>
                                </div>
                                <div className={cx('update')}>
                                    <button className={cx('btn-update')}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('email-phone')}>
                            <div className={cx('list-item')}>
                                <div className={cx('info')}>
                                    <Image className={cx('img')} src={images.security} />
                                    <div className={cx('detail')}>
                                        <span>Thiết lập mã PIN</span>
                                    </div>
                                </div>
                                <div className={cx('update')}>
                                    <button className={cx('btn-update')}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isShowNational && (
                        <Nation
                            onChooseNational={handleChooseNational}
                            countryList={countryList}
                            onClick={handleClickNation}
                        />
                    )}
                    {isShowUploadAvatar && (
                        <UploadAvatar onSubmit={handleChangeAvatar} onClick={handleClickIsShowUploadAvatar} />
                    )}
                </div>
            </div>
        </div>
    );
}
