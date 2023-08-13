import classNames from 'classnames/bind';
import style from './Header.module.scss';
export default function Header() {
    const cx = classNames.bind(style);
    return (
        <header className={cx('main-header')}>
            <div className={cx('container-header')}>
                <div className={cx('middle-header')}>HEADER</div>
                <div className={cx('bottom-header')}></div>
            </div>
        </header>
    );
}
