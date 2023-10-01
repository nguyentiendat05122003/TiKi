import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { itemInCartType } from '~/types/cart';

interface CartState {
    isShowTippyCart: boolean;
    listCart: itemInCartType[] | [];
}

const initialState = {
    isShowTippyCart: false,
    listCart: [],
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
            state.listCart = [...state.listCart, { ...action.payload }];
        },
        setQuantity(state, action: PayloadAction<{ newQuantity: number; id: number }>) {
            const newListCart = state.listCart.map((cartItem) => {
                if (cartItem.item?.id === action.payload.id) {
                    return { ...cartItem, quantity: action.payload.newQuantity };
                }
                return { ...cartItem };
            });
            state.listCart = [...newListCart];
        },
        removeCartItem(state, action: PayloadAction<number>) {
            state.listCart = state.listCart.filter((item) => item.item?.id !== action.payload);
        },
    },
});

export const { showTippy, hideTippy, addToCart, removeCartItem, setQuantity } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
