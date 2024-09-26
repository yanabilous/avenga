import React, {useState} from "react";


const Questions = () => {
  const [activeIndexes, setActiveIndexes] = useState([]); // Масив для збереження індексів відкритих елементів

  const toggleFAQ = (index) => {
    if (activeIndexes.includes(index)) {
      // Якщо індекс вже є в активних, зняти його
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      // Інакше додати індекс до активних
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  // const [activeIndex, setActiveIndex] = useState(null);
  //
  // const toggleFAQ = (index) => {
  //   if (activeIndex === index) {
  //     setActiveIndex(null); // Якщо клікнули на активний, згорнути його
  //   } else {
  //     setActiveIndex(index); // Інакше розгорнути новий
  //   }
  // };

  const faqs = [
    {
      question: "In addition to general IT strategy, do you offer specialized technology consulting for specific technologies or business functions?",
      answer: "Absolutely. We provide a variety of specialized consulting services, including SAAS, data science, cloud, IoT, and cybersecurity consulting. Contact us to discover how we can address your unique needs."
    },
    {
      question: "Which industries does Avenga serve?",
      answer: "We have extensive experience working with companies across various sectors, including banking, automotive, healthcare, media and communications, education, manufacturing, consumer goods, retail, logistics, transportation, insurance, and more."
    },
    {
      question: "Do Avenga’s technology consultants provide financial and strategic advice?",
      answer: "Yes, we offer comprehensive services that include designing custom software platforms, optimizing infrastructures, mitigating security risks, and identifying optimal technology investment strategies. Additionally, we provide advice on cost-effective integration of new software across different departments."
    },
    {
      question: "How do you evaluate the performance of your IT consulting services?",
      answer: "We tailor our services around KPIs that we develop in collaboration with our clients. These metrics can be business-focused (like return on assets and sales) or IT-focused (such as MTTR, system availability, and operating costs)."
    }
  ];

  return (
    <div className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__group">
        {faqs.map((faq, index) => (
          <div className="faq__item" key={index}>
            <div className="faq__question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq__icon">
              {activeIndexes.includes(index) ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M13.8281 13.8281H28.8281C29.4754 13.8281 30 14.3528 30 15C30 15.6472 29.4754 16.1719 28.8281 16.1719H16.1719H1.17188C0.524648 16.1719 0 15.6472 0 15C0 14.3528 0.524648 13.8281 1.17188 13.8281H13.8281Z" fill="#1E1E1E"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clipPath="url(#clip0_0_483)">
                    <path
                      d="M28.8281 13.8281H16.1719V1.17188C16.1719 0.524648 15.6472 0 15 0C14.3528 0 13.8281 0.524648 13.8281 1.17188V13.8281H1.17188C0.524648 13.8281 0 14.3528 0 15C0 15.6472 0.524648 16.1719 1.17188 16.1719H13.8281V28.8281C13.8281 29.4754 14.3528 30 15 30C15.6472 30 16.1719 29.4754 16.1719 28.8281V16.1719H28.8281C29.4754 16.1719 30 15.6472 30 15C30 14.3528 29.4754 13.8281 28.8281 13.8281Z"
                      fill="#1E1E1E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_483">
                      <rect width="30" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>}
            </span>
            </div>
            {activeIndexes.includes(index) && (
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
