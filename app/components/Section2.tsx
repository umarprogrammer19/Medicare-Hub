import { Poppins } from "next/font/google";
import { FaArrowRight, FaUserMd, FaStethoscope, FaHandHoldingMedical } from "react-icons/fa";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function WorkProcess() {
  return (
    <section
      className={`${poppins.className} relative bg-gradient-to-b from-[#0b1f3a] to-[#07162b] py-24 text-white overflow-hidden`}>
        <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="h-[2px] w-16 bg-cyan-400" />
            <div className="w-14 h-14 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <span className="text-cyan-400 text-xl">❤</span>
            </div>
            <span className="h-[2px] w-16 bg-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Our Work Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Proactively revolutionize granular customer service after pandemic
            internal or “organic” sources proactive human capital rather
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="mx-auto mb-6 relative w-36 h-36 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <span className="absolute -top-4 w-12 h-12 rounded-full bg-cyan-400 text-white flex items-center justify-center font-semibold">
                01
              </span>
              <FaUserMd className="text-cyan-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Take Appointment</h3>
            <p className="text-gray-300 mb-6">
              We provide janitorial and Medical services complexes for all types
              sizes of services.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition"
            >
              Get In Touch <FaArrowRight size={16} />
            </a>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="mx-auto mb-6 relative w-36 h-36 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <span className="absolute -top-4 w-12 h-12 rounded-full bg-cyan-400 text-white flex items-center justify-center font-semibold">
                02
              </span>
              <FaStethoscope className="text-cyan-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Medical Checkup</h3>
            <p className="text-gray-300 mb-6">
              We provide janitorial and Medical services complexes for all types
              sizes of services.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition"
            >
              Get In Touch <FaArrowRight size={16} />
            </a>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="mx-auto mb-6 relative w-36 h-36 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <span className="absolute -top-4 w-12 h-12 rounded-full bg-cyan-400 text-white flex items-center justify-center font-semibold">
                03
              </span>
              <FaHandHoldingMedical className="text-cyan-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Started Treatment</h3>
            <p className="text-gray-300 mb-6">
              We provide janitorial and Medical services complexes for all types
              sizes of services.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition"
            >
              Get In Touch <FaArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}









