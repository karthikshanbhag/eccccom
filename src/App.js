import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Productdescscreen from './screens/Productdescscreen';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homescreen/>} />
      <Route path="/product/:ide" element={<Productdescscreen />} exact/>
     </Routes>
      </BrowserRouter>


 
     
    </div>
  );
}

export default App;
