import { Box, Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import style from './FilterService.module.scss';
import classNames from 'classnames/bind';
export interface FilterServiceProps {}

export default function FilterService(props: FilterServiceProps) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Dịch vụ</h4>
            <Box sx={{ display: 'flex' }}>
                <FormControl component="fieldset" variant="standard">
                    <FormGroup>
                        <FormControlLabel
                            sx={{ fontSize: '1.2rem' }}
                            control={<Checkbox name="gilad" />}
                            label={<span className={cx('text')}>Giao siêu tốc 2H</span>}
                        />
                        <FormControlLabel
                            control={<Checkbox name="jason" />}
                            label={<span className={cx('text')}>Thưởng thêm Astra</span>}
                        />
                        <FormControlLabel
                            control={<Checkbox name="antoine" />}
                            label={<span className={cx('text')}>Trả góp 0%</span>}
                        />
                        <FormControlLabel
                            control={<Checkbox name="" />}
                            label={<span className={cx('text')}>Giảm sâu</span>}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </div>
    );
}
