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
    },
});

export const { showTippy, hideTippy, addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
