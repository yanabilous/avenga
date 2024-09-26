import {useState} from "react";
import * as PropTypes from "prop-types";

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="section">

      <div className="section__right">
        <h1 className="section__title">Technology Consulting Services</h1>
        <p className="section__text">
          Avenga delivers in-depth technology consulting that supports organizations through every stage of their
          digital journey. From ideation and validation to design, engineering, testing, deployment, and ongoing
          maintenance, we accelerate digital transformation by leveraging cutting-edge analytics and artificial
          intelligence.</p>
        <button className="section__button" onClick={openPopup}>
          Get in touch
          {/*<Icon className='icon' icon='arrowUp'/>*/}
        </button>
      </div>

      <div className="section__left">
        <img
          src="https://via.placeholder.com/400" // Заміни на справжню картинку
          alt="Sample"
          className="section__image"
        />
      </div>

      {/* Попап */}
      {isPopupOpen && (
        <div className="popup" onClick={closePopup}>
          <div className="popup__content">
            <h2 className="popup__title">Welcome to Avenga!</h2>
            <p className="popup__text">This site employs cookies and similar technologies to collect device and personal data. This data processing serves various purposes, including integrating content, external services, third-party elements, statistical analysis, and social media features. Depending on the functionality, some data may be shared with third parties. Your consent is optional and not necessary for using our website; you may choose to decline or withdraw it at any time. By consenting, you agree to the use of cookies across all Avenga International GmbH websites.</p>
            <div className="popup__buttons">
              <button className="popup__button">Settings</button>
              <button className="popup__button">Accept Everything</button>
              <button className="popup__button">Reject All</button>
            </div>
            <div className="popup__links">
              <a href="#">Legal Notice</a>
              <a href="#">Data protection notice</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
