import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '~/assets/image';
import { HEADER_LINKS } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setStatus } from '~/slices/MenuSlice';
import HistorySearch from '../HistorySearch';
import Image from '../Image';
import ListMenuUserShortCut from '../ListUserShortCut';
import Search from '../Search';
import style from './Header.module.scss';
import useDebounce from '~/hooks/useDebounce';
import { ProductType } from '~/types';
import productApi from '~/features/products/api';
import Location from '~/features/Location';
import { FormatLocation } from '~/utils/formatLocation';
export default function Header() {
    const cx = classNames.bind(style);
    const [isShowHistory, setIsShowHistory] = useState(false);
    const [isShowLocation, setIsShowLocation] = useState(false);
    const [searchResults, setSearchResults] = useState<ProductType[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const listMenuShortCut = useAppSelector((state) => state.menu.listData);
    const [searchValue, setSearchValue] = useState('');
    const debounce = useDebounce(searchValue, 500);
    const location = useAppSelector((state) => state.location.value);
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (e.target) {
                const element = e.target as HTMLElement;
                const classNameSearch = searchRef.current?.className || '';
                if (element?.closest(`.${classNameSearch}`)) {
                    setIsShowHistory(true);
                } else if (historyRef.current) {
                    const classNameHistory = historyRef.current?.className || '';
                    if (!element?.closest(`.${classNameHistory}`)) {
                        setIsShowHistory(false);
                    }
                } else if (locationRef.current) {
                    const classNameLocation = locationRef.current?.className || '';
                    if (!element?.closest(`.${classNameLocation}`) && !element.matches(`.${cx('location-wrapper')}`)) {
                        setIsShowLocation(false);
                    }
                }
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    const handleChange = (value: string) => {
        setSearchValue(value);
    };
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        const fetch = async () => {
            const res = await productApi.searchProduct({ name: debounce });
            setSearchResults(res);
        };
        try {
            fetch();
        } catch (error) {
            console.log(error);
        }
    }, [debounce]);
    const handleClick = (id: number) => {
        dispatch(setStatus(id));
    };
    const handleShowLocation = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsShowLocation(!isShowLocation);
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
                                <Search onChange={handleChange} value={searchValue} ref={searchRef} />
                                {isShowHistory && <HistorySearch data={searchResults} ref={historyRef} />}
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
                            <div onClick={handleShowLocation} className={cx('location-wrapper')}>
                                <div className={cx('location-container')}>
                                    <Image src={images.location} className={cx('header-icon-location')} />
                                    <h4 className={cx('title')}>Giao đến:</h4>
                                    <div className={cx('address')}>{FormatLocation(location)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowLocation && (
                <Location
                    onClick={() => {
                        setIsShowLocation(false);
                    }}
                    ref={locationRef}
                />
            )}
        </header>
    );
}
