import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { itemInCartType } from '~/types/cart';

interface CartState {
    isShowTippyCart: boolean;
    listCart: itemInCartType[] | [];
}

const initialState = {
    isShowTippyCart: false,
    listCart: JSON.parse(localStorage.getItem('listCart') || '[]') || [],
} as CartState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showTippy(state) {
            state.isShowTippyCart = true;
        },
        hideTippy(state) {
            state.isShowTippyCart = false;
        },
        addToCart(state, action: PayloadAction<itemInCartType>) {
            //state.listCart = [...state.listCart, action.payload];
            const newList = [...state.listCart, action.payload];
            const listItemRecur = newList.filter(
                (cartItem) => cartItem.item?.id === action.payload.item?.id,
            );
            const listItemNotRecur = newList.filter(
                (cartItem) => cartItem.item?.id !== action.payload.item?.id,
            );
            if (listItemRecur.length === 0) {
                state.listCart = [...state.listCart, action.payload];
            } else {
                const totalQuantity = listItemRecur.reduce((results, cur) => {
                    return results + cur.quantity;
                }, 0);
                const newItem = [{ item: listItemRecur[0].item, quantity: totalQuantity }];
                state.listCart = newItem.concat(listItemNotRecur);
            }
            localStorage.setItem('listCart', JSON.stringify(state.listCart));
        },
        setQuantity(state, action: PayloadAction<{ newQuantity: number; id: number }>) {
            const newListCart = state.listCart.map((cartItem) => {
                if (cartItem.item?.id === action.payload.id) {
                    return { ...cartItem, quantity: action.payload.newQuantity };
                }
                return { ...cartItem };
            });
            state.listCart = [...newListCart];
            localStorage.setItem('listCart', JSON.stringify(state.listCart));
        },
        removeCartItem(state, action: PayloadAction<number>) {
            state.listCart = state.listCart.filter((item) => item.item?.id !== action.payload);
            localStorage.setItem('listCart', JSON.stringify(state.listCart));
        },
    },
});

export const { showTippy, hideTippy, addToCart, removeCartItem, setQuantity } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
