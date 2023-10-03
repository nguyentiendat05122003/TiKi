import { FormControlLabel } from '@mui/material';
import style from './CartStore.module.scss';
import classNames from 'classnames/bind';
import { DeleteIcon } from '~/components/Svg';
import Image from '~/components/Image';
import { itemInCartType } from '~/types/cart';
import { FormatPrice } from '~/utils/formatPrice';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { removeCartItem, setQuantity } from '~/slices/cartSlice';
import { ChangeEvent, KeyboardEvent, SyntheticEvent, useRef, useState } from 'react';

export interface CartStoreProps {
    data: itemInCartType[] | [];
}
export default function CartStore({ data }: CartStoreProps) {
    const cx = classNames.bind(style);
    const [totalPrice, setTotalPrice] = useState(0);
    const listCart = useAppSelector((state) => state.cart.listCart);
    const selectAllElement = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    let listCheckbox = document.querySelectorAll("input[name='cb-select']");
    const handleRemoveItem = (id: number) => {
        dispatch(removeCartItem(id));
    };
    const handleIncreaseQuantity = (id: number, quantity: number, cartItem: itemInCartType) => {
        [...listCheckbox].map((item) => {
            const element = item as HTMLInputElement;
            if (element?.checked && element.tabIndex === id) {
                setTotalPrice((prev) => {
                    return prev + (cartItem.item?.salePrice || 1) * 1;
                });
            } else {
                return;
            }
        });
        dispatch(setQuantity({ newQuantity: quantity + 1, id }));
    };
    const handleDecreaseQuantity = (id: number, quantity: number, cartItem: itemInCartType) => {
        if (quantity <= 1) {
            return;
        }
        dispatch(setQuantity({ newQuantity: quantity - 1, id }));
        [...listCheckbox].map((item) => {
            const element = item as HTMLInputElement;
            if (element?.checked && element.tabIndex === id) {
                if (quantity <= 1) {
                    setTotalPrice((prev) => {
                        return prev;
                    });
                    quantity = 2;
                } else {
                    setTotalPrice((prev) => {
                        return prev - (cartItem.item?.salePrice || 1) * 1;
                    });
                }
            } else {
                return;
            }
        });
    };
    const handleSetQuantity = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        const quantity = parseInt(e.target.value);
        dispatch(setQuantity({ newQuantity: quantity, id }));
    };
    const handleNotNull = (e: KeyboardEvent<HTMLInputElement>, quantity: number) => {
        if (e.key === 'Backspace' && quantity <= 9) {
            e.preventDefault();
        }
    };
    const handleCheckPayment = (e: SyntheticEvent, cartItem: itemInCartType) => {
        listCheckbox = document.querySelectorAll("input[name='cb-select']");
        const element = e.target as HTMLInputElement;
        if (element.checked) {
            setTotalPrice((prev) => {
                return prev + (cartItem.item?.salePrice || 1) * cartItem.quantity;
            });
        } else if (!element.checked) {
            setTotalPrice((prev) => {
                return prev - (cartItem.item?.salePrice || 1) * cartItem.quantity;
            });
        }
        if (selectAllElement.current) {
            selectAllElement.current.checked =
                document.querySelectorAll("input[name='cb-select']:checked").length ===
                listCheckbox.length;
        }
    };
    const handleSelectAllStore = (e: SyntheticEvent) => {
        const cbAll = e.target as HTMLInputElement;
        listCheckbox = document.querySelectorAll("input[name='cb-select']");
        [...listCheckbox].forEach((item) => {
            const element = item as HTMLInputElement;
            element.checked = cbAll.checked;
        });
        if (cbAll.checked && listCart.length >= 1) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // const tmp = listCart.reduce((result: number, cur: itemInCartType) => {
            //     const salePrice = cur.item?.salePrice || 1;
            //     return result + salePrice * cur.quantity;
            // }, 0);
            // setTotalPrice(tmp);
            setTotalPrice(0);
        } else {
            setTotalPrice(0);
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('content-left')}>
                <div className={cx('heading-wrapper')}>
                    <div className={cx('heading-label')}>
                        <FormControlLabel
                            sx={{ fontSize: '1.2rem' }}
                            control={
                                <input ref={selectAllElement} type="checkbox" name="select-all" />
                            }
                            label={
                                <span className={cx('text')}>Tất cả ({data.length} sản phẩm)</span>
                            }
                            onChange={handleSelectAllStore}
                        />
                    </div>
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Thành tiền</span>
                    <span className={cx('remove-all')}>
                        <DeleteIcon className={cx('')} />
                    </span>
                </div>
                {data.map((cartItem, idx) => {
                    return (
                        <div key={idx} className={cx('item-container')}>
                            <div className={cx('item')}>
                                <div className={cx('item-container')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col-1')}>
                                            <div className={cx('info-item')}>
                                                <FormControlLabel
                                                    sx={{ fontSize: '1.2rem' }}
                                                    control={
                                                        <input
                                                            type="checkbox"
                                                            className={`cb-item`}
                                                            name="cb-select"
                                                            tabIndex={cartItem.item?.id}
                                                        />
                                                    }
                                                    onChange={(e) => {
                                                        handleCheckPayment(e, cartItem);
                                                    }}
                                                    label={
                                                        <span className={cx('text')}>
                                                            {cartItem.item?.name}
                                                        </span>
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('col-2')}>
                                            <p className={cx('product-prices')}>
                                                <span className={cx('real')}>
                                                    {FormatPrice(cartItem.item?.salePrice || 1)}đ
                                                </span>
                                                <del className={cx('origin-price')}>
                                                    {FormatPrice(cartItem.item?.originalPrice || 1)}
                                                    đ
                                                </del>
                                            </p>
                                        </div>
                                        <div className={cx('col-3')}>
                                            <div className={cx('form-wrapper')}>
                                                <span
                                                    onClick={() => {
                                                        handleDecreaseQuantity(
                                                            cartItem.item?.id || 1,
                                                            cartItem.quantity,
                                                            cartItem,
                                                        );
                                                    }}
                                                    className={cx('btn-decrease', 'btn')}
                                                >
                                                    <Image src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" />
                                                </span>
                                                <input
                                                    type="tel"
                                                    value={cartItem.quantity}
                                                    onChange={(e) => {
                                                        handleSetQuantity(
                                                            e,
                                                            cartItem.item?.id || 1,
                                                        );
                                                    }}
                                                    onKeyDown={(e) => {
                                                        handleNotNull(e, cartItem.quantity);
                                                    }}
                                                    className={cx('input')}
                                                />
                                                <span
                                                    onClick={() => {
                                                        handleIncreaseQuantity(
                                                            cartItem.item?.id || 1,
                                                            cartItem.quantity,
                                                            cartItem,
                                                        );
                                                    }}
                                                    className={cx('btn-increase', 'btn')}
                                                >
                                                    <Image src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('col-4')}>
                                            <span className={cx('product-price')}>
                                                {FormatPrice(cartItem.item?.salePrice || 1)}đ
                                            </span>
                                        </div>
                                        <div className={cx('col-5')}>
                                            <span
                                                onClick={() => {
                                                    handleRemoveItem(cartItem.item?.id || 1);
                                                }}
                                                className={cx('delete-wrapper')}
                                            >
                                                <DeleteIcon className={cx('')} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('content-right')}>
                <div className={cx('container')}>
                    <div className={cx('prices-items')}>
                        <div className={cx('prices-item')}>
                            <div className={cx('prices-text')}>Tạm tính</div>
                            <div className={cx('prices-value')}>{FormatPrice(totalPrice)}đ</div>
                        </div>
                        <div className={cx('prices-item')}>
                            <div className={cx('prices-text')}>Giảm giá</div>
                            <div className={cx('prices-value')}>0đ</div>
                        </div>
                    </div>
                    <div className={cx('price-total')}>
                        <span className={cx('prices-text')}>Tổng tiền</span>
                        <div className={cx('prices-content')}>
                            <div className={cx('price-value')}>
                                {FormatPrice(totalPrice) || 'Vui lòng chọn sản phẩm'}
                            </div>
                            <span className={cx('prices-value-noted')}>
                                (Đã bao gồm VAT nếu có)
                            </span>
                        </div>
                    </div>
                </div>
                <button className={cx('btn-buy')}>Mua Hàng 0</button>
            </div>
        </div>
    );
}
