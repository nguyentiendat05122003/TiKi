import { axiosClientCity } from '~/services';
import { DistrictType, ParamsProvince, ProvinceType, WardType } from '~/types';

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
    searchProvince(params: { q: string }): Promise<ProvinceType[]> {
        return axiosClientCity.get('/p/search/', { params });
    },
    searchDistrict(params: { q: string; p: number }): Promise<DistrictType[]> {
        return axiosClientCity.get('/d/search/', { params });
    },
    searchWard(params: { q: string; p: number | undefined; d: number | undefined }): Promise<WardType[]> {
        return axiosClientCity.get('/w/search/', { params });
    },
    getWard(code: number): Promise<WardType> {
        return axiosClientCity.get(`/w/${code}`);
    },
};
export default cityApi;
