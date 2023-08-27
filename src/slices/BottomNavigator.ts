import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ListItemBottomNavigator } from '~/constants';
import { MenuShortCutType } from '~/types';

export interface MenuInitialState {
    listData: MenuShortCutType[];
}
const initialState: MenuInitialState = {
    listData: JSON.parse(localStorage.getItem('List-BottomNavigator') || 'false') || ListItemBottomNavigator,
};

const ListBottomNavigator = createSlice({
    name: 'bottomNavigator',
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
            localStorage.setItem('List-BottomNavigator', JSON.stringify(state.listData));
        },
    },
});

export const { setStatus } = ListBottomNavigator.actions;
const ListBottomNavigatorReducer = ListBottomNavigator.reducer;
export default ListBottomNavigatorReducer;
