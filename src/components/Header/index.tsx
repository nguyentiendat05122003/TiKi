import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '~/assets/image';
import { HEADER_LINKS } from '~/constants';
import Location from '~/features/Location';
import Auth from '~/features/authentication';
import productApi from '~/features/products/api';
import { useAppDispatch, useAppSelector } from '~/hooks';
import useDebounce from '~/hooks/useDebounce';
import { setStatus } from '~/slices/MenuSlice';
import { ProductType } from '~/types';
import { FormatLocation } from '~/utils/formatLocation';
import HistorySearch from '../HistorySearch';
import Image from '../Image';
import ListMenuUserShortCut from '../ListUserShortCut';
import Search from '../Search';
import SearchMobile from '../SearchMobile';
import style from './Header.module.scss';
export default function Header() {
    const cx = classNames.bind(style);
    const [isShowAuth, setIsShowAuth] = useState(false);
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
    const isMobile = useAppSelector((state) => state.agent.value);
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
                    if (
                        !element?.closest(`.${classNameLocation}`) &&
                        !element.matches(`.${cx('location-wrapper')}`)
                    ) {
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
                        <Link
                            onClick={() => {
                                handleClick(0);
                            }}
                            to="/"
                            className={cx('tiki-logo', 'hide-on-mobile')}
                        >
                            <Image src={images.logo} className={cx('logo')} alt="tiki-logo" />
                        </Link>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('middle-header')}>
                            <div className={cx('middle-left')}>
                                {isMobile ? (
                                    <>
                                        {!isShowHistory && (
                                            <Search
                                                onChange={handleChange}
                                                value={searchValue}
                                                ref={searchRef}
                                            />
                                        )}
                                        {isShowHistory && (
                                            <SearchMobile
                                                onClick={() => {
                                                    setIsShowHistory(false);
                                                }}
                                            />
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <Search
                                            onChange={handleChange}
                                            value={searchValue}
                                            ref={searchRef}
                                        />
                                        {isShowHistory && (
                                            <HistorySearch data={searchResults} ref={historyRef} />
                                        )}
                                    </>
                                )}
                            </div>
                            <ListMenuUserShortCut
                                classes={cx('hide-on-mobile-and-tablet')}
                                onClickAuth={() => {
                                    setIsShowAuth(true);
                                }}
                                onClick={handleClick}
                                listData={listMenuShortCut}
                            />
                            <Link to="/cart">
                                <div className={cx('cart-wrapper')}>
                                    <div className={cx('cart-container')}>
                                        <div className={cx('cart-content')}>
                                            <Image src={images.cart} className={cx('cart-img')} />
                                            <div className={cx('cart-quantity')}>0</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('bottom-header', 'hide-on-mobile-and-tablet')}>
                            <div className={cx('header-quickLinks')}>
                                {HEADER_LINKS.map((item) => {
                                    return (
                                        <Link
                                            className={cx('header-quickLink-item')}
                                            key={item.id}
                                            to={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div
                                onClick={handleShowLocation}
                                className={cx('-wrapper', 'hide-on-mobile-and-tablet')}
                            >
                                <div className={cx('location-container')}>
                                    <Image
                                        src={images.location}
                                        className={cx('header-icon-location')}
                                    />
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
            {isShowAuth && (
                <Auth
                    onClick={() => {
                        setIsShowAuth(false);
                    }}
                />
            )}
        </header>
    );
}
