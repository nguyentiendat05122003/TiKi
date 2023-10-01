import { productType } from './product';

export interface itemInCartType {
    item: productType | undefined;
    quantity: number;
}
