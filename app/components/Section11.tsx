// // app/components/Services.tsx
// import { Poppins } from "next/font/google";
// import {
//   FiActivity,
//   FiSmile,
//   FiSearch,
//   FiArrowRight,
// } from "react-icons/fi";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// export default function Services() {
//   return (
//     <section className={`py-24 ${poppins.className}`}>
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="max-w-2xl mb-20">
//           <p className=" mb-2">Our services</p>

//           <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
//             What services <br />
//             <span className="font-bold text-[#243567]">
//               Medicare offers?
//             </span>
//           </h2>

//           <div className="w-16 h-[3px] bg-[#243567] mb-6" />

//           <p className="leading-relaxed">
//             Compellingly embrace empowered e-business after user friendly
//             intellectual capital. Interactively actualize front-end processes
//             with effective convergence.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-14">

//           {/* Card 1 */}
//           <div>
//             <FiActivity className="text-[#243567] text-6xl mb-6" />

//             <h3 className="text-2xl font-semibold mb-4">
//               General health care
//             </h3>

//             <div className="w-10 h-[2px] bg-[#243567] mb-4" />

//             <p className="text-gray-600 leading-relaxed mb-6">
//               Interactively procrastinate high-payoff content without
//               backward-compatible data. Quickly cultivate optimal processes.
//             </p>

//             <button className="cursor-pointer flex items-center gap-2 text-[#243567] font-semibold hover:gap-3 transition-all">
//               FIND OUT MORE <FiArrowRight />
//             </button>
//           </div>

//           {/* Card 2 */}
//           <div>
//             <FiSmile className="text-[#243567] text-6xl mb-6" />

//             <h3 className="text-2xl font-semibold mb-4">
//               Dental services
//             </h3>

//             <div className="w-10 h-[2px] bg-[#243567] mb-4" />

//             <p className="leading-relaxed mb-6">
//               Objectively innovate empowered manufactured products whereas
//               parallel platforms. Holistically predominate extensible testing
//               procedures.
//             </p>

//             <button className="cursor-pointer flex items-center gap-2 text-[#243567] font-semibold hover:gap-3 transition-all">
//               FIND OUT MORE <FiArrowRight />
//             </button>
//           </div>

//           {/* Card 3 */}
//           <div>
//             <FiSearch className="text-[#243567] text-6xl mb-6" />

//             <h3 className="text-2xl font-semibold mb-4">
//               Screening
//             </h3>

//             <div className="w-10 h-[2px] bg-[#243567] mb-4" />

//             <p className="leading-relaxed mb-6">
//               Proactively envisioned multimedia based expertise and
//               cross-media growth strategies. Seamlessly visualize quality
//               intellectual capital.
//             </p>

//             <button className="flex items-center gap-2 text-[#243567] font-semibold hover:gap-3 transition-all cursor-pointer">
//               FIND OUT MORE <FiArrowRight />
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



// app/components/Services.tsx
import { Poppins, Dancing_Script } from "next/font/google";
import {
  FiActivity,
  FiSmile,
  FiSearch,
  FiArrowRight,
} from "react-icons/fi";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Services() {
  return (
    <section className={`py-24 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="mb-2">Our services</p>

          <h2 className="text-4xl md:text-5xl leading-tight mb-6">
            {/* Dancing Script */}
            <span className={`${dancing.className} block font-medium`}>
              What services
            </span>

            {/* Poppins */}
            <span className="font-bold text-[#243567]">
              Medicare offers?
            </span>
          </h2>

          <div className="w-16 h-[3px] bg-[#243567] mb-6" />

          <p className="leading-relaxed">
            Compellingly embrace empowered e-business after user friendly
            intellectual capital. Interactively actualize front-end processes
            with effective convergence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* Card 1 */}
          <div>
            <FiActivity className="text-[#243567] text-6xl mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              General health care
            </h3>

            <div className="w-10 h-[2px] bg-[#243567] mb-4" />

            <p className="leading-relaxed mb-6">
              Interactively procrastinate high-payoff content without
              backward-compatible data. Quickly cultivate optimal processes.
            </p>

            <button className="flex items-center gap-2 text-[#243567] font-semibold hover:gap-3 transition-all">
              FIND OUT MORE <FiArrowRight />
            </button>
          </div>

          {/* Card 2 */}
          <div>
            <FiSmile className="text-[#243567] text-6xl mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Dental services
            </h3>

            <div className="w-10 h-[2px] bg-[#243567] mb-4" />

            <p className="leading-relaxed mb-6">
              Objectively innovate empowered manufactured products whereas
              parallel platforms. Holistically predominate extensible testing
              procedures.
            </p>

            <button className="flex items-center gap-2 text-[#243567] font-semibold hover:gap-3 transition-all">
              FIND OUT MORE <FiArrowRight />
            </button>
          </div>

          {/* Card 3 */}
          <div>
            <FiSearch className="text-[#243567] text-6xl mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Screening
            </h3>

            <div className="w-10 h-[2px] bg-[#243567] mb-4" />

            <p className="leading-relaxed mb-6">
              Proactively envisioned multimedia based expertise and
              cross-media growth strategies. Seamlessly visualize quality
              intellectual capital.
            </p>

            <button className="flex items-center gap-2 text-[#243567] font-semibold hover:gap-3 transition-all">
              FIND OUT MORE <FiArrowRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
