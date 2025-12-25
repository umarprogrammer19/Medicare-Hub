// app/components/ContactInfo.tsx
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiCalendar,
} from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function ContactInfo() {
  return (
    <section className={`py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
        
        {/* ADDRESS */}
        <div className="group flex flex-col items-center text-center px-6 py-10">
          <div className="
            w-20 h-20 rounded-full
            bg-[#243567]
            flex items-center justify-center
            text-white text-3xl mb-6
            border-2 border-transparent
            transition-all duration-300
            group-hover:bg-white
            group-hover:border-[#243567]
            group-hover:text-[#243567]
          ">
            <FiMapPin />
          </div>
          <h3 className="font-semibold text-lg mb-4">ADDRESS</h3>
          <p className="text-gray-600 leading-relaxed">
            27th Avenue
            <br />
            New York, W2 3XE, US
          </p>
        </div>

        {/* CALL US */}
        <div className="group flex flex-col items-center text-center px-6 py-10">
          <div className="
            w-20 h-20 rounded-full
            bg-[#243567]
            flex items-center justify-center
            text-white text-3xl mb-6
            border-2 border-transparent
            transition-all duration-300
            group-hover:bg-white
            group-hover:border-[#243567]
            group-hover:text-[#243567]
          ">
            <FiPhone />
          </div>
          <h3 className="font-semibold text-lg mb-4">CALL US</h3>
          <p className="text-gray-600 leading-relaxed">
            0-800-2336-7820
            <br />
            0-800-2344-6477
          </p>
        </div>

        {/* WRITE TO US */}
        <div className="group flex flex-col items-center text-center px-6 py-10">
          <div className="
            w-20 h-20 rounded-full
            bg-[#243567]
            flex items-center justify-center
            text-white text-3xl mb-6
            border-2 border-transparent
            transition-all duration-300
            group-hover:bg-white
            group-hover:border-[#243567]
            group-hover:text-[#243567]
          ">
            <FiMail />
          </div>
          <h3 className="font-semibold text-lg mb-4">WRITE TO US</h3>
          <p className="text-gray-600 leading-relaxed">
            office@medicare.com
            <br />
            book@medicare.com
          </p>
        </div>

        {/* BOOK APPOINTMENT */}
        <div className="group flex flex-col items-center text-center px-6 py-10">
          <div className="
            w-20 h-20 rounded-full
            bg-[#243567]
            flex items-center justify-center
            text-white text-3xl mb-6
            border-2 border-transparent
            transition-all duration-300
            group-hover:bg-white
            group-hover:border-[#243567]
            group-hover:text-[#243567]
          ">
            <FiCalendar />
          </div>
          <h3 className="font-semibold text-lg mb-4">
            BOOK AN APPOINTMENT
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Click here to book an
            <br />
            appointment at Medicare.
          </p>
        </div>

      </div>
    </section>
  );
}
