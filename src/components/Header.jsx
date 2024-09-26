import Icon from "./Icon";
import {useState} from "react";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };
  return (
    <header className="header border">
      <div className="header__logo">
        <Icon className="icon" icon="mainLogo"/>
      </div>
      <div className="header__search">
        {!isSearchOpen ? (
          <svg
            onClick={toggleSearch}
            className="search__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm6.586-2.414a2 2 0 112.828 2.828l-4.243-4.243a1 1 0 010-1.414z"
            />
          </svg>
        ) : (
          <input
            type="text"
            placeholder="Search..."
            className="search__input"
            onBlur={() => setSearchOpen(false)} // Закриття інпуту при втраті фокуса
            autoFocus
          />
        )}
      </div>


      <nav className="header__menu">
        <ul className="menu__list">
          <li className="menu__item">Home</li>
          <li className="menu__item">Industries</li>
          <li className="menu__item">Services</li>
          <li className="menu__item">Technologies</li>
          <li className="menu__item">Success</li>
          <li className="menu__item">About</li>
          <li className="menu__item">Insights</li>
          <li className="menu__item">Career</li>
          <li className="menu__item">Contact us</li>

          <li className="menu__select">
            Global
            <select>
              <option value="en">(EN)</option>
              <option value="ua">(UA)</option>
            </select>
          </li>
        </ul>
      </nav>


    </header>
  );

};
export default Header;