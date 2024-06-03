import './App.css';
import  {NavBar} from "../src/Components/NavBar";
import {Banner} from "../src/Components/Banner";
import {Projects} from "../src/Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from "../src/Components/Contact";
import {Footer} from "../src/Components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;
