import Image from '~/components/Image';
import style from './Astra.module.scss';
import classNames from 'classnames/bind';
import { Arrow } from '~/components/Svg';
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
                                            <div className={cx('header-wrapper')}>
                                                <span className={cx('title')}>
                                                    KHÁCH HÀNG
                                                    <Arrow className={cx('')} />
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
                                    <Arrow className={cx('')} />
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
                    <div className={cx('content-right')}>
                        <div className={cx('content-right-wrapper')}>
                            <div className={cx('benefitsWrapper')}>
                                <div className={cx('heading')}>Tìm hiểu Astra Rewards</div>
                                <div className={cx('content')}>
                                    <div className={cx('item')}>
                                        <Image
                                            className={cx('item-img')}
                                            src="https://salt.tikicdn.com/ts/ta/0d/7d/a4/fcf11517325abbaf25512d72e0026979.png"
                                        />
                                        <span className={cx('text')}>Nhà bán hoàn ASA</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <Image
                                            className={cx('item-img')}
                                            src="https://salt.tikicdn.com/ts/ta/2f/4d/05/cf126b3eb6bbc249f3c94af8b0356757.png"
                                        />
                                        <span className={cx('text')}>Nhà bán hoàn ASA</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <Image
                                            className={cx('item-img')}
                                            src="https://salt.tikicdn.com/ts/ta/51/27/1d/c8deefc3b4da02dfb50f9f08b1ecadc9.png"
                                        />
                                        <span className={cx('text')}>Nhà bán hoàn ASA</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <Image
                                            className={cx('item-img')}
                                            src="https://salt.tikicdn.com/ts/ta/b0/a0/78/5a660899c4f1857be1721beb1ff0fa7d.png"
                                        />
                                        <span className={cx('text')}>Nhà bán hoàn ASA</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <Image
                                            className={cx('item-img')}
                                            src="https://salt.tikicdn.com/ts/ta/2f/4d/05/cf126b3eb6bbc249f3c94af8b0356757.png"
                                        />
                                        <span className={cx('text')}>Nhà bán hoàn ASA</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('sub-benefit')}>
                                <div className={cx('heading')}>Astra (ASA) là gì?</div>
                                <div className={cx('content')}>
                                    <div className={cx('introItem')}>
                                        <div className={cx('introItem-img')}>
                                            <Image
                                                className={cx('img')}
                                                src="https://salt.tikicdn.com/ts/ta/02/d9/4a/0f776a7f7a4e2f77610c27a9fb952a0b.png"
                                            />
                                        </div>
                                        <div className={cx('introItem-text')}>
                                            <p className={cx('sub-title')}>Điểm thưởng mua sắm</p>
                                            <div className={cx('desc')}>
                                                Hoàn điểm thưởng ASA khi mua hàng, mức hoàn tuỳ gói
                                                hội viên.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('introItem')}>
                                        <div className={cx('introItem-img')}>
                                            <Image
                                                className={cx('img')}
                                                src="https://salt.tikicdn.com/ts/ta/33/ce/1f/82bebab75541c839757d107417ecc66d.png"
                                            />
                                        </div>
                                        <div className={cx('introItem-text')}>
                                            <p className={cx('sub-title')}>Điểm thưởng mua sắm</p>
                                            <div className={cx('desc')}>
                                                Hoàn điểm thưởng ASA khi mua hàng, mức hoàn tuỳ gói
                                                hội viên.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('introItem')}>
                                        <div className={cx('introItem-img')}>
                                            <Image
                                                className={cx('img')}
                                                src="https://salt.tikicdn.com/ts/ta/0e/04/53/624df741aacffd7ed40003037315e9da.png"
                                            />
                                        </div>
                                        <div className={cx('introItem-text')}>
                                            <p className={cx('sub-title')}>Điểm thưởng mua sắm</p>
                                            <div className={cx('desc')}>
                                                Hoàn điểm thưởng ASA khi mua hàng, mức hoàn tuỳ gói
                                                hội viên.
                                            </div>
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
