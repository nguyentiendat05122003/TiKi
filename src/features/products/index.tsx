import { useState, useEffect, useMemo } from 'react';
import style from './Product.module.scss';
import classNames from 'classnames/bind';
import { OPTIONS } from '~/constants';
import { ArrowLeft, ArrowRight } from '~/components/Svg';
import FilterView from './component/FilterView';
import ListProduct from './component/ListProducts';
import { paginationParamType, paginationResponseType, productType } from '~/types/product';
import productApi from './api';
import PaginationRounded from './component/Pagination';
import SkeletonProduct from '~/components/SkeletonProduct';
export default function Product() {
    //const [filters, setFilters] = useState({});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pagination, setPagination] = useState<any>({
        _start: 0,
        _limit: 15,
        _page: 1,
    });
    const [responsePagination, setResponsePagination] = useState<paginationResponseType>({
        page: 0,
        limit: 0,
        total: 0,
    });
    const [productList, setProductList] = useState<productType[]>([]);
    const [listSort, setListSort] = useState(OPTIONS);
    const [isLoading, setIsLoading] = useState(false);
    const cx = classNames.bind(style);
    const handleClickSort = (id: number) => {
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
                const res = await productApi.getAll(pagination);
                setProductList(res.data);
                setIsLoading(false);
                setResponsePagination(res.pagination);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        };
        fetch();
    }, [pagination]);
    const handleChangePage = (page: number) => {
        setPagination((prev: paginationParamType) => {
            return { ...prev, _page: page };
        });
    };
    const handleIncreasePage = () => {
        setPagination((prev: paginationParamType) => {
            return { ...prev, _page: prev._page + 1 };
        });
    };
    const handleDecreasePage = () => {
        setPagination((prev: paginationParamType) => {
            if (prev._page <= 1) {
                return prev;
            }
            return { ...prev, _page: prev._page - 1 };
        });
    };
    useMemo(() => {}, [responsePagination]);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('sorter-wrapper')}>
                    <div className={cx('search-sort')}>
                        <div className={cx('sort-list')}>
                            {listSort.map((item) => {
                                return (
                                    <div
                                        onClick={() => {
                                            handleClickSort(item.id);
                                        }}
                                        key={item.id}
                                        className={cx('list-item', { active: item.status })}
                                    >
                                        {item.title}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('search-navigator')}>
                        <div className={cx('paging')}>
                            <span className={cx('current')}>{pagination._page || 1}</span>/
                            <span className={cx('last')}>
                                {responsePagination.total / responsePagination.limit || 10}
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
                <FilterView />
            </div>
            {isLoading ? <SkeletonProduct lengthArr={15} /> : <ListProduct data={productList} />}
            <PaginationRounded
                totalPage={responsePagination.total / responsePagination.limit || 10}
                onClickPage={handleChangePage}
                page={pagination._page}
            />
        </>
    );
}
