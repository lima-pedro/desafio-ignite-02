import { MainContentProps, Movie } from '../@types/MainContentInterface';
import { MovieCard } from './MovieCard';

export function MainContent ({ movies }: MainContentProps) {
    return (
        <main>
            <div className="movies-list">
            {movies.map((movie: Movie) => (
                <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
                />
            ))}
            </div>
        </main>
    )
}