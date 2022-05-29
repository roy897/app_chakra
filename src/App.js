import './App.css';
import CreditCard from './components/CreditCard';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar ';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <CreditCard/>
      {/* <Sidebar />       */}
    </div>
  );
}

export default App;
