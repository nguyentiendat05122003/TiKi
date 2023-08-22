import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '~/slices/LocationSlice';
import menuReducer from '~/slices/MenuSlice';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        location: locationReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
