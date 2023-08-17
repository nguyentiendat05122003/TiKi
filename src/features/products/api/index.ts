import axiosClient from '~/services';
import { ParamSearchType, ProductType } from '~/types';

const productApi = {
    searchProduct(params: ParamSearchType): Promise<ProductType[]> {
        return axiosClient.get('products', { params });
    },
};
export default productApi;
