export interface PaginationProps {}
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationRounded(props: PaginationProps) {
    return (
        <div>
            <Stack spacing={2} style={{ margin: '77px 0px 16px' }}>
                <Pagination count={10} shape="rounded" />
            </Stack>
        </div>
    );
}
