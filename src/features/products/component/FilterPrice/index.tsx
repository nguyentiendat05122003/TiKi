import { ChangeEvent, MouseEvent, useState } from 'react';
import style from './FilterPrice.module.scss';
import classNames from 'classnames/bind';
import { FilterPriceType } from '~/types/product';
export interface FilterPriceProps {
    onClick: (prices: FilterPriceType) => void;
}

export default function FilterPrice({ onClick }: FilterPriceProps) {
    const cx = classNames.bind(style);
    const [value, setValue] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });
    const handleChangeMin = (price: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setValue((value: any) => {
            return { ...value, salePrice_gte: price };
        });
    };
    const handleChangeMax = (price: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setValue((value: any) => {
            return { ...value, salePrice_lte: price };
        });
    };
    const handleClickSubmit = () => {
        onClick(value);
    };
    const handleClickPrice = (e: MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLSpanElement;
        const valueElement = element.textContent?.toString();
        if (valueElement?.includes('-')) {
            const min = parseInt(valueElement?.slice(0, valueElement.indexOf(' '))) * 1000;
            const max = parseInt(valueElement?.slice(valueElement.lastIndexOf(' '))) * 1000;
            onClick({ salePrice_gte: min, salePrice_lte: max });
        } else {
            if (element.textContent?.toString().includes('Dưới')) {
                const result =
                    parseFloat(
                        valueElement?.slice(element.textContent.lastIndexOf(' ')) || '10000000',
                    ) * 1000;
                onClick({ salePrice_gte: 0, salePrice_lte: result });
            } else if (element.textContent?.toString().includes('Trên')) {
                const result =
                    parseFloat(
                        valueElement?.slice(element.textContent.lastIndexOf(' ')) || '10000000',
                    ) * 1000;
                onClick({
                    salePrice_gte: result,
                    salePrice_lte: 9999999999999,
                });
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Giá</h4>
            <div className={cx('fast-price-filter')}>
                <div className={cx('item')}>
                    <span onClick={handleClickPrice} className={cx('price')}>
                        Dưới 60.000
                    </span>
                </div>
                <div className={cx('item')}>
                    <span onClick={handleClickPrice} className={cx('price')}>
                        60.000 - 160.000
                    </span>
                </div>
                <div className={cx('item')}>
                    <span onClick={handleClickPrice} className={cx('price')}>
                        160.000 - 380.000
                    </span>
                </div>
                <div className={cx('item')}>
                    <span onClick={handleClickPrice} className={cx('price')}>
                        Trên 380.000
                    </span>
                </div>
            </div>
            <div className={cx('price-small-text')}>Chọn khoảng giá</div>
            <div className={cx('input-group')}>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChangeMin(e.target.value);
                    }}
                    className={cx('input-price')}
                    type="text"
                    placeholder={value.salePrice_gte.toString()}
                    value={value.salePrice_gte}
                />
                <span>-</span>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        handleChangeMax(e.target.value);
                    }}
                    value={value.salePrice_lte}
                    className={cx('input-price')}
                    type="text"
                    placeholder={value.salePrice_lte.toString()}
                />
            </div>
            <button onClick={handleClickSubmit} className={cx('btn-submit')}>
                Áp dụng
            </button>
        </div>
    );
}
