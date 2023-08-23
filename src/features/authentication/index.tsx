import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import style from './authentication.module.scss';
import Image from '~/components/Image';
import { images } from '~/assets/image';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
interface AuthProps {
    onClick: () => void;
}
export default function Auth({ onClick }: AuthProps) {
    const cx = classNames.bind(style);
    const [login, setLogin] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);
    const handleClose = () => {
        if (!onClick) return;
        onClick();
    };
    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            if (modalRef.current && !modalRef.current.contains(element) && !element.closest('.notLink')) {
                handleClose();
            }
        };
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);
    return (
        <div className={cx('overlay')}>
            <div className={cx('wrapper')}>
                <div ref={modalRef} className={cx('container')}>
                    <button onClick={handleClose} className={cx('btn-close')}>
                        <Image src={images.close} className={cx('image-close')} />
                    </button>
                    <div className={cx('main-left')}>
                        <div className={cx('main-left-wrapper')}>
                            <div className={cx('heading')}>
                                <h4>Xin chào,</h4>
                                <p>Đăng nhập hoặc Tạo tài khoản</p>
                            </div>
                            {login ? <LoginForm /> : <RegisterForm />}
                            <div className={cx('wrapper-btn')}></div>
                            <div className={cx('redirect')}>
                                {login ? (
                                    <span
                                        onClick={() => {
                                            setLogin(false);
                                        }}
                                        className={cx('link')}
                                    >
                                        Đăng ký
                                    </span>
                                ) : (
                                    <>
                                        <span
                                            onClick={() => {
                                                setLogin(true);
                                            }}
                                            className={cx('link')}
                                        >
                                            Đăng nhập
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className={cx('login-social')}>
                                <p className={cx('social-heading')}>
                                    <span>Hoặc tiếp tục bằng</span>
                                </p>
                                <ul className={cx('social-items')}>
                                    <li className={cx('social-item')}>
                                        <Image src={images.facebook} className={cx('social-image')} />
                                    </li>
                                    <li className={cx('social-item')}>
                                        <Image src={images.google} className={cx('social-image')} />
                                    </li>
                                </ul>
                                <p className={cx('note')}>
                                    Bằng việc tiếp tục, bạn đã đọc và đồng ý với
                                    <span className={cx('link-security')}>Chính sách bảo mật thông tin cá nhân </span>
                                    của Tiki
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('main-right')}>
                        <Image src={images.login} className={cx('image-login')} />
                        <div className={cx('content')}>
                            <h4 className={cx('title')}>Mua sắm tại Tiki</h4>
                            <span className={cx('desc')}>Siêu ưu đãi mỗi ngày</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
