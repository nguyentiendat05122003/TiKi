import classnames from 'classnames/bind';
import { useEffect } from 'react';
import BottomNavigator from '~/components/BottomNavigator';
import Product from '~/features/products';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setAgent } from '~/slices/agentSlice';
import style from './Home.module.scss';
export function Home() {
    const cx = classnames.bind(style);
    const dispatch = useAppDispatch();
    const isMobile = useAppSelector((state) => state.agent.value);
    useEffect(() => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i),
        );
        dispatch(setAgent(mobile));
    }, [dispatch]);
    return (
        <div className={cx('main', { space: isMobile })}>
            <div>
                <Product />
            </div>
            {isMobile && <BottomNavigator />}
        </div>
    );
}
