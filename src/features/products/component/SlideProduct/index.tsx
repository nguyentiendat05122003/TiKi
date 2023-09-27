import Image from '~/components/Image';
import style from './SilderProduct.module.scss';
import classNames from 'classnames/bind';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRef } from 'react';
import { type Swiper as SwiperRef } from 'swiper';
import { LIST_SLIDER_PRODUCT } from '~/constants';
import { Arrow } from '~/components/Svg';
export default function SlideProduct() {
    const cx = classNames.bind(style);
    const swiperRef = useRef<SwiperRef>();
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    return (
        <div className={cx('img-product')}>
            <div className={cx('img-wrapper')}>
                <div className={cx('img-main')}>
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: swiperRef.current }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        loop={true}
                    >
                        {LIST_SLIDER_PRODUCT.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <Image src={item} className={cx('img')} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className={cx('thumnail-list')}>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        navigation={{
                            prevEl: '.prev-button',
                            nextEl: '.next-button',
                        }}
                        slidesPerView={4}
                        spaceBetween={15}
                        watchSlidesProgress={true}
                        freeMode={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                    >
                        {LIST_SLIDER_PRODUCT.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx} className={cx('slide-wrapper')}>
                                    <div className={cx('slide')}>
                                        <Image className={cx('slide-img')} src={item} />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <button className={cx('btn-prev', 'btn-slide')} onClick={handlePrevClick}>
                        <Arrow className={cx('icon-left')} />
                    </button>
                    <button className={cx('btn-next', 'btn-slide')} onClick={handleNextClick}>
                        <Arrow className={cx('icon-right')} />
                    </button>
                </div>
            </div>
        </div>
    );
}
