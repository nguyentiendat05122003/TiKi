import CloseIcon from '@mui/icons-material/Close';
import { SuccessIcon } from '../Svg';
import Button from '../Button';
export interface ITippyCartProps {}
import style from './TippyCart.module.scss';
import classNames from 'classnames/bind';
import { useAppDispatch } from '~/hooks';
import { hideTippy } from '~/slices/cartSlice';
export default function TippyCart() {
    const cx = classNames.bind(style);
    const dispatch = useAppDispatch();
    const handleCloseTippy = () => {
        dispatch(hideTippy());
    };
    const handleRedirectToCart = () => {
        dispatch(hideTippy());
    };
    return (
        <div className={cx('wrapper')}>
            <div onClick={handleCloseTippy} className={cx('btn-close')}>
                <CloseIcon />
            </div>
            <p className={cx('status')}>
                <SuccessIcon className={cx('icon-success')} />
                Thêm vào giỏ hàng thành công!
            </p>
            <Button to="/cart" onClick={handleRedirectToCart} className={cx('btn-buy')}>
                Xem giỏ hàng và thanh toán
            </Button>
        </div>
    );
}
