import style from './FilterPrice.module.scss';
import classNames from 'classnames/bind';
export interface FilterPriceProps {}

export default function FilterPrice(props: FilterPriceProps) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Giá</h4>
            <div className={cx('fast-price-filter')}>
                <div className={cx('item')}>
                    <span className={cx('price')}>Dưới 60.000</span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('price')}>60.000 - 160.000</span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('price')}>160.000 - 380.000</span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('price')}>Trên 380.000</span>
                </div>
            </div>
            <div className={cx('price-small-text')}>Chọn khoảng giá</div>
            <div className={cx('input-group')}>
                <input className={cx('input-price')} type="text" placeholder="0" />
                <span>-</span>
                <input className={cx('input-price')} type="text" placeholder="0" />
            </div>
            <button className={cx('btn-submit')}>Áp dụng</button>
        </div>
    );
}
