import { Header } from './Header';
import { MainContent } from './MainContent';
import { ContentProps } from '../@types/ContentInterface';

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <Header
        selectedGenre={selectedGenre}
      />

      <MainContent
        movies={movies}
      />
    </div>
  );
}
