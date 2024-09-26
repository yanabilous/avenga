import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import React, {useRef, useState} from "react";
import phone from "../assets/images/phone.png";
import ai from "../assets/images/ai.png";
import ai2 from "../assets/images/ai2.png";
import destr from "../assets/images/destr.png";
import man from "../assets/images/man.png";
import Card from "./Card";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);

  const slides = [
    {
      image: destr,
      subtitle: "Avenga Contributes 1 Million Hryvnias for Okhmatdyt Hospital Reconstruction",
      text: "Following the catastrophic missile attack on July 8, 2024, which inflicted significant damage on Ukraine’s largest children’s hospital, Okhmatdyt, Avenga has pledged a donation of 1,000,000 UAH to aid in the urgent rebuilding efforts."
    },
    {
      image: ai2,
      subtitle: "Conference Highlights: CollabDays, InfoShare, and MS Tech Summit",
      text: "Catch up on the latest updates from the Microsoft 365 tech community, delve into the future of LLMs and AI Agents, and understand the implications of SharePoint Embedded’s general availability for enterprises."
    },
    {
      image: ai,
      subtitle: "AI’s Impact on the Banking Sector",
      text: "Explore how artificial intelligence is revolutionizing the banking industry by modernizing financial services, enhancing customer experiences, and fostering innovation."
    },
    {
      image: ai,
      subtitle: "AI’s Impact on the Banking Sector",
      text: "Explore how artificial intelligence is revolutionizing the banking industry by modernizing financial services, enhancing customer experiences, and fostering innovation."
    },
    {
      image: phone,
      subtitle: "Custom App Development for Microsoft Teams",
      text: "Uncover the potential of custom app development for Microsoft Teams and learn how to build tailored applications to enhance team functionality."
    },
    {
      image: man,
      subtitle: "Avenga Appoints New CEO: Ludovic Gaudé Succeeds Yuriy Adamchuk",
      text: "Avenga, a leading global engineering and consulting platform, has announced Ludovic Gaudé as its new CEO, succeeding Yuriy Adamchuk."
    },
    {
      image: ai2,
      subtitle: "Conference Highlights: CollabDays, InfoShare, and MS Tech Summit",
      text: "Catch up on the latest updates from the Microsoft 365 tech community, delve into the future of LLMs and AI Agents, and understand the implications of SharePoint Embedded’s general availability for enterprises."
    },
    {
      image: ai,
      subtitle: "AI’s Impact on the Banking Sector",
      text: "Explore how artificial intelligence is revolutionizing the banking industry by modernizing financial services, enhancing customer experiences, and fostering innovation."
    },
    {
      image: phone,
      subtitle: "Custom App Development for Microsoft Teams",
      text: "Uncover the potential of custom app development for Microsoft Teams and learn how to build tailored applications to enhance team functionality."
    }
  ];

  const groupSlides = (slidesArray, itemsPerGroup) => {
    const grouped = [];
    for (let i = 0; i < slidesArray.length; i += itemsPerGroup) {
      grouped.push(slidesArray.slice(i, i + itemsPerGroup));
    }
    return grouped;
  };

  const groupedSlides = groupSlides(slides, 3); // Групуємо по 3 слайда

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
      <div className="carousel-full">
        <h2 className="carousel-full__title">Blog</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          onSlideChange={(swiper) => updateCurrentSlide(swiper)}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {groupedSlides.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="card-group">
                {group.map((slide, idx) => (
                  <Card
                    key={idx}
                    image={slide.image}
                    subtitle={slide.subtitle}
                    text={slide.text}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pagination">
          <button className="prev-slide" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M1.07746 9.41089L6.91079 3.57755C7.06796 3.42576 7.27846 3.34176 7.49696 3.34366C7.71546 3.34556 7.92447 3.4332 8.07897 3.58771C8.23348 3.74221 8.32112 3.95122 8.32302 4.16972C8.32492 4.38822 8.24092 4.59872 8.08913 4.75589L3.67829 9.16672H18.3333C18.5543 9.16672 18.7663 9.25452 18.9225 9.4108C19.0788 9.56708 19.1666 9.77904 19.1666 10.0001C19.1666 10.2211 19.0788 10.433 18.9225 10.5893C18.7663 10.7456 18.5543 10.8334 18.3333 10.8334H3.67829L8.08913 15.2442C8.16872 15.3211 8.2322 15.413 8.27588 15.5147C8.31955 15.6164 8.34254 15.7257 8.3435 15.8364C8.34446 15.947 8.32338 16.0568 8.28148 16.1592C8.23958 16.2616 8.1777 16.3546 8.09945 16.4329C8.02121 16.5111 7.92817 16.573 7.82575 16.6149C7.72334 16.6568 7.61361 16.6779 7.50296 16.6769C7.39231 16.676 7.28296 16.653 7.18129 16.6093C7.07962 16.5656 6.98767 16.5021 6.91079 16.4226L1.07746 10.5892C0.921234 10.4329 0.833471 10.221 0.833471 10.0001C0.833471 9.77908 0.921234 9.56716 1.07746 9.41089Z"
                fill="#5646CC"/>
            </svg>
          </button>
          <div className="span">{currentSlide}/{groupedSlides.length}</div>
          <button className="next-slide" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.9225 9.41089L13.0892 3.57755C12.932 3.42576 12.7215 3.34176 12.503 3.34366C12.2845 3.34556 12.0755 3.4332 11.921 3.58771C11.7665 3.74221 11.6789 3.95122 11.677 4.16972C11.6751 4.38822 11.7591 4.59872 11.9109 4.75589L16.3217 9.16672H1.66671C1.44569 9.16672 1.23373 9.25452 1.07745 9.4108C0.921171 9.56708 0.833374 9.77904 0.833374 10.0001C0.833374 10.2211 0.921171 10.433 1.07745 10.5893C1.23373 10.7456 1.44569 10.8334 1.66671 10.8334H16.3217L11.9109 15.2442C11.8313 15.3211 11.7678 15.413 11.7241 15.5147C11.6804 15.6164 11.6575 15.7257 11.6565 15.8364C11.6555 15.947 11.6766 16.0568 11.7185 16.1592C11.7604 16.2616 11.8223 16.3546 11.9005 16.4329C11.9788 16.5111 12.0718 16.573 12.1742 16.6149C12.2767 16.6568 12.3864 16.6779 12.497 16.6769C12.6077 16.676 12.717 16.653 12.8187 16.6093C12.9204 16.5656 13.0123 16.5021 13.0892 16.4226L18.9225 10.5892C19.0788 10.4329 19.1665 10.221 19.1665 10.0001C19.1665 9.77908 19.0788 9.56716 18.9225 9.41089Z"
                fill="#5646CC"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
