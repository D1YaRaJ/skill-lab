import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Product from './Components/Product';
import Product1 from './Components/Product1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="box"><Sidebar/>
      <div className="maincontent"><Product/>
      <div className="maincontent"><Product1/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
