import { useState, useEffect } from 'react';
import style from './Product.module.scss';
import classNames from 'classnames/bind';
import { OPTIONS } from '~/constants';
import { ArrowLeft, ArrowRight } from '~/components/Svg';
import FilterView from './component/FilterView';
import ListProduct from './component/ListProducts';
import { paginationResponseType, productType } from '~/types/product';
import productApi from './api';
import PaginationRounded from './component/Pagination';
import SkeletonProduct from '~/components/SkeletonProduct';
import { useAppSelector } from '~/hooks';
import SideBar from './component/SideBar';
import Slider from '~/components/Slider';
export default function Product() {
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 15,
        _sort: 'salePrice:DESC',
        isFreeShip: false,
        isPromotion: false,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [responsePagination, setResponsePagination] = useState<paginationResponseType>({
        page: 0,
        limit: 0,
        total: 0,
    });
    const isMobile = useAppSelector((state) => state.agent.value);
    const [productList, setProductList] = useState<productType[]>([]);
    const [listSort, setListSort] = useState(OPTIONS);
    const [isLoading, setIsLoading] = useState(false);
    const cx = classNames.bind(style);
    const handleClickSort = (id: number, value: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFilters((prev: any) => {
            return { ...prev, _sort: value };
        });
        setListSort((prev) => {
            prev.forEach((item) => {
                if (item.id === id) {
                    item.status = true;
                } else {
                    item.status = false;
                }
            });
            return [...prev];
        });
    };
    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true);
                const res = await productApi.getAll(filters);
                setProductList(res.data);
                setIsLoading(false);
                setResponsePagination(res.pagination);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        };
        fetch();
    }, [filters]);
    const handleChangePage = (page: number) => {
        setFilters((prev) => {
            return { ...prev, _page: page };
        });
    };
    const handleIncreasePage = () => {
        setFilters((prev) => {
            return { ...prev, _page: prev._page + 1 };
        });
    };
    const handleDecreasePage = () => {
        setFilters((prev) => {
            if (prev._page <= 1) {
                return prev;
            }
            return { ...prev, _page: prev._page - 1 };
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChangeFilters = (newFilter: any) => {
        setFilters((prev) => {
            return { ...prev, ...newFilter };
        });
    };
    return (
        <div className={cx('main')}>
            <div>{isMobile || <SideBar filters={filters} onChange={handleChangeFilters} />}</div>
            <div className={cx('container')}>
                {isMobile || <Slider />}
                <div className={cx('wrapper')}>
                    <div className={cx('sorter-wrapper')}>
                        <div className={cx('search-sort')}>
                            <div className={cx('sort-list')}>
                                {listSort.map((item) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                handleClickSort(item.id, item.value);
                                            }}
                                            key={item.id}
                                            className={cx('list-item', {
                                                active: item.status,
                                            })}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx('search-navigator')}>
                            <div className={cx('paging')}>
                                <span className={cx('current')}>{filters._page || 1}</span>/
                                <span className={cx('last')}>
                                    {Math.ceil(
                                        responsePagination.total / responsePagination.limit,
                                    ) || 0}
                                </span>
                            </div>
                            <div className={cx('list-arrow')}>
                                <div onClick={handleDecreasePage}>
                                    <ArrowLeft className={cx('arrow-icon')} />
                                </div>
                                <div onClick={handleIncreasePage}>
                                    <ArrowRight className={cx('arrow-icon')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {isMobile || <FilterView filters={filters} onChange={handleChangeFilters} />}
                </div>
                {isLoading ? (
                    <SkeletonProduct lengthArr={15} />
                ) : (
                    <ListProduct data={productList} />
                )}
                {isMobile || (
                    <PaginationRounded
                        totalPage={
                            Math.ceil(responsePagination.total / responsePagination.limit) || 0
                        }
                        onClickPage={handleChangePage}
                        page={filters._page}
                    />
                )}
            </div>
        </div>
    );
}
