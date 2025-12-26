import { FiEye } from "react-icons/fi";
import { MdOutlineFoodBank, MdOutlineLocalHospital } from "react-icons/md";
import { FaTooth } from "react-icons/fa";
import { Poppins, Dancing_Script } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Services() {
  return (
    <section
      className={`relative py-24 bg-cover bg-center ${poppins.className}`}
      style={{ backgroundImage: "url('/bg1.jpg')" }}>
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0b1c39] mb-16">
          We Serve In Different Areas For{" "}
          <br />
          <span className={`${dancing.className} font-normal text-[#243567]`}>
            Our Patients
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-10 text-left shadow-md hover:shadow-xl transition">
            <MdOutlineFoodBank className="text-5xl text-[#243567] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Food & Nutrition</h3>
            <p className="text-gray-600 leading-7 mb-6">
              20+ Doctors are available under this department who serve.
            </p>
            <span className="font-medium cursor-pointer">→ Read More</span>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-10 text-left shadow-md hover:shadow-xl transition">
            <FiEye className="text-5xl text-[#243567] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Ophthalmology</h3>
            <p className="text-gray-600 leading-7 mb-6">
              20+ Doctors are available under this department who serve.
            </p>
            <span className="font-medium cursor-pointer">→ Read More</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-10 text-left shadow-md hover:shadow-xl transition">
            <FaTooth className="text-5xl text-[#243567] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Dental Care</h3>
            <p className="text-gray-600 leading-7 mb-6">
              20+ Doctors are available under this department who serve.
            </p>
            <span className="font-medium cursor-pointer">→ Read More</span>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-10 text-left shadow-md hover:shadow-xl transition">
            <MdOutlineLocalHospital className="text-5xl text-[#243567] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Surgery</h3>
            <p className="text-gray-600 leading-7 mb-6">
              25+ Doctors are available under this department who serve
            </p>
            <span className="font-medium cursor-pointer">→ Read More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
