import {useRef, useState} from "react";

const Card = ({image, title, subtitle, text}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);

  const toggleText = () => {
    if (textRef.current) {
      setIsExpanded((prev) => !prev);
    }
  };
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image"/>
      {title && (
        <div className="card__wrapper">
          <span className="card__title">{title}</span>
        </div>
      )}
      <h3 className="card__subtitle">{subtitle}</h3>
      <div className="card__text-container">
        <p className={`card__text ${isExpanded ? "card__text--expanded" : ""}`}
           ref={textRef}>
          {isExpanded ? text : `${text.substring(0, 100)}...`} {/* Скорочений текст */}
        </p>
      </div>
      <div className="card__actions">
        <button className="card__button" onClick={toggleText}>
          {isExpanded ? "Show less" : "Read more"}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <g clipPath="url(#clip0_0_154)">
              <path
                d="M11.227 0H2.15898C1.73242 0 1.38555 0.346875 1.38555 0.773438C1.38555 1.2 1.73242 1.54688 2.15898 1.54688H9.35664L0.227734 10.6781C-0.0746094 10.9805 -0.0746094 11.4703 0.227734 11.7727C0.530078 12.075 1.01992 12.075 1.32227 11.7727L10.4512 2.64141V9.83906C10.4512 10.2656 10.798 10.6125 11.2246 10.6125C11.6512 10.6125 11.998 10.2656 11.998 9.83906V0.773438C12.0004 0.346875 11.6535 0 11.227 0Z"
                fill="#5646CC"/>
            </g>
            <defs>
              <clipPath id="clip0_0_154">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Card;
