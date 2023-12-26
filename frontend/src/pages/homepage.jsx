import '../App.css';
import Navbar from '../components/navbar'
import SearchBar from '../components/SearchBar';
import '../index.css';
// import Data from "./data.json"
import ParticleBackground from '../components/particleBackground/ParticleBackground';
import About from '../components/About';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className='landingPageComp1'>
          <div className='heading'>
            <h3> Build Your <span> Custom Code </span></h3>
          </div>

          <div className='searchBox' >
            <SearchBar placeHolder={"Search ..."}/>
          </div>
          <div className="bgDesign">
            <ParticleBackground />
          </div>

        </div>


        <div className='aboutPg'>
          <About />
        </div>
      </header>
    </div>
  );
}

export default Homepage;
