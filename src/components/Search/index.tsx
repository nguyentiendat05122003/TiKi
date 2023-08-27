import classNames from 'classnames/bind';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { images } from '~/assets/image';
import { HEADER_SEARCH } from '~/constants';
import Image from '../Image';
import style from './Search.module.scss';
interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}
const Search = forwardRef<HTMLDivElement, SearchProps>(({ value, onChange }, ref) => {
    const cx = classNames.bind(style);
    const inputRef = useRef(null);
    const timerId = useRef<NodeJS.Timeout | null>(null);
    const [placeholderText, setPlaceholderText] = useState('Bạn tìm gì hôm nay');
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        if (!input.value.startsWith(' ')) {
            onChange(input.value);
        }
    };
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
        <div ref={ref} className={cx('search-container')}>
            <div className={cx('search-wrapper')}>
                <Image src={images.searchIcon} className={cx('icon-search')} />
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholderText}
                    ref={inputRef}
                    type="text"
                    className={cx('input-search')}
                />
                <button className={cx('btn-search', 'hide-on-mobile')}>Tìm kiếm</button>
            </div>
        </div>
    );
});
export default Search;
