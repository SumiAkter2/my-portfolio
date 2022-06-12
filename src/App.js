
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Project from './Pages/Project/Project';
import Footer from './Pages/Footer/Footer';
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
// import ProjectDetails from './Pages/Project/ProjectDetails';
import Tools from './Pages/Project/Tools';
import Juallary from './Pages/Project/Juallary';
import Makeup from './Pages/Project/Makeup';
import Phone from './Pages/Project/Phone';
import Center from './Pages/Project/Center';
import Car from './Pages/Project/Car';


function App() {

  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });


  return (
    <div >

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/tools' element={<Tools />}></Route>
        <Route path='/car' element={<Car />}></Route>
        <Route path='/center' element={<Center />}></Route>
        <Route path='/phone' element={<Phone />}></Route>
        <Route path='/makeup' element={<Makeup />}></Route>
        <Route path='/juallary' element={<Juallary />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
