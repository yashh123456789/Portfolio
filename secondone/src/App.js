import './App.css';
import  {NavBar} from "../src/Components/NavBar";
import {Banner} from "../src/Components/Banner";
import {Projects} from "../src/Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from "../src/Components/Contact";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>
      <Contact/>


    </div>
  );
}

export default App;
