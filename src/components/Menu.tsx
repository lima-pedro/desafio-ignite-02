import { Button } from './Button';
import { MenuProps, Genre } from '../@types/MenuProps';

export function Menu ({ genres, handleClickButton, selectedGenreId }: MenuProps) {
    return (
        <div className="buttons-container">
          {genres.map((genre: Genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
    )
}