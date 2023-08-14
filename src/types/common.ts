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
}
