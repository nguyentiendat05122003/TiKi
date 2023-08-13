import classNames from 'classnames/bind';
import style from './SideBar.module.scss';

export default function SideBar() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('sidebar-wrapper')}>
            <div className={cx('sidebar-container')}>SIDEBAR</div>
        </div>
    );
}
