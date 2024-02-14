import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carousal from './components/Carousal';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <NavBar/>
      <Carousal/><br></br>
      <Categories/>
    </div>
  );
}

export default App;
