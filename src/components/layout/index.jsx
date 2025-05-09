// import Topbar from './topbar';
// import Navbar from './Navbar';
// // import Footer from '../components/Footer';
// import { Outlet } from 'react-router-dom';

// const DefaultLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Topbar />
//       <Navbar />
//       <main className="flex-grow p-4">
//         <Outlet />
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default DefaultLayout;



import Topbar from './topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <main className="flex-grow pt-[104px] ">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
};

export default DefaultLayout;
