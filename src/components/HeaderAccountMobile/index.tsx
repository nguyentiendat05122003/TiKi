import classNames from 'classnames/bind';
import style from './HeaderAccountMobile.module.scss';
import { Link } from 'react-router-dom';
import { ArrowRight, AvatarDefault } from '../Svg';
import { NavbarItemMobile } from '~/constants';
import { forwardRef } from 'react';
import { useAppSelector } from '~/hooks';
export interface HeaderAccountMobileProps {}

const HeaderAccountMobile = forwardRef<HTMLDivElement, HeaderAccountMobileProps>((_props, ref) => {
    const cx = classNames.bind(style);
    const user = useAppSelector((state) => state.user.currentUser?.user);
    const navSubList = [
        { id: 0, title: 'Tiki Deal', to: '/' },
        { id: 1, title: 'Phiếu quà tặng', to: '/' },
        { id: 2, title: 'Ưu đãi cho chủ thẻ ngân hàng', to: '/' },
    ];
    return (
        <div className={cx('wrapper')}>
            <div ref={ref} className={cx('container')}>
                <div className={cx('header')}>
                    <Link to="/" className={cx('link-header')}>
                        <AvatarDefault className={cx('avatar-img')} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>{user ? user.username : 'Đăng nhập'}</div>
                            <div className={cx('email')}>
                                {user ? user.email : 'Nhận nhiều ưu đãi hơn'}
                            </div>
                        </div>
                        <ArrowRight className={cx('icon-right')} />
                    </Link>
                </div>
                <div className={cx('content')}>
                    <ul className={cx('nav-list')}>
                        {NavbarItemMobile.map((item) => {
                            const CompIcon = item.icon;
                            return (
                                <li key={item.id} className={cx('nav-item')}>
                                    <Link className={cx('nav-link')} to={item.to}>
                                        {<CompIcon />}
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={cx('sub-head')}>KHUYẾN MÃI HOT</div>
                    <ul className={cx('nav-sub', 'nav-list')}>
                        {navSubList.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link className={cx('nav-link')} to={item.to}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={cx('sub-head')}>HỖ TRỢ</div>
                    <ul className={cx('nav-sub', 'nav-list')}>
                        <li>
                            <span className={cx('hotline-text')}>
                                HOTLINE:
                                <strong className={cx('strongly')}> 1900 - 6035 </strong>
                                1000đ/phút
                            </span>
                        </li>
                        <li>
                            <Link className={cx('nav-link', 'support-customer')} to="/">
                                Hỗ trợ khách hàng
                                <ArrowRight className="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('overlay')}></div>
        </div>
    );
});
export default HeaderAccountMobile;
