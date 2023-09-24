import { Checkbox } from '@mui/material';
import classNames from 'classnames/bind';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { images } from '~/assets/image';
import Image from '~/components/Image';
import { Start } from '~/components/Svg';
import { ProductType } from '~/types';
import productApi from '../../api';
import style from './DetailProduct.module.scss';
export default function DetailProduct() {
    const cx = classNames.bind(style);
    const [quantity, setQuantity] = useState(1);
    const match = useMatch({
        path: '/product/:id',
    });
    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        const fetch = async () => {
            const id = Number(match?.params.id);
            const res = await productApi.getProduct(id);
            setProduct(res);
        };
        fetch();
    }, []);
    const safeDesc = DOMPurify.sanitize(product?.description || '<p>Error</p>');
    return (
        <div className={cx('wrapper-container')}>
            <div className={cx('container')}>
                <div className={cx('info-product')}>
                    <div className={cx('img-product')}>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('img-main')}>
                                <Image
                                    src={
                                        'https://salt.tikicdn.com/cache/368x368/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
                                    }
                                    className={cx('img')}
                                />
                            </div>
                            <div className={cx('thumnail-list')}>
                                <div className={cx('content')}>
                                    <div className={cx('slide')}>
                                        <Image
                                            className={cx('slide-img')}
                                            src={
                                                'https://salt.tikicdn.com/cache/368x368/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <h1 className={cx('title')}>Apple iPhone 14 Pro Max</h1>
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
                                            26.250.000
                                            <sup>đ</sup>
                                        </div>
                                        <div className={cx('discount')}>-23%</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('info-transport')}>
                                <div className={cx('heading')}>Thông tin vận chuyển</div>
                                <div className={cx('location-wrapper')}>
                                    <div className={cx('location')}>
                                        <div className={cx('current-location')}>
                                            Giao đến Q. Ba Đình, P. Cống Vị, Hà Nội
                                        </div>
                                        <span>Đổi</span>
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
                            <div className={cx('insurance')}>
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
                                                667.000
                                                <sup>đ</sup>
                                            </span>
                                        </div>
                                        <Checkbox />
                                    </div>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: safeDesc }}></div>
                        </div>
                    </div>
                </div>
                <div className={cx('place-product')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>
                            <div className={cx('name-product')}>iPhone 14</div>
                        </div>
                        <div className={cx('add-to-cart')}>
                            <div className={cx('quantity')}>
                                <p>Số lượng</p>
                                <div className={cx('group-input')}>
                                    <button className={cx('btn-change')}>
                                        <span>-</span>
                                    </button>
                                    <input
                                        value={quantity}
                                        className={cx('input-quantity')}
                                        type="text"
                                    />
                                    <button className={cx('btn-change')}>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('price-wrapper')}>
                                <div className={cx('price-header')}>Tạm tính</div>
                                <div className={cx('price')}>
                                    26.250.000 <sup>đ</sup>
                                </div>
                            </div>
                            <div className={cx('group-button')}>
                                <button className={cx('btn-primary')}> Mua ngay</button>
                                <button className={cx('btn-outline')}>Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
