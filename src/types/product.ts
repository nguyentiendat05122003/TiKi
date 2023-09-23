/* eslint-disable @typescript-eslint/no-explicit-any */
export interface categoryType {
    id: number;
    name: string;
    [key: string]: any;
}
export interface productType {
    id: number;
    name: string;
    shortDescription: string;
    originalPrice: number;
    salePrice: number;
    isPromotion: boolean;
    promotionPercent: number;
    isFreeShip: boolean;
    thumbnail: string;
    [key: string]: any;
}
export interface filterParamsType {
    _limit: number;
    _start?: number;
    _page?: number;
    _sort: string;
    [key: string]: any;
}

export interface paginationResponseType {
    limit: number;
    page: any;
    total: number;
}
export interface getAllProductType {
    data: productType[];
    pagination: paginationResponseType;
}

export interface FilterPriceType {
    salePrice_gte: number;
    salePrice_lte: number;
}

export interface FilterServiceType {
    isPromotion?: boolean;
    isFreeShip?: boolean;
}
