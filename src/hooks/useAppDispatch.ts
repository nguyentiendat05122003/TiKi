import { useDispatch } from 'react-redux';
import { AppDispatch } from '~/stores';

export const useAppDispatch: () => AppDispatch = useDispatch;
