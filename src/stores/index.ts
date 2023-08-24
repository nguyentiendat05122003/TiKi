import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '~/slices/LocationSlice';
import menuReducer from '~/slices/MenuSlice';
import userReducer from '~/slices/userSlice';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        location: locationReducer,
        user: userReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
