export interface MenuProps {
    genres: Array<Genre>,
    handleClickButton: (id: number) => void,
    selectedGenreId: number
}

export interface Genre {
    id: number,
    title: string,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}