import { createSelector } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '~/stores';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const usersSelector = (state: RootState) => state.user;
export const statusLoginSelector = createSelector(usersSelector, (state) =>
    Boolean(state.currentUser?.jwt),
);
