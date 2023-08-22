import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LocationType } from '~/types';

interface LocationState {
    value: LocationType;
}

const initialState = {
    value: JSON.parse(localStorage.getItem('location') || 'false') || { province: '', district: '', ward: '' },
} as LocationState;

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, action: PayloadAction<LocationType>) {
            state.value = action.payload;
            localStorage.setItem('location', JSON.stringify(action.payload));
        },
    },
});

export const { setLocation } = locationSlice.actions;
const locationReducer = locationSlice.reducer;
export default locationReducer;
