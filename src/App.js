import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.js';
import Carousel from './Components/Carousel.js';
import Cards from './Components/Cards.js';

function App() {
  return (
  

    <div>
   <Navbar/>,
     <Carousel/>
     <div className="mid-space"></div>
     <div class="bg">
       <div className="cards">
          <Cards/>
          <Cards/>
          <Cards/>
       </div>
      </div>
 
    </div>
  
  );
}

export default App;
