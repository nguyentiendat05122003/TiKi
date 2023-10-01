import style from './Cart.module.scss';
import classNames from 'classnames/bind';
import CartEmpty from './components/CartEmpty';
import CartStore from './components/CartStore';
import { useAppSelector } from '~/hooks';
export default function Cart() {
    const cx = classNames.bind(style);
    const listCartItem = useAppSelector((state) => state.cart.listCart);
    const isLogin = useAppSelector((state) => state.user.currentUser?.jwt);
    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h4>Giỏ Hàng</h4>
                </div>
                <div className={cx('content')}>
                    {listCartItem.length >= 1 && isLogin ? (
                        <CartStore data={listCartItem} />
                    ) : (
                        <CartEmpty />
                    )}
                </div>
            </div>
        </div>
    );
}
