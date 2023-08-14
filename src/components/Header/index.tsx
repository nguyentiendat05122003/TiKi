import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import { images } from '~/assets/image';
import Search from '../Search';
import ListMenuUserShortCut from '../ListUserShortCut';
import { setStatus } from '~/slices/MenuSlice';
import { useAppDispatch, useAppSelector } from '~/hooks';
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
                <div className={cx('middle-header')}>
                    <div className={cx('middle-left')}>
                        <div className={cx('logo-menu')}>
                            <Link to="/" className={cx('tiki-logo')}>
                                <Image src={images.logo} className={cx('logo')} alt="tiki-logo" />
                            </Link>
                        </div>
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
                <div className={cx('bottom-header')}></div>
            </div>
        </header>
    );
}
