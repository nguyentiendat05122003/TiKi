import classNames from 'classnames/bind';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../Image';
import style from './Slider.module.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import { SLIDER } from '~/constants';
import { images } from '~/assets/image';
export default function Slider() {
    const cx = classNames.bind(style);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('main-slider')}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        loop={true}
                        scrollbar={{ draggable: true, hide: true }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onSlideChange={(swiper) => {
                            if (swiper.scrollbar && swiper.scrollbar.el) {
                                swiper.scrollbar.el.style.display = 'none';
                            }
                        }}
                    >
                        {SLIDER.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <Image className={cx('image')} src={item.src} />
                                </SwiperSlide>
                            );
                        })}

                        <div className={cx('btn-navigation', 'left')} ref={navigationPrevRef}>
                            <Image className={cx('btn-prev')} src={images.prev} />
                        </div>
                        <div ref={navigationNextRef} className={cx('btn-navigation', 'right')}>
                            <Image className={cx('btn-next')} src={images.prev} />
                        </div>
                    </Swiper>
                </div>
                <div className={cx('banner', 'hide-on-tablet', 'hide-on-ipadPro')}>
                    <Image src={images.banner} className={cx('banner-image')} />
                </div>
            </div>
        </div>
    );
}
