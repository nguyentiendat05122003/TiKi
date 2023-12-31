import { Link } from 'react-router-dom';
import style from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { Start } from '~/components/Svg';
import { productType } from '~/types/product';
import Image from '~/components/Image';
import { FormatPrice } from '~/utils/formatPrice';
import thumbnailProduct from '~/assets/image/sliderProduct1.webp';
interface ProductItemProps {
    item: productType;
}
export default function ProductItem({ item }: ProductItemProps) {
    const cx = classNames.bind(style);
    return (
        <Link className={cx('item-link')} to={`/product/${item.id}`}>
            <span style={{ flexDirection: 'column' }}>
                <div className={cx('thumbnail')}>
                    <div className={cx('img-wrapper')}>
                        <Image className={cx('img')} src={item.thumbnail || thumbnailProduct} />
                    </div>
                </div>
                <div className={cx('info-wrapper')}>
                    <div className={cx('content')}>
                        <div className={cx('name')}>
                            <h3>{item.name}</h3>
                        </div>
                        <div className={cx('rating')}>
                            <div className={cx('starts')}>
                                <Start />
                                <Start />
                                <Start />
                                <Start />
                                <Start />
                            </div>
                            <span className={cx('quantity')}>Đã bán 3.3k</span>
                        </div>
                        <div className={cx('price-wrapper')}>
                            <div className={cx('price')}>
                                {FormatPrice(item.originalPrice)}
                                <sup>đ</sup>
                            </div>
                            <div className={cx('discount')}>-{item.promotionPercent}%</div>
                        </div>
                    </div>
                </div>
            </span>
        </Link>
    );
}
