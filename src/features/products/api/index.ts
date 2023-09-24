import { filterParamsType } from './../../../types/product';
import axiosClient from '~/services';
import { ParamSearchType, ProductType } from '~/types';
import { productType } from '~/types/product';

const productApi = {
    searchProduct(params: ParamSearchType): Promise<ProductType[]> {
        return axiosClient.get('products', { params });
    },
    async getAll(params: filterParamsType) {
        const newParams = { ...params };
        newParams._start =
            !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
        delete newParams._page;
        const productList = (await axiosClient.get('/products', {
            params: newParams,
        })) as productType[];
        const count = (await axiosClient.get('/products/count', { params: newParams })) as number;
        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total: count,
            },
        };
    },
    getProduct(params: number): Promise<ProductType> {
        return axiosClient.get(`products/${params}`);
    },
};
export default productApi;
