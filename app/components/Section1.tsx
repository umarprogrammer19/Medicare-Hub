import { FiClock, FiCalendar, FiRepeat } from "react-icons/fi";
import { Poppins, Dancing_Script } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function MedicalFeatures() {
  return (
    <section className={`${poppins.className} bg-white py-20`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={`${dancing.className} text-4xl md:text-5xl font-semibold text-gray-900`}>
          Complete Care
        </h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-[#243567] mt-2">
          FOR YOUR HEALTH
        </h3>
        <div className="w-14 h-[2px] bg-[#243567] mx-auto my-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We provide trusted medical services with experienced doctors,
          modern facilities, and patient-focused care for your well-being
        </p>
        <div className="grid md:grid-cols-3 gap-12 mt-16">

          {/* Feature 1 */}
          <div className="text-center">
            <FiClock className="text-[#243567] text-5xl mx-auto mb-4" />
            <p className="text-gray-500">
              Check doctor availability
            </p>
            <h4 className="text-2xl font-semibold mt-2">
              Clinic Timings
            </h4>
          </div>

          {/* Feature 2 */}
          <div className="text-center md:border-x md:px-6">
            <FiCalendar className="text-[#243567] text-5xl mx-auto mb-4" />
            <p className="text-gray-500">
              Book your visit online
            </p>
            <h4 className="text-2xl font-semibold mt-2">
              Doctor Appointments
            </h4>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <FiRepeat className="text-[#243567] text-5xl mx-auto mb-4" />
            <p className="text-gray-500">
              See patient success stories
            </p>
            <h4 className="text-2xl font-semibold mt-2">
              Treatments & Results
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
