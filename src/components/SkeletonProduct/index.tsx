import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
export interface ISkeletonProductProps {
    lengthArr: number;
}
export default function SkeletonProduct({ lengthArr }: ISkeletonProductProps) {
    return (
        <>
            <Grid style={{ width: '100%', gap: '8px' }} container columns={{ xs: 10 }}>
                {[...Array(lengthArr)].map((item, idx) => {
                    return (
                        <Grid style={{ minHeight: '282px' }} key={idx} item>
                            <Skeleton variant="rounded" width={200} height={282} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}
