import classNames from 'classnames/bind';
import style from './BottomNavigator.module.scss';
import Image from '../Image';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setStatus } from '~/slices/BottomNavigator';
export default function BottomNavigator() {
    const cx = classNames.bind(style);
    const dispatch = useAppDispatch();
    const handleClick = (id: number) => {
        dispatch(setStatus(id));
    };
    const listItemBottomNavigator = useAppSelector((state) => state.listBottomNavigator.listData);
    return (
        <div className={cx('wrapper')}>
            {listItemBottomNavigator.map((item) => {
                return (
                    <div
                        onClick={() => {
                            handleClick(item.id);
                        }}
                        className={cx('item')}
                    >
                        <Image src={item.status ? item.iconActive : item.iconDefault} className={cx('item-image')} />
                        <span className="text">{item.title}</span>
                    </div>
                );
            })}
        </div>
    );
}
