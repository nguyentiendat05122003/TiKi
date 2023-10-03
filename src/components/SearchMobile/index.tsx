import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '~/assets/image';
import { Categories, SEARCH_SUGGEST, TrendingSearch } from '~/constants';
import { ProductType, SuggestSearchType } from '~/types';
import BottomNavigator from '../BottomNavigator';
import HeaderAccountMobile from '../HeaderAccountMobile';
import Image from '../Image';
import { Arrow, ArrowLeft, CartSvg, SearchSvg } from '../Svg';
import style from './SearchMobile.module.scss';
export interface SearchMobileProps {
    onClick: () => void;
}

export default function SearchMobile({ onClick }: SearchMobileProps) {
    const cx = classNames.bind(style);
    const [isShowMore, setIsShowMore] = useState(true);
    const accountContainerRef = useRef<HTMLDivElement>(null);
    const [isShowAccountMobile, setIsShowAccountMobile] = useState(false);
    const [numberItemShow, setNumberItemShow] = useState(3);
    const [searchSuggestList, setSearchSuggestList] = useState<SuggestSearchType[] | ProductType[]>(
        [],
    );
    const [trendSuggestList, setTrendSuggestList] = useState<SuggestSearchType[]>([]);
    const [categoryList, setCategoryList] = useState<SuggestSearchType[]>([]);
    const handleShowMore = () => {
        setIsShowMore(false);
        setNumberItemShow(SEARCH_SUGGEST.length);
    };
    const handleCollapse = () => {
        setIsShowMore(true);
        setNumberItemShow(3);
    };
    useEffect(() => {
        //fake api
        setSearchSuggestList(SEARCH_SUGGEST);
        setTrendSuggestList(TrendingSearch);
        setCategoryList(Categories);
    }, []);
    const handleClickCloseSearch = () => {
        if (!onClick) return;
        onClick();
    };
    // useEffect(() => {
    //     if (data.length > 0) {
    //         setSearchSuggestList(data);
    //     }
    // }, [data]);
    // const handleClick = () => {
    //     onClick();
    // };
    const handleClickShowAccountMobile = () => {
        setIsShowAccountMobile(true);
    };
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            if (accountContainerRef.current) {
                if (
                    !element?.closest(`.${accountContainerRef.current.className}`) &&
                    !element.matches(`.${cx('btn-menu')}`)
                ) {
                    setIsShowAccountMobile(false);
                }
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-search')}>
                <button onClick={handleClickCloseSearch} className={cx('btn-back')}>
                    <ArrowLeft className="" />
                </button>
                <button onClick={handleClickShowAccountMobile} className={cx('btn-menu')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={cx('search-wrapper')}>
                    <SearchSvg className="" />
                    <input placeholder="Bạn đang tìm kiếm" type="text" className={cx('input')} />
                </div>
                <div className={cx('cart-wrapper')}>
                    <Link className={cx('cart-link')} to="/">
                        <CartSvg />
                    </Link>
                </div>
            </div>
            <div className={cx('history-container')}>
                <div className={cx('suggest-list')}>
                    {searchSuggestList.slice(0, numberItemShow).map((item) => {
                        return (
                            <Link
                                key={item.id}
                                className={cx('item-link')}
                                to={`products/${item.id}` || item.to}
                            >
                                <Image
                                    src={item.thumbnail || images.search2}
                                    className={cx('link-img')}
                                />
                                <div className={cx('item-text')}>{item.name}</div>
                            </Link>
                        );
                    })}
                </div>
                <div className={cx('show-more')}>
                    <div className={cx('show-more-wrapper')}>
                        {isShowMore ? (
                            <div onClick={handleShowMore}>
                                Xem thêm
                                <Arrow className={cx('right-icon')} />
                            </div>
                        ) : (
                            <div onClick={handleCollapse}>
                                Thu gọn
                                <Arrow className={cx('top-icon')} />
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('list-trend')}>
                    <div className={cx('list-trend-wrapper')}>
                        <div className={cx('heading')}>
                            <Image src={images.trend} className={cx('heading-icon')} />
                            <div>Tìm Kiếm Phổ Biến</div>
                        </div>
                        <div className={cx('content')}>
                            {trendSuggestList.map((item) => {
                                return (
                                    <Link key={item.id} className={cx('link')} to={item.to}>
                                        <Image
                                            src={item.thumbnail || images.noImage}
                                            className={cx('trend-img')}
                                        />
                                        <span className={cx('title')}>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('category-list')}>
                    <div className={cx('heading')}>Danh Mục Nổi Bật</div>
                    <div className={cx('category-wrapper')}>
                        {categoryList.map((item) => {
                            return (
                                <Link key={item.id} to={item.to} className={cx('link')}>
                                    <div className={cx('thumb')}>
                                        <div className={cx('thumb-wrapper')}>
                                            {' '}
                                            <Image
                                                src={item.thumbnail || images.noImage}
                                                className={cx('image')}
                                            />
                                        </div>
                                    </div>
                                    <span className={cx('title')}>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <BottomNavigator />
            {isShowAccountMobile && <HeaderAccountMobile ref={accountContainerRef} />}
        </div>
    );
}
