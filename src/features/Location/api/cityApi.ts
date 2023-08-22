import { axiosClientCity } from '~/services';
import { DistrictType, ParamsProvince, ProvinceType } from '~/types';

const cityApi = {
    getAllProvince(): Promise<ProvinceType[]> {
        return axiosClientCity.get('/p');
    },
    getDistricts(params: ParamsProvince): Promise<ProvinceType> {
        return axiosClientCity.get(`/p/${params.code}`, { params: params.params });
    },
    getWards(params: ParamsProvince): Promise<DistrictType> {
        return axiosClientCity.get(`/d/${params.code}`, { params: params.params });
    },
};
export default cityApi;
