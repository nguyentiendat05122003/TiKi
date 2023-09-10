import { categoryType } from './../../../types/product';
import axiosClient from '~/services';

const categoryApi = {
    getListCategories(): Promise<categoryType[]> {
        return axiosClient.get('categories');
    },
};

export default categoryApi;
