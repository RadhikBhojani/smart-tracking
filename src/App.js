import { useEffect } from "react";
import Header from "./core-component/header";
import Breadcrumb from "./core-component/breadcrums";
import Sidebar from "./core-component/sidebar";
import Footer from "./core-component/footer";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./page-component/profile";
import Dashboard from "./page-component/dashboard";

function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading]);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Breadcrumb />
          <Footer />
          <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            <div className="sidebar-wrapper sidebar-theme">
              <Sidebar />
            </div>
            <div id="content" className="main-content">
              <div className="layout-px-spacing">
                <div className="row layout-top-spacing"></div>
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route exact path="/home" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
