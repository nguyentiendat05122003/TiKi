import { ReactNode } from 'react';
import Header from '~/components/Header';
import classnames from 'classnames/bind';
import style from './HeaderOnly.module.scss';
export interface HeaderOnlyProps {
    children: ReactNode;
}

export function HeaderOnly({ children }: HeaderOnlyProps) {
    const cx = classnames.bind(style);
    return (
        <div>
            <Header />
            <div className={cx('content-wrapper')}>{children}</div>
        </div>
    );
}
