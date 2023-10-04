import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { Facebook, Momo, SubTiki, Tiki, Visa, Youtube, ZaloApp, ZaloPay } from '../Svg';
export default function Footer() {
    const cx = classNames.bind(style);
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('block')}>
                        <h4 className={cx('heading-block')}>Hỗ trợ khách hàng</h4>
                        <p className={cx('hotline')}>
                            Hotline:
                            <span className={cx('phone-hotline')}>1900-6035</span>
                            <span style={{ display: 'block' }}>
                                (1000 đ/phút, 8-21h kể cả T7, CN)
                            </span>
                        </p>
                        <Link className={cx('link')} to="/">
                            Các câu hỏi thường gặp
                        </Link>
                        <Link className={cx('link')} to="/">
                            Gửi yêu cầu hỗ trợ
                        </Link>
                        <Link className={cx('link')} to="/">
                            Hướng dẫn đặt hàng
                        </Link>
                        <Link className={cx('link')} to="/">
                            Phương thức vận chuyển
                        </Link>
                        <Link className={cx('link')} to="/">
                            Chính sách đổi trả
                        </Link>
                        <Link className={cx('link')} to="/">
                            Hướng dẫn trả góp
                        </Link>
                        <Link className={cx('link')} to="/">
                            Chính sách hàng nhập khẩu
                        </Link>
                        <p>
                            Hỗ trợ khách hàng:
                            <Link to="/">hotro@tiki.vn</Link>
                        </p>
                        <p style={{ marginTop: '10px' }}>
                            <Link to="/">security@tiki.vn</Link>
                        </p>
                    </div>
                    <div className={cx('block')}>
                        <h4 className={cx('heading-block')}>Về Tiki</h4>
                        <Link className={cx('link')} to="/">
                            Giới thiệu Tiki
                        </Link>
                        <Link className={cx('link')} to="/">
                            Tiki Blog
                        </Link>
                        <Link className={cx('link')} to="/">
                            Tuyển dụng
                        </Link>
                        <Link className={cx('link')} to="/">
                            Chính sách bảo mật thanh toán
                        </Link>
                        <Link className={cx('link')} to="/">
                            Chính sách bảo mật thông tin cá nhân
                        </Link>
                        <Link className={cx('link')} to="/">
                            Chính sách giải quyết khiếu nại
                        </Link>
                        <Link className={cx('link')} to="/">
                            Điều khoản sử dụng
                        </Link>
                        <Link className={cx('link')} to="/">
                            Giới thiệu Tiki Xu
                        </Link>
                        <Link className={cx('link')} to="/">
                            Thưởng thêm Astra
                        </Link>
                        <Link className={cx('link')} to="/">
                            Gói hội viên VIP
                        </Link>
                        <Link className={cx('link')} to="/">
                            Tiếp thị liên kết cùng Tiki
                        </Link>
                        <Link className={cx('link')} to="/">
                            Bán hàng doanh nghiệp
                        </Link>
                        <Link className={cx('link')} to="/">
                            Điều kiện vận chuyển
                        </Link>
                    </div>
                    <div className={cx('block')}>
                        <h4 className={cx('heading-block')}>Hợp tác và liên kết</h4>
                        <Link className={cx('link')} to="/">
                            Quy chế hoạt động Sàn GDTMĐT
                        </Link>
                        <Link className={cx('link')} to="/">
                            Bán hàng cùng Tiki
                        </Link>
                        <h4 className={cx('heading-block')}>Chứng nhận bởi</h4>
                        <div className={cx('image-wrapper')}>
                            <Image
                                className={cx('image-real')}
                                src={
                                    'https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png'
                                }
                            />
                            <Image
                                className={cx('subscribed')}
                                src={
                                    'https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg'
                                }
                            />
                        </div>
                    </div>
                    <div className={cx('block', 'block-4')}>
                        <h4 className={cx('heading-block')}>Phương thức thanh toán</h4>
                        <p className={cx('payment')}>
                            <span className={cx('icon')}>
                                <SubTiki />
                            </span>
                            <span className={cx('icon')}>
                                <Visa />
                            </span>
                            <span className={cx('icon')}>
                                <Momo />
                            </span>
                            <span className={cx('icon')}>
                                <ZaloPay />
                            </span>
                        </p>
                        <h4 className={cx('heading-block')}>Dịch vụ giao hàng</h4>
                        <div className={cx('image-wrapper')}>
                            <Tiki />
                        </div>
                    </div>
                    <div className={cx('block', 'block-5')}>
                        <h4 className={cx('heading-block')}>Kết nối với chúng tôi</h4>
                        <p className={cx('img-icon-wrapper')}>
                            <Link className={cx('img-icon')} to="/">
                                <Facebook />
                            </Link>
                            <Link className={cx('img-icon')} to="/">
                                <Youtube />
                            </Link>
                            <Link className={cx('img-icon')} to="/">
                                <ZaloApp />
                            </Link>
                        </p>
                        <h4 className={cx('heading-block')}>Tải ứng dụng trên điện thoại</h4>
                        <div className={cx('image-app-wrapper')}>
                            <Image
                                className={cx('image-qr')}
                                src={
                                    '	https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png'
                                }
                            />
                            <div className="wrapper-installApp">
                                <Link to="/">
                                    <Image
                                        className={cx('img-installApp')}
                                        src={
                                            'https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png'
                                        }
                                    />
                                </Link>
                                <Link to="/">
                                    <Image
                                        className={cx('img-installApp')}
                                        src={
                                            'https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png'
                                        }
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
