const offersData = [
  {
    id: 1,
    title: "Boosted Performance",
    description:
      "Achieve significant improvements in operational efficiency by gaining comprehensive insights into your assets and conditions.",
  },
  {
    id: 2,
    title: "Proactive Maintenance",
    description:
      "Utilize operational data to foresee potential issues and maintain stability across your operations.",
  },
  {
    id: 3,
    title: "Enhanced Flexibility",
    description:
      "Leverage real-time IoT data to develop new services like dynamic scheduling and routing, tailored to your needs.",
  },
  {
    id: 4,
    title: "Process Refinement",
    description:
      "Utilize real-time reporting to streamline processes and resolve operational inefficiencies.",
  },
  {
    id: 5,
    title: "Innovative Business Models",
    description:
      "Extract valuable insights from sensor data to uncover new opportunities and create modern, actionable business models.",
  },
  {
    id: 6,
    title: "Forward-Thinking Solutions",
    description:
      "Develop cutting-edge, connected products and deliver more personalized, engaging experiences for your clients.",
  },
];

const Opting = () => {
  return (
    <section className="offers">
      <div className="offers__wrapper">
        <div className="offers__header">
          <h2 className="offers__title">Opting for Avenga offers:</h2>
          <p className="offers__description">
            Avenga specializes in comprehensive IT transformation services, driving significant cost-efficiency through
            effective technology implementation.
          </p>
        </div>
        <div className="offers__grid">
          {offersData.map((offer) => (
            <div className="offers__item" key={offer.id}>
              <div className="offers__number">
                <span className="offers__number-text">{offer.id < 10 ? `0${offer.id}` : offer.id}</span>
              </div>
              <div className="offers__content">
                <h3 className="offers__content-title">{offer.title}</h3>
                <p className="offers__content-description">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opting;