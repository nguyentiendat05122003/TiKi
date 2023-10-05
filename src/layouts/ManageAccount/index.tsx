import { ReactNode, useState } from 'react';
import FreeShip from '~/components/FreeShip';
import Header from '~/components/Header';
import style from './AccountEdit.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { Arrow } from '~/components/Svg';
import Image from '~/components/Image';
import { InfoAccountList } from '~/constants';
import { images } from '~/assets/image';
import Auth from '~/features/authentication';
import RequireLogin from '~/components/RequireLogin';
import { useAppSelector } from '~/hooks';
import Footer from '~/components/Footer';
export interface AccountEditProps {
    children: ReactNode;
}

export default function ManageAccount({ children }: AccountEditProps) {
    const cx = classNames.bind(style);
    const isLogin = useAppSelector((state) => state.user.currentUser?.jwt);
    const user = useAppSelector((state) => state.user.currentUser?.user);
    const [isShowLogin, setIsShowLogin] = useState(!!isLogin);
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <FreeShip />
                <div className={cx('content-wrapper')}>
                    <div className={cx('account-layout')}>
                        <div className={cx('header-wrapper')}>
                            <div className={cx('container-header')}>
                                <div className={cx('breadcrumb')}>
                                    <Link className={cx('breadcrumb-link')} to="/">
                                        <span>Trang chủ</span>
                                    </Link>
                                    <span className={cx('icon-next')}>
                                        <Arrow className={cx('icon')} />
                                    </span>
                                    <Link className={cx('breadcrumb-item')} to="/">
                                        <span>Thông tin tài khoản</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('sidebar')}>
                            <div className={cx('account-avatar')}>
                                <Image src={images.accountAvatarDefault} className={cx('avatar')} />
                                <div className={cx('info')}>
                                    Tài khoản của
                                    <strong className={cx('name-user')}>{user.email}</strong>
                                </div>
                            </div>
                            <ul className={cx('list-item')}>
                                {InfoAccountList.map((item) => {
                                    const CompIcon = item.icon;
                                    return (
                                        <li key={item.id}>
                                            <NavLink className={cx('item-link')} to={item.to}>
                                                <CompIcon />
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={cx('container')}>
                            {isLogin ? <>{children}</> : <RequireLogin key={Math.random()} />}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {!isShowLogin && (
                <Auth
                    onClick={() => {
                        setIsShowLogin(!isLogin);
                    }}
                />
            )}
        </>
    );
}
