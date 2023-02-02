import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import picsApi from './api/pics';
import picsReducer from './slices/pics';

export const store = configureStore({
  reducer: {
    pics: picsReducer,

    [picsApi.reducerPath]: picsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(picsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
