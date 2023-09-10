import classNames from 'classnames/bind';
import style from './SideBar.module.scss';
import Filters from '../Filters';

export default function SideBar() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('sidebar-wrapper')}>
            <div className={cx('sidebar-container')}>
                <Filters />
            </div>
        </div>
    );
}
