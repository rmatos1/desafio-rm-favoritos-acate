export interface ICharacter {
    id: number;
    image: string;
    name: string;
    gender: string;
    species: string;
}

export interface IFavorites {
    favorites: ICharacter[]
}
