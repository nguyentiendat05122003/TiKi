import { useEffect, useRef, useState } from 'react';
import Image from '../Image';
import style from './Search.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/assets/image';
import { HEADER_SEARCH } from '~/constants';
export default function Search() {
    const cx = classNames.bind(style);
    const inputRef = useRef(null);
    const timerId = useRef<NodeJS.Timeout | null>(null);
    const [placeholderText, setPlaceholderText] = useState('Bạn tìm gì hôm nay');
    useEffect(() => {
        timerId.current = setInterval(() => {
            const text = HEADER_SEARCH[Math.floor(Math.random() * HEADER_SEARCH.length)];
            setPlaceholderText(text);
        }, 3000);
        return () => {
            clearInterval(timerId.current as NodeJS.Timeout);
        };
    }, []);
    return (
        <div className={cx('search-container')}>
            <div className={cx('search-wrapper')}>
                <Image src={images.searchIcon} className={cx('icon-search')} />
                <input placeholder={placeholderText} ref={inputRef} type="text" className={cx('input-search')} />
                <button className={cx('btn-search')}>Tìm kiếm</button>
            </div>
        </div>
    );
}
