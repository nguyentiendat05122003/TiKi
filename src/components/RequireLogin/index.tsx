import style from '~/layouts/ManageAccount/AccountEdit.module.scss';
import classNames from 'classnames/bind';
import Auth from '~/features/authentication';
import { useState } from 'react';
import { statusLoginSelector, useAppSelector } from '~/hooks';

export default function RequireLogin() {
    const cx = classNames.bind(style);
    const state = useAppSelector((state) => state);
    const isLogin = statusLoginSelector(state);
    const [isShowLogin, setIsShowLogin] = useState(isLogin);
    const handleShowLogin = () => {
        setIsShowLogin((prev) => {
            return !prev;
        });
    };
    return (
        <div>
            <div className={cx('require-login')}>
                <p>Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích, nhận nhiều ưu đãi hấp dẫn.</p>
                <div onClick={handleShowLogin} className={cx('login-button')}>
                    Đăng nhập
                </div>
            </div>
            {isShowLogin && (
                <>
                    <Auth
                        onClick={() => {
                            setIsShowLogin(!isShowLogin);
                        }}
                    />
                </>
            )}
        </div>
    );
}
