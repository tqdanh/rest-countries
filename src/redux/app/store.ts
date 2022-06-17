import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import countryReducer from '../features/country/countrySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countryReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
