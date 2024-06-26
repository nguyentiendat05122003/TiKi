import { Checkbox } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { images } from '~/assets/image';
import Image from '~/components/Image';
import { Start } from '~/components/Svg';
import productApi from '../../api';
import style from './DetailProduct.module.scss';
import SlideProduct from '../SlideProduct';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { FormatLocationFull } from '~/utils/formatLocationFull';
import Location from '~/features/Location';
import { FormatPrice } from '~/utils/formatPrice';
import { useSnackbar } from 'notistack';
import { addToCart, hideTippy, showTippy } from '~/slices/cartSlice';
import { productType } from '~/types/product';
export default function DetailProduct() {
    const cx = classNames.bind(style);
    const [quantity, setQuantity] = useState(1);
    const location = useAppSelector((state) => state.location.value);
    const isLogin = useAppSelector((state) => state.user.currentUser?.jwt);
    const [isShowLocation, setIsLocation] = useState(false);
    const match = useMatch({
        path: '/product/:id',
    });
    const [product, setProduct] = useState<productType>();
    const [insuranceProduct, setInsuranceProduct] = useState(0);
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        const fetch = async () => {
            const id = Number(match?.params.id);
            const res = await productApi.getProduct(id);
            console.log('res', res);
            setProduct(res);
            setInsuranceProduct(res.originalPrice * 0.005);
        };
        fetch();
    }, []);
    const handleIncreaseQuantity = () => {
        setQuantity((prev) => {
            return prev + 1;
        });
    };
    const handleDecreaseQuantity = () => {
        setQuantity((prev: number) => {
            if (prev === 1) {
                return 1;
            }
            return prev - 1;
        });
    };
    const handleClickLocation = () => {
        setIsLocation(!isShowLocation);
    };
    const handleAddProductToCart = () => {
        if (!isLogin) {
            enqueueSnackbar('Vui lòng đăng nhập để trải nghiệm tốt hơn', {
                autoHideDuration: 1000,
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
            });
            return;
        }
        dispatch(showTippy());
        dispatch(addToCart({ item: product, quantity }));
        window.scroll(0, -10);
        setTimeout(() => {
            dispatch(hideTippy());
        }, 9000);
    };
    return (
        <div className={cx('wrapper-container')}>
            <div className={cx('container')}>
                <div className={cx('info-product')}>
                    <SlideProduct />
                    <div className={cx('content-product')}>
                        <div className={cx('content-wrapper')}>
                            <div className={cx('info-main-product')}>
                                <div className={cx('wrapper')}>
                                    <div className={cx('header-product')}>
                                        <div className={cx('brandAuthor')}>
                                            <div className={cx('img-wrapper')}>
                                                <Image className={cx('img')} src={images.real} />
                                            </div>
                                        </div>
                                        <h1 className={cx('title')}>{product?.name}</h1>
                                        <div style={{ display: 'flex' }}>
                                            <div className={cx('rating')}>
                                                <div className={cx('review')}>
                                                    <div className={cx('start-quantity')}>5.0</div>
                                                    <div className={cx('start')}>
                                                        <Start />
                                                        <Start />
                                                        <Start />
                                                        <Start />
                                                        <Start />
                                                    </div>
                                                    <p className={cx('evaluate-quantity')}>(513)</p>
                                                    <div className={cx('separator')}></div>
                                                </div>
                                            </div>
                                            <div className={cx('sale-quantity')}>Đã bán 3055</div>
                                        </div>
                                    </div>
                                    <div className={cx('price-product')}>
                                        <div className={cx('current-price')}>
                                            {FormatPrice(product?.salePrice || 1)}
                                        </div>
                                        <div className={cx('discount')}>
                                            -{product?.promotionPercent}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('info-transport', 'item')}>
                                <div className={cx('heading')}>Thông tin vận chuyển</div>
                                <div className={cx('location-wrapper')}>
                                    <div className={cx('location')}>
                                        <div className={cx('current-location')}>
                                            Giao đến {FormatLocationFull(location)}
                                        </div>
                                        <span onClick={handleClickLocation}>Đổi</span>
                                    </div>
                                </div>
                                <div className={cx('service')}>
                                    <div className={cx('service-wrapper')}>
                                        <div className={cx('shipping-info-item')}>
                                            <div className={cx('header')}>
                                                <div className={cx('logo')}>
                                                    <Image
                                                        src={images.now}
                                                        className={cx('logo-img')}
                                                    />
                                                </div>
                                                <div className={cx('heading')}>
                                                    Giao siêu tốc 2h
                                                </div>
                                            </div>
                                            <div className={cx('info-detail')}>
                                                <span style={{ color: '#27272A' }}>
                                                    Trước 18h hôm nay:
                                                    <span style={{ color: '#00AB56' }}>
                                                        Miễn phí
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: '#808089',
                                                            textDecoration: 'line-through',
                                                        }}
                                                    >
                                                        25.000 <sup>đ</sup>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('shipping-info-item')}>
                                            <div className={cx('header')}>
                                                <div className={cx('logo')}>
                                                    <Image
                                                        src={images.sun}
                                                        className={cx('logo-img')}
                                                    />
                                                </div>
                                                <div className={cx('heading')}>
                                                    Giao đúng sáng mai
                                                </div>
                                            </div>
                                            <div className={cx('info-detail')}>
                                                <span style={{ color: '#27272A' }}>
                                                    8h - 12h, 25/09:
                                                    <span style={{ color: '#00AB56' }}>
                                                        Miễn phí
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: '#808089',
                                                            textDecoration: 'line-through',
                                                        }}
                                                    >
                                                        14.000 <sup>đ</sup>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('insurance', 'item')}>
                                <div className={cx('heading')}>Dịch vụ bổ sung</div>
                                <div className={cx('insurance-content')}>
                                    <div className={cx('img-insurance-wrapper')}>
                                        <Image
                                            className={cx('img-insurance')}
                                            src={images.insurance}
                                        />
                                    </div>
                                    <div className={cx('content')}>
                                        <div className={cx('info')}>
                                            <span className={cx('name')}>
                                                Bảo hiểm Thiết bị di động nâng cao
                                                <div className={cx('img')}>
                                                    <Image
                                                        className={cx('img-shock')}
                                                        src={images.shock}
                                                    />
                                                </div>
                                            </span>
                                            <span className={cx('price')}>
                                                {FormatPrice(insuranceProduct)}
                                                <sup>đ</sup>
                                            </span>
                                        </div>
                                        <Checkbox />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item', 'info-insurance')}>
                                <div className={cx('heading')}>Thông tin bảo hành</div>
                                <div className={cx('item')}>
                                    <span>Thời gian bảo hành:</span>
                                    <div className={cx('text-strong')}>12 Tháng</div>
                                </div>
                                <div className={cx('item')}>
                                    <span>Hình thức bảo hành:</span>
                                    <div className={cx('text-strong')}>Hóa đơn</div>
                                </div>
                                <div className={cx('item')}>
                                    <span>Nơi bảo hành:</span>
                                    <div className={cx('text-strong')}>Bảo hành chính hãng</div>
                                </div>
                                <div className={cx('item')}>
                                    <span>Hướng dẫn bảo hành:</span>
                                    <div className={cx('text-strong', 'link')}>Xem chi tiết</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('place-product')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>
                            <div className={cx('name-product')}>{product?.name}</div>
                        </div>
                        <div className={cx('add-to-cart')}>
                            <div className={cx('quantity')}>
                                <p>Số lượng</p>
                                <div className={cx('group-input')}>
                                    <button
                                        onClick={handleDecreaseQuantity}
                                        className={cx('btn-change')}
                                    >
                                        <span>-</span>
                                    </button>
                                    <input
                                        value={quantity}
                                        className={cx('input-quantity')}
                                        type=""
                                        readOnly
                                    />
                                    <button
                                        onClick={handleIncreaseQuantity}
                                        className={cx('btn-change')}
                                    >
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('price-wrapper')}>
                                <div className={cx('price-header')}>Tạm tính</div>
                                <div className={cx('price')}>
                                    {FormatPrice((product?.salePrice || 1) * quantity)}
                                    <sup>đ</sup>
                                </div>
                            </div>
                            <div className={cx('group-button')}>
                                <button
                                    onClick={() =>
                                        enqueueSnackbar('Chức năng này chưa hoàn thiện', {
                                            variant: 'warning',
                                            anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                            autoHideDuration: 1000,
                                        })
                                    }
                                    className={cx('btn-primary')}
                                >
                                    {' '}
                                    Mua ngay
                                </button>
                                <button
                                    onClick={handleAddProductToCart}
                                    className={cx('btn-outline')}
                                >
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowLocation && <Location onClick={handleClickLocation} />}
        </div>
    );
}
