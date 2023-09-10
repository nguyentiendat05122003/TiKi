import Skeleton from '@mui/material/Skeleton';
export interface SkeletonProps {
    numItem: number;
}

export default function SkeletonText({ numItem }: SkeletonProps) {
    return (
        <div>
            {[...Array(numItem)].map((item, idx) => {
                return <Skeleton variant="text" key={idx} sx={{ fontSize: '1rem', width: '100%', height: '28px' }} />;
            })}
        </div>
    );
}
