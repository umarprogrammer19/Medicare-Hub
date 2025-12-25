// // app/components/ContactBanner.tsx
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// export default function ContactBanner() {
//   return (
//     <section
//       className={`relative py-20 ${poppins.className}`}
//       style={{
//         backgroundImage: "url('/bg1.jpg')", // apni image ka path yahan do
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-[#0b5c7a]/90" /> */}

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
//         {/* Left Text */}
//         <div className="text-white">
//           <p className="text-lg mb-2">Interested?</p>
//           <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//             CONTACT US AND SCHEDULE YOUR VISIT
//           </h2>
//         </div>

//         {/* Button */}
//         <button className="bg-white text-black px-10 py-4 font-semibold tracking-wide hover:bg-gray-100 transition">
//           CONTACT US
//         </button>

//       </div>
//     </section>
//   );
// }




// app/components/ContactBanner.tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ContactBanner() {
  return (
    <section
      className={`py-20 bg-gradient-to-r from-[#0e1731] to-[#243567] ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Text */}
        <div className="text-white">
          <p className="text-lg mb-2 opacity-90">Interested?</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            CONTACT US AND SCHEDULE YOUR VISIT
          </h2>
        </div>

        {/* Button */}
        <button className="bg-white text-black px-10 py-4 font-semibold tracking-wide cursor-pointer transition">
          CONTACT US
        </button>

      </div>
    </section>
  );
}
