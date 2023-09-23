export interface ListProductProps {}
import { productType } from '~/types/product';
import ProductItem from '../ProductItem';
import Grid from '@mui/material/Grid';
export interface ListProductProps {
    data: productType[];
}
export default function ListProduct({ data }: ListProductProps) {
    return data.length == 0 ? (
        <>
            <Grid
                container
                style={{
                    gap: '8px',
                    backgroundColor: '#f5f5fa',
                    paddingTop: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <p
                    style={{
                        margin: '20px 0',
                        fontSize: '1.4rem',
                    }}
                >
                    Không có sản phẩm nào phù hợp với nhu cầu của bạn
                </p>
            </Grid>
        </>
    ) : (
        <Grid container style={{ gap: '8px', backgroundColor: '#f5f5fa', paddingTop: '6px' }}>
            {data.map((product, idx) => (
                <Grid item xs={6} lg="auto" key={idx} style={{ backgroundColor: '#fff' }}>
                    <div key={product.id}>
                        <ProductItem item={product} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
