export interface ICharacter {
    card: {
        id: number;
        image: string;
        name: string;
        gender: string;
        species: string;
    }
}

export interface IFavorites {
    favorites: ICharacter[]
}

export interface IFavoritesState {
    favorites: ICharacter[]
}
