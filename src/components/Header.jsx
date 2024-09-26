import { Link } from 'react-scroll';
import { useState } from 'react';
import Icon from './Icon';

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header border">
      <div className="header__logo">
        <Icon className="icon mainLogo" icon="mainLogo" />
        <div className="header__search">
          {!isSearchOpen ? (
            <svg
              className="search__icon"
              onClick={toggleSearch}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_0_26)">
                <path
                  d="M17.8295 17.0207L13.1821 12.4477C14.3991 11.1255 15.1469 9.37682 15.1469 7.45261C15.1463 3.33639 11.7559 0 7.57327 0C3.39066 0 0.000244141 3.33639 0.000244141 7.45261C0.000244141 11.5688 3.39066 14.9052 7.57327 14.9052C9.38045 14.9052 11.0379 14.2801 12.3399 13.241L17.0052 17.832C17.2326 18.056 17.6016 18.056 17.8289 17.832C18.0568 17.6081 18.0568 17.2447 17.8295 17.0207ZM7.57327 13.7586C4.03433 13.7586 1.16546 10.9353 1.16546 7.45261C1.16546 3.96991 4.03433 1.14663 7.57327 1.14663C11.1122 1.14663 13.9811 3.96991 13.9811 7.45261C13.9811 10.9353 11.1122 13.7586 7.57327 13.7586Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_26">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <input
              type="text"
              placeholder="Search..."
              className="search__input"
              onBlur={() => setSearchOpen(false)}
              autoFocus
            />
          )}
        </div>
      </div>

      <div className="header__burger" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>

      <nav className={`header__menu ${isMenuOpen ? 'open' : ''}`}  onClick={toggleMenu}>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to="industries" smooth={true} duration={500} onClick={toggleMenu}>
              Industries
            </Link>
          </li>
          <li className="menu__item">
            <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="menu__item">
            <Link to="technologies" smooth={true} duration={500} onClick={toggleMenu}>
              Technologies
            </Link>
          </li>
          <li className="menu__item">
            <Link to="success" smooth={true} duration={500} onClick={toggleMenu}>
              Success
            </Link>
          </li>
          <li className="menu__item">
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link to="blog" smooth={true} duration={500} onClick={toggleMenu}>
              Insights
            </Link>
          </li>
          <li className="menu__item">
            <Link to="career" smooth={true} duration={500} onClick={toggleMenu}>
              Career
            </Link>
          </li>
          <li className="menu__item">
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact us
            </Link>
          </li>
        </ul>
        <p className="menu__select">
          Global
          <select>
            <option value="en">(EN)</option>
            <option value="ua">(UA)</option>
          </select>
        </p>
      </nav>
    </header>
  );
};

export default Header;
