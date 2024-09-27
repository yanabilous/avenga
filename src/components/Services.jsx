import {useState} from "react";
import girl from "../assets/images/girl.png";

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="services">
      <div className="services__header">
        <span>Service offerings </span> <p>&nbsp; / Technology consulting services</p>
      </div>

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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clipPath="url(#clip0_0_50)">
                <path
                  d="M13.0979 0H2.51865C2.021 0 1.61631 0.404688 1.61631 0.902344C1.61631 1.4 2.021 1.80469 2.51865 1.80469H10.9159L0.265527 12.4578C-0.087207 12.8105 -0.087207 13.382 0.265527 13.7348C0.618262 14.0875 1.18975 14.0875 1.54248 13.7348L12.1929 3.08164V11.4789C12.1929 11.9766 12.5976 12.3813 13.0952 12.3813C13.5929 12.3813 13.9976 11.9766 13.9976 11.4789V0.902344C14.0003 0.404688 13.5956 0 13.0979 0Z"
                  fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_0_50">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="section__left">
          <img
            src={girl}
            alt="girl"
            className="section__image"
          />
        </div>

        {isPopupOpen && (
          <div className="popup" onClick={closePopup}>
            <div className="popup__content">
              <h2 className="popup__title">Welcome to Avenga!</h2>
              <p className="popup__text">This site employs cookies and similar technologies to collect device and
                personal
                data. This data processing serves various purposes, including integrating content, external services,
                third-party elements, statistical analysis, and social media features. Depending on the functionality,
                some data may be shared with third parties. Your consent is optional and not necessary for using our
                website; you may choose to decline or withdraw it at any time. By consenting, you agree to the use of
                cookies across all Avenga International GmbH websites.</p>
              <div className="popup__buttons">
                <button className="popup__button">Settings</button>
                <button className="popup__button">Accept Everything</button>
                <button className="popup__button">Reject All</button>
              </div>
              <div className="popup__links">
                <button className="a" style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer", color: "#5646CC",
                  fontFamily: "Prompt",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400"
                }}>
                  Legal Notice
                </button>
                <button className="a" style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer", color: "#5646CC",
                  fontFamily: "Prompt",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400"
                }}>
                  Data protection notice
                </button>

                {/*<a href="#">Legal Notice</a>*/}
                {/*<a href="#">Data protection notice</a>*/}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
