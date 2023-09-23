/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import style from './SideBar.module.scss';
import Filters from '../Filters';
interface SideBarProps {
    filters: any;
    onChange: (value: any) => void;
}
export default function SideBar({ filters, onChange }: SideBarProps) {
    const cx = classNames.bind(style);
    const handleChangeFilter = (newFilter: any) => {
        onChange(newFilter);
    };
    return (
        <div className={cx('sidebar-wrapper')}>
            <div className={cx('sidebar-container')}>
                <Filters filters={filters} onChange={handleChangeFilter} />
            </div>
        </div>
    );
}
