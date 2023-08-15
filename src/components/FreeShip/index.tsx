import classNames from 'classnames/bind';
import style from './FreeShip.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import { images } from '~/assets/image';
export default function FreeShip() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link')} to="/">
                <Image className={cx('img')} src={images.freeShip} />
                <div className={cx('text')}>
                    <strong>mỗi ngày, tự động áp dụng không cần săn mã</strong>
                </div>
                <Image className={cx('icon')} src={images.arrowRight} />
            </Link>
        </div>
    );
}
