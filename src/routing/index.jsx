import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/layout';
import Home from '../pages/Home';
import ContactUs from "../pages/contact";
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Login from '../pages/auth/Login';
// import Signup from '../pages/auth/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      <Route path="/contact" element={<ContactUs />} />
      </Route>

     
    </Routes>
  );
};

export default AppRoutes;
