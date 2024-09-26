import Header from "./components/Header";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Home from "./components/Home";
import About from "./components/About";
import WeDo from "./components/WeDo";
import Opting from "./components/Opting";
import Technologies from "./components/Technologies";
import Partnership from "./components/Partnership";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Form from "./components/Form";
import Footer from "./components/Footer";
import {Element} from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header/>
      <Element name="home">
        <Services/>
        <Industries/>
      </Element>
      <Element name="services">
        <Home/>
        <About/>
      </Element>
      <Element name="industries">
        <WeDo/>
        <Opting/>
      </Element>
      <Element name="about">
        <Technologies/>
      </Element>
      <Element name="technologies">
        <Partnership/>
      </Element>
      <Element name="blog">
        <Blog/>
      </Element>
      <Element name="reviews">
        <Reviews/>
      </Element>
      <Element name="career">
        <Questions/>
      </Element>
      <Element name="contact">
        <Form/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
