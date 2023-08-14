import { MenuShortCutType } from '~/types';
import style from './ListUserShortCut.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import Button from '../Button';
export interface ListMenuUserShortCutProps {
    listData: MenuShortCutType[];
    onClick: (id: number) => void;
}

export default function ListMenuUserShortCut({ onClick, listData }: ListMenuUserShortCutProps) {
    const cx = classNames.bind(style);
    const handleClick = (id: number) => {
        if (id === 2) return;
        if (!onClick) return;
        onClick(id);
    };
    return (
        <div className={cx('header_user_shortcut')}>
            {listData.map((item) => {
                return (
                    <Button
                        onClick={() => {
                            handleClick(item.id);
                        }}
                        key={item.id}
                        to={item.to}
                        className={cx('user-item', { btn: !item.to }, { active: item.status })}
                    >
                        <Image src={item.status ? item.iconActive : item.iconDefault} className={cx('item-image')} />
                        <span className="text">{item.title}</span>
                    </Button>
                );
            })}
        </div>
    );
}
