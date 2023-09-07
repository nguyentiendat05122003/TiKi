import { images } from '~/assets/image';
import { SearchSvg } from '../Svg';
import CompImage from '~/components/Image';
import style from './OrderHistory.module.scss';
import classNames from 'classnames/bind';
import { TabsOrder } from '~/constants';
import { useState } from 'react';
export default function OrderHistory() {
    const cx = classNames.bind(style);
    const [tabs, setTabs] = useState(TabsOrder);
    const handleChangeTab = (id: number) => {
        setTabs((prev) => {
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
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('heading')}>Đơn hàng của tôi</div>
                <div className={cx('tabs-wrapper')}>
                    {tabs.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    handleChangeTab(item.id);
                                }}
                                key={item.id}
                                className={cx('tab-item', { active: item.status })}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
                <div className={cx('search-wrapper')}>
                    <SearchSvg className={cx('icon-search')} />
                    <input
                        className={cx('input-search')}
                        type="text"
                        placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
                    />
                    <div className={cx('btn-search')}>Tìm đơn hàng</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('img-wrapper')}>
                        <CompImage className={cx('img')} src={images.orderEmpty} />
                        <p className={cx('text')}>Chưa có đơn hàng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
