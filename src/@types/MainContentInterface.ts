export interface MainContentProps {
    movies: Array<Movie>
}

export interface Movie {
    imdbID: string,
    Title: string,
    Poster: string,
    Runtime: string,
    Ratings: Array<Rating>
}

export interface Rating {
    Value: string
}