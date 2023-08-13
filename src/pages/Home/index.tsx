import SideBar from '~/components/SideBar';
import style from './Home.module.scss';
import classnames from 'classnames/bind';
export function Home() {
    const cx = classnames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <SideBar />
            <div className={cx('container')}>Content</div>
        </div>
    );
}
