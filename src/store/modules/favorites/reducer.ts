import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavorites, ICharacter } from '../../../types';

const initialState = {
    favorites: []
}

const FavoritesReducer = createSlice({
    name: 'favoritesReducer',
    initialState,
    reducers: {
      addFavorite: ( state: IFavorites, action: PayloadAction<ICharacter>) => {
        state.favorites = [...state.favorites, action.payload]
      },
      removeFavorite: ( state: IFavorites, action: PayloadAction<ICharacter>) => {
        state.favorites = state.favorites.filter(item => item !== action.payload)
      },
    }
})

export const { addFavorite, removeFavorite } = FavoritesReducer.actions;

export const FavoritesReducerData = (state: IFavorites) => state.favorites;

export default FavoritesReducer.reducer;