import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter/SearchFilter";
import FilterProvider from "./context/FilterProvider";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import IndividualResult from "./components/SearchMain/IndividualResult/IndividualResult";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative flex flex-col w-screen min-h-screen">
      <div className="header-container h-[7vh] sticky top-0 z-10 backdrop-blur-lg">
        <Header />
      </div>
      {/* <HeroSection /> */}
      <div className="h-[93vh]">
        <FilterProvider>
          {/* <SearchPage /> */}
          {/* <IndividualResult /> */}
          <Outlet/>
          {/* <HeroSection/> */}
        </FilterProvider>
      </div>
      {/* <div className="footer-container h-[7vh]">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
