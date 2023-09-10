import style from './FilterByCategory.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import categoryApi from '../../api/categoryApi';
import { categoryType } from '~/types/product';
import SkeletonText from '~/components/SkeletonText';
export interface FilterByCategoryProps {}

export default function FilterByCategory(props: FilterByCategoryProps) {
    const cx = classNames.bind(style);
    const [listCategories, setCategories] = useState<categoryType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true);
                const res = await categoryApi.getListCategories();
                setIsLoading(false);
                setCategories(res);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        fetch();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-item')}>
                <h4 className={cx('title')}>Danh Mục Sản Phẩm</h4>
                <div className="list-category">
                    {isLoading ? (
                        <SkeletonText numItem={5} />
                    ) : (
                        <>
                            {listCategories.map((item) => (
                                <div key={item.id} className={cx('link')}>
                                    {item.name}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
