// import { useRef, useState } from "react";
// import Filter from "../components/Filter/SearchFilter";
// import SearchContent from "../components/SearchMain/SearchContent";
// import { FilterIcon } from "lucide-react";

// export default function SearchPage({ className }) {
//   const [display, setDisplay] = useState(true);
//   const slider = () => {
//     setDisplay(display => !display)
//   }
//   return (
//     <div className={`flex flex-1 h-full ${className}`}>
//       <aside className={`z-10 sidebar-container h-full flex justify-start w-[23%] items-start border transition-all ease-in-out ${display? 'translate-x-0':'-translate-x-[23%] w-0'} duration-200`}>
//         <div className={`h-full bg-white`}>
//           <Filter />
//         </div>
//         <button className="z-10 px-2 pt-4 pb-2 focus:outline-none cursor-pointer focus:ring-orange-500 focus:ring-2" onClick={slider}>
//           <FilterIcon className="text-orange-500 hover:text-orange-600"/>
//         </button>
//       </aside>
//       <main className="flex-1 p-2 overflow-y-auto">
//         <SearchContent />
//       </main>
//     </div>
//   );
// }
// import { useState } from "react";
// import Filter from "../components/Filter/SearchFilter";
// import SearchContent from "../components/SearchMain/SearchContent";
// import { FilterIcon } from "lucide-react";

// export default function SearchPage({ className = "" }) {
//   const [display, setDisplay] = useState(false);

//   const toggleSidebar = () => setDisplay((prev) => !prev);

//   return (
//     <div className={`relative flex flex-1 h-full ${className}`}>
//       {/* Sidebar */}
//       <aside
//         className={`
//           h-full border bg-white transition-all duration-300 ease-in-out overflow-hidden
          
//           /* Desktop (pushes content) */
//           md:relative md:translate-x-0
//           ${display ? "md:w-[20%]" : "md:w-0"}

//           /* Mobile (overlay) */
//           absolute md:static top-0 left-0 z-20
//           ${display ? "translate-x-0 w-[65%]" : "-translate-x-full w-[65%]"}
//         `}
//       >
//         {/* Only render content when open on desktop to prevent text bleed */}
//         {(display || window.innerWidth < 768) && <Filter />}
//       </aside>

//       {/* Backdrop for mobile */}
//       {display && (
//         <div
//           className="fixed inset-0 bg-black/40 z-10 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Main Content */}
//       <main
//         className={`
//           flex-1 p-2 overflow-y-auto transition-all duration-300
//           ${display ? "md:ml-[20%]" : "md:ml-0"}
//         `}
//       >
//         <SearchContent />
//       </main>

//       {/* Toggle Button */}
//       <button
//         className="absolute top-4 left-4 z-30 px-2 py-2 bg-white rounded shadow-md
//                    focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
//         onClick={toggleSidebar}
//       >
//         <FilterIcon className="text-orange-500 hover:text-orange-600" />
//       </button>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Filter from "../components/Filter/SearchFilter";
import SearchContent from "../components/SearchMain/SearchContent";
import { FilterIcon } from "lucide-react";
import Footer from "../components/Footer"

export default function SearchPage({ className = "" }) {
  const [display, setDisplay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => setDisplay((prev) => !prev);

  // auto-update when resizing between mobile & desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`relative flex flex-1 h-full ${className}`}>
      {/* Sidebar */}
      <aside
        className={`
          h-full bg-white transition-all duration-200 ease-in-out overflow-hidden
          sm:relative sm:translate-x-0
          ${display ? "w-[70%] sm:w-[35%] md:w-[30%] lg:w-[23%]" : "w-0"}
          fixed sm:static top-0 left-0 z-20
          ${display ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {(display || isMobile) && <Filter />}
      </aside>

      {display && window.innerWidth < 640 && (
        <div
          className="fixed inset-0 bg-black/40 z-10 sm:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main
        className={`flex-1 p-2 overflow-y-auto 
        transition-all duration-300`}
      >
        <SearchContent />
      </main>

      <button
        className={`absolute top-3 z-30 px-2 py-2 bg-white rounded shadow-md
          focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer
          ${display
            ? "left-[calc(70%+1rem)] sm:left-[calc(35%+1rem)] md:left-[calc(30%+1rem)] lg:left-[calc(23%+1rem)]"
            : "left-4"}
            transition-[left] duration-200 ease-in-out
        `}
        onClick={toggleSidebar}
      >
        <FilterIcon className="text-orange-500 hover:text-orange-600" />
      </button>
    </div>
  );
}
