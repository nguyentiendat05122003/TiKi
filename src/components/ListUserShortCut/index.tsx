import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useAppSelector } from '~/hooks';
import { MenuShortCutType } from '~/types';
import Button from '../Button';
import Image from '../Image';
import TippyAccount from '../TippyAccount';
import style from './ListUserShortCut.module.scss';
export interface ListMenuUserShortCutProps {
    listData: MenuShortCutType[];
    onClick: (id: number) => void;
    onClickAuth: () => void;
    classes: string;
}

export default function ListMenuUserShortCut({
    classes,
    onClick,
    listData,
    onClickAuth,
}: ListMenuUserShortCutProps) {
    const userLogin = useAppSelector((state) => state.user.currentUser?.jwt);
    const cx = classNames.bind(style);
    const handleClick = (id: number) => {
        if (id === 2 && userLogin) return;
        if (id === 2 && !userLogin) {
            onClick(0);
            onClickAuth();
        } else {
            if (!onClick) return;
            onClick(id);
        }
    };
    return (
        <div className={cx('header_user_shortcut', classes)}>
            {listData.map((item) => {
                let Layout;
                if (item.isHover && userLogin) {
                    Layout = TippyAccount;
                } else {
                    Layout = Fragment;
                }
                return (
                    <Layout key={item.id}>
                        <div>
                            <Button
                                onClick={() => {
                                    handleClick(item.id);
                                }}
                                to={item.to}
                                className={cx(
                                    'user-item',
                                    //{ ['user-item']: item.to},
                                    { btn: !item.to },
                                    { active: item.status },
                                    { notLink: !item.to },
                                )}
                            >
                                <Image
                                    src={item.status ? item.iconActive : item.iconDefault}
                                    className={cx('item-image')}
                                />
                                <span className="text">{item.title}</span>
                            </Button>
                        </div>
                    </Layout>
                );
            })}
        </div>
    );
}
