import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="app-wrapper">
      <Header />
      {/* <div className="content"> */}
        <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default Layout;
