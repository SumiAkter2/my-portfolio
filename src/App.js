import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Project from './Pages/Project/Project';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div >

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
