import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './reduxTypes';

// Typed version of dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed version of selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
