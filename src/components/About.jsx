const About = () => {
  return (
    <section className="about">
      <div className="section__container">
        <h2 className="block__title">How we work</h2>
        <p className="block__description">
          We merge top-tier service delivery standards with unparalleled levels of solution customization.
        </p>

        <div className="block__flex">
          <div className="card">
            <span><div className="card__title">1 step</div></span>
            <div className="card__deskription">Contact Us</div>
            <p className="card__text">
              Reach out via email or schedule a meeting. We'll reply within two hours to set up a convenient
              appointment.
            </p>
            <div className="card-separator">
             <p className="separator-text">1 working day</p>

            </div>
          </div>

          <div className="card">
            <span> <div className="card__title">2 step</div></span>
            <div className="card__deskription">Consult with Our Specialist</div>
            <p className="card__text">
              A market expert tailored to your industry will connect to discuss your needs and outline the next steps.
            </p>
            <div className="card-separator">
              <p className="separator-text">up to 7 working days</p>
            </div>
          </div>


          <div className="card">
            <span><div className="card__title">3 step</div></span>
            <div className="card__deskription">Review Our Proposal</div>
            <p className="card__text">
              Receive a detailed service proposal with timelines and cost estimates for each phase of your project.
            </p>
            <div className="card-separator">
              <p className="separator-text">7+ working days</p>
            </div>
          </div>

          <div className="card">
            <span><div className="card__title">4 step</div></span>
            <div className="card__deskription">Finalize the Agreement</div>
            <p className="card__text">
              Once you sign the contract, we’ll begin work and keep you informed of our progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
