/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClientCity } from '~/services';
import { DistrictType, ParamsProvince, ProvinceType, WardType } from '~/types';

const cityApi = {
    getAllProvince(): Promise<any[]> {
        return axiosClientCity.get('/province');
    },
    getDistricts(params: ParamsProvince): Promise<DistrictType[]> {
        return axiosClientCity.get(`/province/district/${params.province_id}`);
    },
    getWards(params: DistrictType): Promise<WardType[]> {
        return axiosClientCity.get(`/province/ward/${params.district_id}`);
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
