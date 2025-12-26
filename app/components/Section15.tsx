// "use client";

// import { useState } from "react";
// import { Poppins } from "next/font/google";
// import { FiChevronDown } from "react-icons/fi";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// const faqs = [
//   {
//     q: "What’s the most common heart procedure?",
//     a: "The most common procedures include angioplasty, bypass surgery, and valve repair depending on patient condition.",
//   },
//   {
//     q: "Are heart operations painful?",
//     a: "Patients are under anesthesia during surgery, and post-surgery pain is managed with medications.",
//   },
//   {
//     q: "Do you use anesthetics for patients?",
//     a: "Yes, all major procedures are performed under professional anesthesia supervision.",
//   },
//   {
//     q: "How long does the recovery take?",
//     a: "Recovery time varies, but most patients resume normal activities within a few weeks.",
//   },
//   {
//     q: "What operations do you do?",
//     a: "We perform cardiac, vascular, and minimally invasive surgical procedures.",
//   },
//   {
//     q: "How can I book an examination?",
//     a: "You can book an appointment online or contact our support team anytime.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className={`py-20 ${poppins.className}`}>
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
//         {/* LEFT */}
//         <div>
//           <p className="text-sm text-gray-500 mb-2">Usual questions</p>

//           <h2 className="text-4xl md:text-5xl font-light mb-4">
//             <span className="text-blue-600 font-semibold">
//               from our patients
//             </span>
//           </h2>

//           <div className="w-14 h-[2px] bg-blue-600 mb-6"></div>

//           <p className="text-gray-600 max-w-xl mb-10 leading-relaxed">
//             Completely synergize resource taxing relationships via premier
//             niche markets. Professionally cultivate one-to-one customer
//             service.
//           </p>

//           {/* FAQ */}
//           <div className="space-y-3">
//             {faqs.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 px-5 py-4 cursor-pointer"
//                 onClick={() =>
//                   setOpenIndex(openIndex === index ? null : index)
//                 }
//               >
//                 <div className="flex items-center justify-between">
//                   <h4 className="font-medium text-gray-800">
//                     {item.q}
//                   </h4>
//                   <FiChevronDown
//                     className={`text-blue-600 text-xl transition-transform ${
//                       openIndex === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </div>

//                 {openIndex === index && (
//                   <p className="text-sm text-gray-600 mt-3 leading-relaxed">
//                     {item.a}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1584467735871-bf3a9d1a4f52"
//             alt="Doctor"
//             className="rounded-md w-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { FiChevronDown } from "react-icons/fi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const faqs = [
  {
    q: "What’s the most common heart procedure?",
    a: "The most common procedures include angioplasty, bypass surgery, and valve repair depending on patient condition.",
  },
  {
    q: "Are heart operations painful?",
    a: "Patients are under anesthesia during surgery, and post-surgery pain is managed with medications.",
  },
  {
    q: "Do you use anesthetics for patients?",
    a: "Yes, all major procedures are performed under professional anesthesia supervision.",
  },
  {
    q: "How long does the recovery take?",
    a: "Recovery time varies, but most patients resume normal activities within a few weeks.",
  },
  {
    q: "What operations do you do?",
    a: "We perform cardiac, vascular, and minimally invasive surgical procedures.",
  },
  {
    q: "How can I book an examination?",
    a: "You can book an appointment online or contact our support team anytime.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-stretch">
        
        {/* LEFT */}
        <div>
          <p className="text-sm mb-2">Usual questions</p>

          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span className="text-[#243567] font-semibold">
              From Our Patients
            </span>
          </h2>

          <div className="w-14 h-[2px] bg-[#243567] mb-6"></div>

          <p className="max-w-xl mb-10 leading-relaxed">
            Completely synergize resource taxing relationships via premier
            niche markets. Professionally cultivate one-to-one customer
            service.
          </p>

          {/* FAQ */}
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 px-5 py-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-medium text-gray-800 leading-snug">
                    {item.q}
                  </h4>

                  <FiChevronDown
                    className={`text-[#243567] text-xl transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <p className="text-sm mt-3 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full mt-1">
          <img
            src="dr9.avif"
            alt="Doctor"
            className="w-full h-[580px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
