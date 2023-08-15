import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import { images } from '~/assets/image';
import Search from '../Search';
import ListMenuUserShortCut from '../ListUserShortCut';
import { setStatus } from '~/slices/MenuSlice';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { HEADER_LINKS } from '~/constants';
export default function Header() {
    const cx = classNames.bind(style);
    const dispatch = useAppDispatch();
    const listMenuShortCut = useAppSelector((state) => state.menu.listData);
    const handleClick = (id: number) => {
        dispatch(setStatus(id));
    };
    return (
        <header className={cx('main-header')}>
            <div className={cx('container-header')}>
                <div className={cx('container-wrapper')}>
                    <div className={cx('logo-menu')}>
                        <Link to="/" className={cx('tiki-logo')}>
                            <Image src={images.logo} className={cx('logo')} alt="tiki-logo" />
                        </Link>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('middle-header')}>
                            <div className={cx('middle-left')}>
                                <Search />
                            </div>
                            <ListMenuUserShortCut onClick={handleClick} listData={listMenuShortCut} />
                            <div className={cx('cart-wrapper')}>
                                <div className={cx('cart-container')}>
                                    <div className={cx('cart-content')}>
                                        <Image src={images.cart} className={cx('cart-img')} />
                                        <div className={cx('cart-quantity')}>0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bottom-header')}>
                            <div className={cx('header-quickLinks')}>
                                {HEADER_LINKS.map((item) => {
                                    return (
                                        <Link className={cx('header-quickLink-item')} key={item.id} to={item.path}>
                                            {item.title}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className={cx('location-wrapper')}>
                                <div className={cx('location-container')}>
                                    <Image src={images.location} className={cx('header-icon-location')} />
                                    <h4 className={cx('title')}>Giao đến:</h4>
                                    <div className={cx('address')}>H. Văn Lâm, X. Tân Quang, Hưng Yên</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
