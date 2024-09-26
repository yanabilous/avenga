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


function App() {
  return (
    <div className="App">
     <Header/>
      <Services/>
      <Industries/>
      <Home/>
      <About/>
      <WeDo/>
      <Opting/>
      <Technologies/>
      <Partnership/>
      <Blog/>
      <Reviews/>
      <Questions/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
