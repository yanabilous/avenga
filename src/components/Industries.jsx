
import trov from '../assets/images/trov.png';
import instem from '../assets/images/instem.png';
import opel from '../assets/images/opel2.png';
import uma from '../assets/images/uma.png';
import m3 from '../assets/images/m3.png';
const Industries = () => {
  return(
    <section className='industries'>
       <div className="industries__image-container">
        <img src={uma} alt="uma" className="industries__image" />
        <img src={m3} alt="m3" className="industries__image" />
        <img src={instem} alt="instem" className="industries__image" />
        <img src={opel} alt="opel" className="industries__image" />
        <img src={trov} alt="trov" className="industries__image" />
      </div>

    </section>
  )
}
export default Industries;