export interface ParamsProvince {
    code: number;
    params: {
        depth: number;
    };
}
export interface ProvinceType {
    name: string;
    code: number;
    districts: DistrictType[];
}
export interface DistrictType {
    name: string;
    code: number;
    wards: WardType[];
}

export interface WardType {
    name: string;
    code: number;
}

export interface LocationType {
    province: string;
    district: string;
    ward: string;
}
