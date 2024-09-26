import Icon from "./Icon";

const Footer = () => {

  return (
    <footer>
      <div className="header">
        <div className="header__logo">
          <Icon className="icon" icon="mainLogo"/>
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
          </ul>
        </nav>
      </div>
      <div className="flex">
        <p>© 2024 Avenga. All rights reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );

};
export default Footer;