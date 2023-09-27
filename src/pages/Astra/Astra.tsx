import Image from '~/components/Image';
import style from './Astra.module.scss';
import classNames from 'classnames/bind';
import { Arrow, ArrowRight } from '~/components/Svg';
export default function Astra() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content-left')}>
                        <div className={cx('content-left-wrapper')}>
                            <div className={cx('content-left-main')}>
                                <div className={cx('card-wrapper')}>
                                    <div className={cx('card-content')}>
                                        <div className={cx('header')}>
                                            <div className="header-wrapper">
                                                <span className={cx('title')}>
                                                    KHÁCH HÀNG
                                                    <Arrow className="" />
                                                </span>
                                                <span className={cx('name-customer')}>
                                                    Đạt Nguyễn Tiến
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('content')}>
                                            <span className={cx('content-title')}>
                                                Tổng Astra (ASA) thưởng đã nhận
                                            </span>
                                            <span className={cx('value')}>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('content-left-below')}>
                                <div className={cx('balance-wrapper')}>
                                    <div className={cx('content')}>
                                        <div className={cx('header')}>
                                            <Image
                                                src="https://salt.tikicdn.com/ts/ta/80/8f/69/895051bd4ad12f6c0e7b721cdfbd1175.png"
                                                className={cx('img')}
                                            />
                                            <span className={cx('header-title')}>ASA khả dụng</span>
                                        </div>
                                        <span className={cx('value')}>0</span>
                                    </div>
                                    <Arrow className="" />
                                </div>
                                <div className={cx('balance-wrapper')}>
                                    <div className={cx('content')}>
                                        <div
                                            style={{ display: 'flex', flexWrap: 'nowrap' }}
                                            className={cx('header')}
                                        >
                                            <Image
                                                src="https://salt.tikicdn.com/ts/ta/3b/58/52/46cb60c9d63228edce6c77a944d0edf1.png"
                                                className={cx('img')}
                                            />
                                            <span
                                                style={{
                                                    color: 'rgb(128, 128, 137)',
                                                    textAlign: 'left',
                                                }}
                                                className={cx('header-title')}
                                            >
                                                39781 khách hàng đã trở thành hội viên VIP
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
