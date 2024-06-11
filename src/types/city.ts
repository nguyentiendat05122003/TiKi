export interface ParamsProvince {
    province_id: string;
    province_name: string;

}
export interface ProvinceType {
    province_id: string;
    province_name: string;
}

export interface DistrictType {
    district_id: string;
    district_name: string;
}

export interface WardType {
    ward_id: string;
    ward_name: string;
}

export interface LocationType {
    province: string;
    district: string;
    ward: string;
}
