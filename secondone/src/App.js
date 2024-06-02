import './App.css';
import  {NavBar} from "../src/Components/NavBar";
import {Banner} from "../src/Components/Banner";
import {Projects} from "../src/Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>


    </div>
  );
}

export default App;
