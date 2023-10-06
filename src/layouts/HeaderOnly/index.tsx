import { ReactNode } from 'react';
import Header from '~/components/Header';
import classnames from 'classnames/bind';
import style from './HeaderOnly.module.scss';
import FreeShip from '~/components/FreeShip';
import Footer from '~/components/Footer';
import { useAppSelector } from '~/hooks';
export interface HeaderOnlyProps {
    children: ReactNode;
}

export function HeaderOnly({ children }: HeaderOnlyProps) {
    const cx = classnames.bind(style);
    const isMobile = useAppSelector((state) => state.agent.value);
    return (
        <div className={cx('main')}>
            <Header />
            <FreeShip />
            <div className={cx('content-wrapper')}>{children}</div>
            {!isMobile && <Footer />}
        </div>
    );
}
