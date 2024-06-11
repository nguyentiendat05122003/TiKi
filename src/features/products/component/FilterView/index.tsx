/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip } from '@mui/material';
import style from './FilterView.module.scss';
import classNames from 'classnames/bind';
import { FILTERS } from '~/constants';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useMemo } from 'react';
export interface FilterViewProps {
    filters: any;
    onChange: (value: any) => void;
}
export default function FilterView({ filters, onChange }: FilterViewProps) {
    const cx = classNames.bind(style);
    const visibleFilters = useMemo(() => {
        return FILTERS.filter((item) => item.isVisible(filters));
    }, [filters]);
    console.log('filter', filters);
    console.log('visibleFilters', visibleFilters);
    return (
        <div className={cx('container')}>
            <p className={cx('sticky')}></p>
            {visibleFilters.map((item) => {
                return (
                    <Chip
                        key={item.id}
                        label={item.title(filters)}
                        sx={{ marginRight: '10px' }}
                        color={item.isActive(filters) ? 'primary' : 'default'}
                        onClick={() => {
                            item.isToggle ? onChange(item.onToggle(filters)) : () => {};
                        }}
                        onDelete={() => {
                            item.isRemove ? onChange(item.onRemove(filters)) : () => {};
                        }}
                        deleteIcon={item.isToggle ? <></> : <HighlightOffRoundedIcon />}
                    />
                );
            })}
        </div>
    );
}
