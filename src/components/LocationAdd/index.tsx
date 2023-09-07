import { Link } from 'react-router-dom';
import { Plus } from '../Svg';
import style from './LocationAdd.module.scss';
import classNames from 'classnames/bind';
export default function LocationAdd() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>Sổ địa chỉ</div>
            <div className={cx('inner')}>
                <Link className={cx('link')} to="/customer/address">
                    <Plus className={cx('icon')} />
                    <span>Thêm địa chỉ mới</span>
                </Link>
            </div>
        </div>
    );
}
