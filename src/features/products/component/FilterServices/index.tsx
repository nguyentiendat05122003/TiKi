import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
} from '@mui/material';
import style from './FilterService.module.scss';
import classNames from 'classnames/bind';
import { filterParamsType } from '~/types/product';
import { SyntheticEvent } from 'react';
export interface FilterServiceProps {
    onChange: (value: filterParamsType) => void;
    filters: filterParamsType;
}

export default function FilterService({
    onChange,
    filters,
}: FilterServiceProps) {
    const cx = classNames.bind(style);
    const handleChange = (e: SyntheticEvent) => {
        const element = e.target as HTMLInputElement;
        const newFilter = { ...filters, [element.name]: element.checked };
        onChange(newFilter);
    };
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Dịch vụ</h4>
            <Box sx={{ display: 'flex' }}>
                <FormControl onChange={handleChange} variant="standard">
                    <FormGroup>
                        <FormControlLabel
                            sx={{ fontSize: '1.2rem' }}
                            onChange={handleChange}
                            control={
                                <Checkbox
                                    checked={filters.isFreeShip}
                                    name="isFreeShip"
                                />
                            }
                            label={
                                <span className={cx('text')}>
                                    Giao hàng miễn phí
                                </span>
                            }
                        />
                        <FormControlLabel
                            onChange={handleChange}
                            control={
                                <Checkbox
                                    checked={filters.isPromotion}
                                    name="isPromotion"
                                />
                            }
                            label={
                                <span className={cx('text')}>
                                    Có khuyến mãi
                                </span>
                            }
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </div>
    );
}
