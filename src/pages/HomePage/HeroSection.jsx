// import { useNavigate } from "react-router-dom"
// import "../assets/blob-haikei.svg"
// import BlobSvg from "./BlobSvg"
// import Button from "./Button"

// export default function HeroSection() {
//     const navigate = useNavigate();

//     return (
//         <section className="relative w-full bg-white">
//             <div className="svg absolute -z-10 right-0">
//                 <BlobSvg />
//             </div>
//             <div className="heroImage absolute top-24 right-52">
//                 <img src="../../Layer 0.png" alt="heroImage" height={425} width={525}/>
//             </div>
//             <section className="w-[52vw] absolute left-[0.75rem] top-55 flex flex-col gap-4">
//                 <div className="taglines flex gap-0.5 flex-col">
//                     <h1 className="text-[3.25rem] font-playfair font-semibold">Fresh Recipes for a Healthier You</h1>
//                     <p className="text-2xl font-[350] font-poppins">Browse hundreds of tested recipes for quick dinners, sweet treats, and everything in between</p>
//                 </div>
//                 <Button
//                     classname="max-w-[10px] text-white px-3 py-1 "
//                     onClick={() => navigate('/search')}
//                 >
//                     Browse recipes
//                 </Button>
//             </section>
//         </section>
//     )
// }
// import { useNavigate } from "react-router-dom";

// import BlobSvg from "../../components/BlobSvg";
// import Button from "../../components/Button";

// export default function HeroSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full bg-white overflow-hidden">
//       {/* Background Blob */}
//       {/* Background Blob */}
//       <div className="absolute -z-0 right-0 top-0 w-[700px] h-[700px] opacity-90">
//         <BlobSvg className="w-full h-full" />
//       </div>
//       {/* Hero Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">
//         {/* Left Side Text */}
//         <div className="flex flex-col gap-6 max-w-xl">
//           <h1 className="text-4xl md:text-5xl font-playfair font-semibold leading-tight text-gray-900 text-shadow-xl">
//             Fresh Recipes for a{" "}
//             <span className="text-orange-500">Healthier You</span>
//           </h1>
//           <p className="text-lg md:text-xl font-poppins text-gray-600">
//             Browse hundreds of tested recipes for quick dinners, sweet treats,
//             and everything in between.
//           </p>

//           <div className="flex gap-4 mt-4">
//             <Button
//               className="px-3 py-0.5 text-white focus:ring-orange-500 focus:ring-offset-1 hover:bg-orange-500 duration-200 shadow-2xl font-semibold"
//               onClick={() => navigate("/search")}
//               ring
//             >
//               Browse Recipes
//             </Button>
//             <Button
//               className="bg-white shadow-2xl text-amber-500 hover:text-orange-600 text-lg px-3 py-0.5 underline-offset-2 decoration-2 focus:text-orange-600 font-semibold hover:bg-gray-200 focus:outline-0"
//               onClick={() => navigate("/about")}
//             >
//               Learn More
//             </Button>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="relative">
//           <div className="absolute -top-10 -right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-30 -z-10"></div>
//           <img
//             src="../../Layer 0.png"
//             loading="lazy"
//             alt="heroImage"
//             className="w-[500px] h-auto drop-shadow-2xl rounded-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import { useNavigate } from "react-router-dom";
import BlobSvg from "../../components/BlobSvg";
import Button from "../../components/Button";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center">
      {/* Background Blob */}
      <div className="absolute -z-0 right-0 top-0 w-[700px] h-[700px] opacity-90">
        <BlobSvg className="w-full h-full" />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-10 w-full">
        {/* Left Side Text */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl z-0 md:text-5xl font-playfair font-semibold leading-tight text-white md:text-gray-900">
            Fresh Recipes for a{" "}
            <span className="z-0 text-white md:text-orange-500">Healthier You</span>
          </h1>
          <p className="text-lg z-0 font-semibold md:font-normal md:text-xl font-poppins text-gray-100 md:text-gray-800">
            Browse hundreds of tested recipes for quick dinners, sweet treats,
            and everything in between.
          </p>

          <div className="flex gap-4 mt-4">
            <Button
              className="z-0 px-4 py-1 font-semibold text-white shadow-xl
                bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400
                bg-[length:200%_200%] bg-left
                transition-all duration-300 ease-in-out
                hover:bg-right focus:ring-orange-500 focus:ring-offset-2 focus:bg-right
              "
              ring
              onClick={() => navigate('/search')}
            >
              Browse Recipes
            </Button>

            <Button
              className="z-0 bg-white shadow-xl text-amber-500 hover:text-orange-600 text-lg px-4 py-1 underline-offset-2 decoration-2 focus:text-orange-600 font-semibold hover:bg-gray-100 focus:outline-0"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-30 -z-10"></div>
          <img
            src="../../Layer 0.png"
            loading="lazy"
            alt="heroImage"
            className="w-[500px] h-auto drop-shadow-3xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
