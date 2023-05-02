// import Calculator from './components/Calculator';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Quote from './components/quote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      {/* <Calculator />
      <Quote /> */}
    </div>
  );
}

export default App;
