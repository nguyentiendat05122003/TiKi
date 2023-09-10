import { images } from '~/assets/image';
import Image from '~/components/Image';
import style from './FilterView.module.scss';
import classNames from 'classnames/bind';
export interface FilterViewProps {}

export default function FilterView(props: FilterViewProps) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('container')}>
            <p className={cx('sticky')}>
                FILTER VIEW
                {/* <Image className={cx('img-sticky')} src={images.sticky} alt="Giao siêu tốc 2H" /> */}
            </p>
        </div>
    );
}
