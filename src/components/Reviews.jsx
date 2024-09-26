// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import React, {useRef, useState} from "react";
//
//
// const reviews = [
//   {
//     title: "R&D Services for a Legal Solutions Company",
//     rating: 5,
//     review: `"Avenga's (formerly Core Value Inc) strength lies in their collaborative spirit and innovative approach. Avenga excels in developing state-of-the-art software with minimal supervision. Their disciplined team swiftly addresses any web-related challenges, showcasing their expertise."`,
//   },
//   {
//     title: "Engineering Staff Augmentation & Consulting for an IT Company",
//     rating: 5,
//     review: `"As trust developed, the team began making significant contributions across various areas. Avenga (formerly Perfectial) has provided staff who have become integral to the company’s IT operations, demonstrating a strong commitment to supporting the client’s needs."`,
//   },
//   {
//     title: "Custom Software Development for Financial Services",
//     rating: 4,
//     review: `"The team at Avenga delivered the project on time and within budget. Their development process was transparent, and the communication was outstanding. We are happy with the results and look forward to future cooperation."`,
//   },
//   {
//     title: "Custom Software Development for Financial Services",
//     rating: 4,
//     review: `"The team at Avenga delivered the project on time and within budget. Their development process was transparent, and the communication was outstanding. We are happy with the results and look forward to future cooperation."`,
//   }
// ];
//
// const Reviews = () => {
//     const [currentSlide, setCurrentSlide] = useState(1);
//       const swiperRef = useRef(null);
//    const updateCurrentSlide = (swiper) => {
//     setCurrentSlide(swiper.activeIndex + 1);
//   };
//    const handlePrev = () => {
//     if (swiperRef.current) swiperRef.current.slidePrev();
//   };
//      // const groupedSlides = groupSlides(slides, 3);
//
//   const handleNext = () => {
//     if (swiperRef.current) swiperRef.current.slideNext();
//   };
//   return (
//     <section className="reviews">
//       <div className="reviews__header">
//         <h2 className="reviews__title">Reviews</h2>
//         <p className="reviews__subtitle">
//           Avenga specializes in comprehensive IT transformation services, driving significant cost-efficiency through effective technology implementation.
//         </p>
//       </div>
//
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={2}  // Відображаємо по 2 відгуки
//         navigation={true}
//          onSlideChange={(swiper) => updateCurrentSlide(swiper)}
//         modules={[Navigation]}
//         className="reviews__swiper"
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide key={index}>
//             <div className="reviews__card">
//               <h3 className="reviews__card-title">{review.title}</h3>
//               <div className="reviews__card-rating">
//                 {Array.from({ length: review.rating }).map((_, i) => (
//                   <span key={i}>⭐</span>
//                 ))}
//               </div>
//               <p className="reviews__card-text">{review.review}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//
//     <div className="pagination">
//           <button className="prev-slide" onClick={handlePrev}>←</button>
//           <div className="span">{currentSlide}/{reviews.length}</div>
//           <button className="next-slide" onClick={handleNext}>→</button>
//         </div>
//     </section>
//   );
// };
//
// export default Reviews;
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import React, {useRef, useState} from "react";
// import "swiper/swiper-bundle.min.css"; // Підключення стилів Swiper
// import "./Reviews.scss"; // Підключення ваших стилів

const reviews = [
  {
    title: "R&D Services for a Legal Solutions Company",
    rating: 5,
    review: `"Avenga's (formerly Core Value Inc) strength lies in their collaborative spirit and innovative approach. Avenga excels in developing state-of-the-art software with minimal supervision. Their disciplined team swiftly addresses any web-related challenges, showcasing their expertise."`,
  },
  {
    title: "Engineering Staff Augmentation & Consulting for an IT Company",
    rating: 5,
    review: `"As trust developed, the team began making significant contributions across various areas. Avenga (formerly Perfectial) has provided staff who have become integral to the company’s IT operations, demonstrating a strong commitment to supporting the client’s needs."`,
  },
  {
    title: "Custom Software Development for Financial Services",
    rating: 4,
    review: `"The team at Avenga delivered the project on time and within budget. Their development process was transparent, and the communication was outstanding. We are happy with the results and look forward to future cooperation."`,
  },
  {
    title: "Custom Software Development for Financial Services",
    rating: 4,
    review: `"The team at Avenga delivered the project on time and within budget. Their development process was transparent, and the communication was outstanding. We are happy with the results and look forward to future cooperation."`,
  },
];

