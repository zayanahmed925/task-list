import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Page/Shared/Navbar/Navbar';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';

function App() {
  return (
    <div className='banner'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
