export interface ListProductProps {}
import { productType } from '~/types/product';
import ProductItem from '../ProductItem';
import Grid from '@mui/material/Grid';
export interface ListProductProps {
    data: productType[];
}
export default function ListProduct({ data }: ListProductProps) {
    return (
        <Grid
            style={{ width: '100%', gap: '8px', backgroundColor: '#f5f5fa', paddingTop: '6px' }}
            container
            columns={{ xs: 10 }}
        >
            {data.map((item, idx) => (
                <Grid item key={idx} style={{ backgroundColor: '#fff' }}>
                    <div key={item.id}>
                        <ProductItem item={item} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