// Функція для групування слайдів по 2
const groupSlides = (slidesArray, itemsPerGroup) => {
  const grouped = [];
  for (let i = 0; i < slidesArray.length; i += itemsPerGroup) {
    grouped.push(slidesArray.slice(i, i + itemsPerGroup));
  }
  return grouped;
};

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);

  // Групуємо слайди по 2 об'єкти
  const groupedReviews = groupSlides(reviews, 2);

  const updateCurrentSlide = (swiper) => {
    setCurrentSlide(swiper.activeIndex + 1); // Оновлюємо нумерацію
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="reviews">
      <div className="reviews__wrapper">
        <div className="reviews__header">
          <h2 className="reviews__title">Reviews</h2>
          <p className="reviews__subtitle">
            Avenga specializes in comprehensive IT transformation services, driving significant cost-efficiency through
            effective technology implementation.
          </p>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Прив'язка рефу до Swiper
          spaceBetween={30}
          slidesPerView={1} // Відображаємо по 1 групі (група може містити 2 слайди)
          onSlideChange={(swiper) => updateCurrentSlide(swiper)}
          navigation={true} // Вбудовані кнопки навігації
          modules={[Navigation]}
          className="reviews__swiper"
        >
          {groupedReviews.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="reviews__group">
                {group.map((review, index) => (
                  <div className="reviews__card" key={index}>
                    <h3 className="reviews__card-title">{review.title}</h3>
                    <div className="reviews__card-rating">
                      {Array.from({length: review.rating}).map((_, i) => (
                        <span key={i}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                           fill="none">
  <g clipPath="url(#clip0_0_331)">
    <path
      d="M19.9479 7.67185C19.8169 7.26687 19.4577 6.97923 19.0328 6.94093L13.2602 6.41678L10.9776 1.07408C10.8093 0.682532 10.426 0.429077 10.0001 0.429077C9.57422 0.429077 9.19091 0.682532 9.0226 1.075L6.73998 6.41678L0.966514 6.94093C0.542309 6.98015 0.184023 7.26687 0.0523365 7.67185C-0.0793503 8.07683 0.0422654 8.52102 0.363166 8.80103L4.72653 12.6277L3.43987 18.2954C3.34573 18.7122 3.50747 19.1429 3.85325 19.3929C4.0391 19.5272 4.25655 19.5955 4.47582 19.5955C4.66488 19.5955 4.85242 19.5446 5.02073 19.4438L10.0001 16.4678L14.9776 19.4438C15.3419 19.663 15.801 19.643 16.146 19.3929C16.492 19.1422 16.6536 18.7113 16.5594 18.2954L15.2728 12.6277L19.6361 8.80179C19.957 8.52102 20.0796 8.07759 19.9479 7.67185Z"
      fill="#5646CC"/>
  </g>
  <defs>
    <clipPath id="clip0_0_331">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg></span>
                      ))}
                    </div>
                    <p className="reviews__card-text">{review.review}</p>
                  </div>
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
          <div className="span">
            {currentSlide}/{groupedReviews.length}
          </div>
          <button className="next-slide" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.9225 9.41089L13.0892 3.57755C12.932 3.42576 12.7215 3.34176 12.503 3.34366C12.2845 3.34556 12.0755 3.4332 11.921 3.58771C11.7665 3.74221 11.6789 3.95122 11.677 4.16972C11.6751 4.38822 11.7591 4.59872 11.9109 4.75589L16.3217 9.16672H1.66671C1.44569 9.16672 1.23373 9.25452 1.07745 9.4108C0.921171 9.56708 0.833374 9.77904 0.833374 10.0001C0.833374 10.2211 0.921171 10.433 1.07745 10.5893C1.23373 10.7456 1.44569 10.8334 1.66671 10.8334H16.3217L11.9109 15.2442C11.8313 15.3211 11.7678 15.413 11.7241 15.5147C11.6804 15.6164 11.6575 15.7257 11.6565 15.8364C11.6555 15.947 11.6766 16.0568 11.7185 16.1592C11.7604 16.2616 11.8223 16.3546 11.9005 16.4329C11.9788 16.5111 12.0718 16.573 12.1742 16.6149C12.2767 16.6568 12.3864 16.6779 12.497 16.6769C12.6077 16.676 12.717 16.653 12.8187 16.6093C12.9204 16.5656 13.0123 16.5021 13.0892 16.4226L18.9225 10.5892C19.0788 10.4329 19.1665 10.221 19.1665 10.0001C19.1665 9.77908 19.0788 9.56716 18.9225 9.41089Z"
                fill="#5646CC"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

