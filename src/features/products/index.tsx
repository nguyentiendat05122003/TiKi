import { useState, useEffect } from 'react';
import style from './Product.module.scss';
import classNames from 'classnames/bind';
import { OPTIONS } from '~/constants';
import { ArrowLeft, ArrowRight } from '~/components/Svg';
import FilterView from './component/FilterView';
import ListProduct from './component/ListProducts';
import { productType } from '~/types/product';
import productApi from './api';
import PaginationRounded from './component/Pagination';
export default function Product() {
    //const [filters, setFilters] = useState({});
    //const [listProduct, setListProduct] = useState([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pagination, setPagination] = useState<any>({
        _start: 0,
        _limit: 15,
    });
    const [productList, setProductList] = useState<productType[]>([]);
    const [listSort, setListSort] = useState(OPTIONS);
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
            const res = await productApi.getAll(pagination);
            setPagination(res.pagination);
            setProductList(res.data);
        };
        fetch();
    }, []);
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
                            <span className={cx('current')}>1</span>/<span className={cx('last')}>50</span>
                        </div>
                        <div className={cx('list-arrow')}>
                            <ArrowLeft className={cx('arrow-icon')} />
                            <ArrowRight className={cx('arrow-icon')} />
                        </div>
                    </div>
                </div>
                <FilterView />
            </div>
            <ListProduct data={productList} />
            <PaginationRounded />
        </>
    );
}
