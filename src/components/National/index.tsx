import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import classNames from 'classnames/bind';
import { images } from '~/assets/image';
import Image from '../Image';
import style from './National.module.scss';
import { Country } from '~/types';
import Button from '../Button';
export interface NationProps {
    countryList: Country[];
    onClick: () => void;
    onChooseNational: (value: string) => void;
}
import { ChangeEvent, useState } from 'react';

export default function Nation({ countryList, onClick, onChooseNational }: NationProps) {
    const cx = classNames.bind(style);
    const [isDisable, setIsDisable] = useState(false);
    const [tmpNational, setTmpNational] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTmpNational(e.target.value);
        setIsDisable(true);
    };
    const handleClick = () => {
        onChooseNational(tmpNational);
        onClick();
    };
    return (
        <div>
            <div className={cx('model-overlay')}></div>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <div className={cx('title')}>Chọn quốc tịch</div>
                        <div
                            onClick={() => {
                                onClick();
                            }}
                        >
                            <Image className={cx('icon-close')} src={images.close} />
                        </div>
                    </div>
                    <div className={cx('search')}>
                        <Image className={cx('icon-search')} src={images.searchIcon} />
                        <input readOnly type="text" placeholder="Tìm kiếm nhanh" className={cx('input-search')} />
                    </div>
                    <div className={cx('list')}>
                        <RadioGroup row={false} value={tmpNational} onChange={handleChange}>
                            {countryList.map((item, idx) => {
                                return (
                                    <FormControlLabel
                                        key={idx}
                                        value={item.country}
                                        control={<Radio />}
                                        label={item.country}
                                    />
                                );
                            })}
                        </RadioGroup>
                    </div>
                    <div className="bottom">
                        <Button onClick={handleClick} className={cx('btn-submit', { active: isDisable })}>
                            Lưu thay đổi
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
