import { Link } from 'react-router-dom';
import { images } from '~/assets/image';
import Image from '~/components/Image';
import style from './CartEmpty.module.scss';
import classNames from 'classnames/bind';
export default function CartEmpty() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h4>Giỏ Hàng</h4>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-wrapper')}>
                    <Image src={images.emptyCart} className={cx('empty-img')} />
                    <p className={cx('empty-note')}>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                    <Link className={cx('cart_empty_continue')} to="/">
                        Tiếp tục mua sắm
                    </Link>
                </div>
            </div>
        </div>
    );
}
