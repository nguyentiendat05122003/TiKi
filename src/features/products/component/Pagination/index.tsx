export interface PaginationProps {}
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ChangeEvent } from 'react';
export interface PaginationProps {
    totalPage: number;
    onClickPage: (page: number) => void;
    page: number;
}
export default function PaginationRounded({ totalPage, onClickPage, page }: PaginationProps) {
    const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
        onClickPage(value);
    };
    return (
        <div>
            <Stack spacing={2} style={{ margin: '77px 0px 16px' }}>
                <Pagination page={page} onChange={handleChangePage} count={totalPage} color="primary" shape="rounded" />
            </Stack>
        </div>
    );
}
