import { HeaderProps } from '../@types/HeaderInterface';

export function Header ({ selectedGenre }: HeaderProps) {
    return (
        <header>
        <span className="category">
          Categoria:<span> {selectedGenre}</span>
        </span>
      </header>
    )
}