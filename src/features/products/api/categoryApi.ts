import { categoryType } from './../../../types/product';
import axiosClient from '~/services';

const categoryApi = {
    getListCategories(): Promise<categoryType[]> {
        return axiosClient.get('categories');
    },
    getListProductFollowCategory(id: number): Promise<categoryType> {
        return axiosClient.get(`categories/${id}`, { params: { id } });
    },
    getNameCateGory(id: number): Promise<categoryType> {
        return axiosClient.get(`categories/${id}`, { params: { id } });
    },
};

export default categoryApi;
