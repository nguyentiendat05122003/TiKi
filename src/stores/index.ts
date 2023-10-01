import { configureStore } from '@reduxjs/toolkit';
import ListBottomNavigatorReducer from '~/slices/BottomNavigator';
import locationReducer from '~/slices/LocationSlice';
import menuReducer from '~/slices/MenuSlice';
import agentReducer from '~/slices/agentSlice';
import cartReducer from '~/slices/cartSlice';
import userReducer from '~/slices/userSlice';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        location: locationReducer,
        user: userReducer,
        listBottomNavigator: ListBottomNavigatorReducer,
        agent: agentReducer,
        cart: cartReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
