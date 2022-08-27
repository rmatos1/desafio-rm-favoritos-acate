import { configureStore } from '@reduxjs/toolkit';

import FavoritesReducer from './modules/favorites/reducer';

const store = configureStore({
    reducer: FavoritesReducer
})

export default store;