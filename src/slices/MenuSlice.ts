import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LIST_MENU_SHORT_USER } from '~/constants';
import { MenuShortCutType } from '~/types';

export interface MenuInitialState {
    listData: MenuShortCutType[];
}
const initialState: MenuInitialState = {
    listData: JSON.parse(localStorage.getItem('Menu_ShortCut') || 'false') || LIST_MENU_SHORT_USER,
};

const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<number>) {
            state.listData.forEach((item) => {
                if (item.id === action.payload) {
                    item.status = true;
                } else {
                    item.status = false;
                }
            });
            localStorage.setItem('Menu_ShortCut', JSON.stringify(state.listData));
        },
    },
});

export const { setStatus } = MenuSlice.actions;
const menuReducer = MenuSlice.reducer;
export default menuReducer;
