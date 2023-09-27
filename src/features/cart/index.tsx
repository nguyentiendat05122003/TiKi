import style from './Cart.module.scss';
import classNames from 'classnames/bind';
import CartEmpty from './components/CartEmpty';
import CartStore from './components/CartStore';
export default function Cart() {
    const cx = classNames.bind(style);
    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h4>Giỏ Hàng</h4>
                </div>
                <div className={cx('content')}>
                    <CartStore />
                </div>
            </div>
        </div>
    );
}
