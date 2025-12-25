// // app/components/LatestNews.tsx
// import { FiPlus } from "react-icons/fi";
// import Image from "next/image";
// import { Poppins, Dancing_Script } from "next/font/google";

// // Fonts (ONLY IN THIS FILE)
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600"],
// });

// const dancing = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["700"],
// });

// const news = [
//   {
//     date: "October 18, 2015",
//     title: "2015 Best USA Hospitals and Clinics",
//     image: "/Box4.jpg",
//   },
//   {
//     date: "September 22, 2015",
//     title: "Are drugs the best solution?",
//     image: "/Box5.jpg",
//   },
//   {
//     date: "September 8, 2015",
//     title: "Negative statin stories add to heart health risk",
//     image: "/Box6.jpg",
//   },
// ];

// export default function LatestNews() {
//   return (
//     <section className={`py-20 ${poppins.className}`}>
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         {/* Heading */}
//         <h2 className="text-4xl font-semibold">
//           <span>Latest {""}</span>
//           <span className={dancing.className}>News</span>
//         </h2>

//         <div className="w-16 h-1 bg-[#243567] mx-auto mt-3 mb-6" />

//         <p className="max-w-2xl mx-auto mb-16">
//           Read our latest news from the company or general medical news. Feel
//           free to ask questions in comments for any news you find interesting.
//         </p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {news.map((item, i) => (
//             <div
//               key={i}
//               className="shadow-md overflow-hidden group"
//             >
//               <div className="relative">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={500}
//                   height={350}
//                   className="w-full h-64 object-cover"
//                 />

//                 <div className="cursor-pointer absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#243567] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition">
//                   <FiPlus />
//                 </div>
//               </div>

//               <div className="p-6 text-left">
//                 <p className="text-sm text-gray-400 mb-2">{item.date}</p>
//                 <h3 className="text-xl font-semibold text-gray-800 leading-snug">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



// app/components/LatestNews.tsx
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import { Poppins, Dancing_Script } from "next/font/google";

// Fonts (ONLY IN THIS FILE)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const news = [
  {
    date: "October 18, 2015",
    title: "2015 Best USA Hospitals and Clinics",
    description:
      "A complete overview of the top-ranked hospitals and clinics providing quality healthcare services across the USA.",
    image: "/Box4.jpg",
  },
  {
    date: "September 22, 2015",
    title: "Are drugs the best solution?",
    description:
      "Exploring whether medications alone are enough or lifestyle changes play a bigger role in long-term health.",
    image: "/Box5.jpg",
  },
  {
    date: "September 8, 2015",
    title: "Negative statin stories add to heart health risk",
    description:
      "How misinformation about statins can impact heart health and create unnecessary medical concerns.",
    image: "/Box6.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className={`py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-semibold">
          <span>Latest </span>
          <span className={dancing.className}>News</span>
        </h2>

        <div className="w-16 h-1 bg-[#243567] mx-auto mt-3 mb-6" />

        <p className="max-w-2xl mx-auto mb-16 text-gray-600">
          Read our latest news from the company or general medical news. Feel
          free to ask questions in comments for any news you find interesting.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {news.map((item, i) => (
            <div
              key={i}
              className="shadow-md overflow-hidden group bg-white"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />

                <div className="cursor-pointer absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#243567] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition">
                  <FiPlus />
                </div>
              </div>

              <div className="p-6 text-left">
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>

                <h3 className="text-xl font-semibold text-gray-800 leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
