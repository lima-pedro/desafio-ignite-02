import { SideBarProps } from '../@types/SideBarInterface';
import { Menu } from './Menu';

export function SideBar({ genres, handleClickButton, selectedGenreId }: SideBarProps) {
  // Complete aqui
    return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <Menu
          genres={genres}
          handleClickButton={handleClickButton}
          selectedGenreId={selectedGenreId}
        />
      </nav>
    )
}