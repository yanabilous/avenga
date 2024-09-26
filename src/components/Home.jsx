import Card from "./Card";

import hand from '../assets/images/Hand.png';
import cloud from '../assets/images/Cloud.png';
import saas from '../assets/images/Saas.png';

const Home = () => {
  return (
    <section className="card-section">
      <div className="card-section__container">
        <Card
          image={cloud}
          title="Financial services & banking"
          subtitle="Bespoke Cloud Architecture Design"
          text="Innovative cloud solutions that transform the case management experience for teams.Innovative cloud solutions that transform the case management experience for teams."
        />
        <Card
          image={hand}
          title="ML & Al"
          subtitle="Al assistant for increased productivity in the workplace"
          text="Collaborating on a custom UMA platform enables a business to evolve a traditional workspace into a smart, collaborative environment.Collaborating on a custom UMA platform enables a business to evolve a traditional workspace into a smart, collaborative environment."
        />
        <Card
          image={saas}
          title="Technology"
          subtitle="Intuitive SaaS purchasing management platform"
          text="Transforming the purchasing experience by making the buying process as automated and streamlined as possible.Transforming the purchasing experience by making the buying process as automated and streamlined as possible."
        />
      </div>
    </section>
  )
}
export default Home;