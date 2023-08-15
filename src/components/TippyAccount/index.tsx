import Tippy from '@tippyjs/react/headless';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import style from './TippyAccount.module.scss';
import classNames from 'classnames/bind';
export interface TippyAccountProps {
    children: ReactElement;
}
export default function TippyAccount({ children }: TippyAccountProps) {
    const cx = classNames.bind(style);
    return (
        <div className="wrapper-btn-account">
            <Tippy
                interactive
                offset={[0, -1]}
                placement="bottom-start"
                render={(attrs) => (
                    <div className="box" tabIndex={-1} {...attrs}>
                        <div className={cx('wrapper-tippy')}>
                            <Link className={cx('link')} to="/">
                                <p className={cx('title')}>Thông tin tài khoản</p>
                            </Link>
                            <Link className={cx('link')} to="/">
                                <p className={cx('title')}>Đơn hàng của tôi</p>
                            </Link>
                            <Link className={cx('link')} to="/">
                                <p className={cx('title')}>Đăng xuất</p>
                            </Link>
                        </div>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}
