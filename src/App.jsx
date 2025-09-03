import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Filter from "./components/Filter/SearchFilter";
import FilterProvider from "./context/FilterProvider";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import IndividualResult from "./components/SearchMain/IndividualResult/IndividualResult";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="header-container h-[7vh]">
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
