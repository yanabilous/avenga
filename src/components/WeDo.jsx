import React, {useState, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import person from "../assets/images/manGreen.png";
import fone from "../assets/images/fone.png";

const WeDo = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);

  const slides = [
    {
      title: "Technology Solution Discovery",
      text: "Transform your business idea into a well-executed project. After thorough analysis and validation of your concept, we will identify a tailored technology suite that aligns with your business objectives. From the start, we ensure cost-efficiency, exceptional quality, and technical excellence."
    },
    {
      title: "Solution audit",
      text: "An underperforming solution is more of a liability than an asset. Discover what's hindering your software with our solution audit services. Our experts will thoroughly evaluate your system and provide a detailed report of issues affecting its performance."
    },
    {
      title: "Modernization discovery",
      text: "Staying competitive requires moving beyond legacy platforms. We'll thoroughly analyze your current system to identify areas for improvement and modernization. Additionally, we'll offer recommendations for implementing these changes efficiently and with minimal disruption to your business."
    },
    {
      title: "Migration discovery",
      text: "An outdated infrastructure can hold back your business performance. Upgrade to a modern, secure environment with our consulting services. Avenga's experts will evaluate your app’s readiness for migration and create a detailed plan to ensure a smooth, predictable transition with minimal downtime."
    },
    {
      title: "Capability enablement",
      text: "If your delivery system is missing certain essential components, we can seamlessly and efficiently integrate them into your ecosystem. Avenga helps companies provide the solutions their clients need by ensuring smooth operation throughout the entire software development lifecycle."
    },
  ];

  const updateCurrentSlide = (swiper) => {
    setCurrentSlide(swiper.activeIndex + 1);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="carousel-container">
      <div className="carousel-left">
        <h2 className="carousel-left__title">What We Do</h2>
        <p className="carousel-left__text">
          Avenga specializes in comprehensive IT transformation services, driving significant cost-efficiency through
          effective technology implementation.
        </p>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          onSlideChange={(swiper) => updateCurrentSlide(swiper)}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <h3 className="swiper_title">{slide.title}</h3>
              <p className="swiper_text">{slide.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pagination">
          <button className="prev-slide" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M1.07752 9.41089L6.91085 3.57755C7.06802 3.42576 7.27852 3.34176 7.49702 3.34366C7.71552 3.34556 7.92453 3.4332 8.07904 3.58771C8.23354 3.74221 8.32118 3.95122 8.32308 4.16972C8.32498 4.38822 8.24099 4.59872 8.08919 4.75589L3.67835 9.16672H18.3334C18.5544 9.16672 18.7663 9.25452 18.9226 9.4108C19.0789 9.56708 19.1667 9.77904 19.1667 10.0001C19.1667 10.2211 19.0789 10.433 18.9226 10.5893C18.7663 10.7456 18.5544 10.8334 18.3334 10.8334H3.67835L8.08919 15.2442C8.16878 15.3211 8.23226 15.413 8.27594 15.5147C8.31961 15.6164 8.3426 15.7257 8.34356 15.8364C8.34452 15.947 8.32344 16.0568 8.28154 16.1592C8.23964 16.2616 8.17776 16.3546 8.09952 16.4329C8.02127 16.5111 7.92823 16.573 7.82582 16.6149C7.7234 16.6568 7.61367 16.6779 7.50302 16.6769C7.39237 16.676 7.28302 16.653 7.18135 16.6093C7.07968 16.5656 6.98773 16.5021 6.91085 16.4226L1.07752 10.5892C0.921295 10.4329 0.833532 10.221 0.833532 10.0001C0.833532 9.77908 0.921295 9.56716 1.07752 9.41089Z"
                fill="#5646CC"/>
            </svg>
          </button>
          <div className="span">{currentSlide}/{slides.length}</div>
          <button className="next-slide" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.9225 9.41089L13.0892 3.57755C12.932 3.42576 12.7215 3.34176 12.503 3.34366C12.2845 3.34556 12.0755 3.4332 11.921 3.58771C11.7665 3.74221 11.6789 3.95122 11.677 4.16972C11.6751 4.38822 11.7591 4.59872 11.9109 4.75589L16.3217 9.16672H1.66671C1.44569 9.16672 1.23373 9.25452 1.07745 9.4108C0.921171 9.56708 0.833374 9.77904 0.833374 10.0001C0.833374 10.2211 0.921171 10.433 1.07745 10.5893C1.23373 10.7456 1.44569 10.8334 1.66671 10.8334H16.3217L11.9109 15.2442C11.8313 15.3211 11.7678 15.413 11.7241 15.5147C11.6804 15.6164 11.6575 15.7257 11.6565 15.8364C11.6555 15.947 11.6766 16.0568 11.7185 16.1592C11.7604 16.2616 11.8223 16.3546 11.9005 16.4329C11.9788 16.5111 12.0718 16.573 12.1742 16.6149C12.2767 16.6568 12.3864 16.6779 12.497 16.6769C12.6077 16.676 12.717 16.653 12.8187 16.6093C12.9204 16.5656 13.0123 16.5021 13.0892 16.4226L18.9225 10.5892C19.0788 10.4329 19.1665 10.221 19.1665 10.0001C19.1665 9.77908 19.0788 9.56716 18.9225 9.41089Z"
                fill="#5646CC"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="carousel-right">
        <div className="person-group">
          <img
            src={fone}
            alt="fone"
            className="carousel-image"
          />
          <img
            src={person}
            alt="person"
            className=" person"
          />
        </div>
        <div className="person-info">
          <h4>Mykhailo Romanchenko</h4>
          <p>Director of Technology Consulting</p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
