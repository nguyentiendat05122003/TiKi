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
export interface paginationParamType {
    _limit: number;
    _start: number;
    _page?: any;
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
