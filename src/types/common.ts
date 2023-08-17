/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RouterType {
    path: string;
    component: any;
    layout?: any | null;
}
export interface MenuShortCutType {
    id: number;
    title: string;
    iconActive: string;
    iconDefault: string;
    status: boolean;
    to?: string;
    isHover: boolean;
}

export interface SuggestSearchType {
    id: number;
    to: string;
    name: string;
    thumbnail?: string;
}

export interface ParamSearchType {
    name: string;
}
export interface ProductType {
    id: number;
    description: string;
    name: string;
    shortDescription: string;
    originalPrice: number;
    salePrice: number;
    isPromotion: number;
    promotionPercent: number;
    isFreeShip: boolean;
    thumbnail: string;
    [key: string]: any;
}
