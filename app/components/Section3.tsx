import { FaHeart } from "react-icons/fa";
import { Poppins, Dancing_Script } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DentalFeatures() {
  return (
    <section className={`pt-20 ${poppins.className}`}>
      <div className="text-center mb-20">
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="h-[2px] w-16 bg-[#243567]" />
          <div className="w-14 h-14 rounded-full border-2 border-[#243567] flex items-center justify-center">
            <FaHeart className="text-[#243567] text-xl" />
          </div>
          <span className="h-[2px] w-16 bg-[#243567]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
          <span className={`${dancing.className} font-normal`}>
            Caring for You
          </span>
          <br />
          Every Step of the Way
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          From expert doctors to modern medical facilities, we provide complete
          healthcare services designed to support your health, comfort, and
          peace of mind at every stage of life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 overflow-visible">
        <div className="bg-[#122b7d] text-white px-8 py-14 relative">
          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Best dental surgeons
          </h3>
          <p className="leading-relaxed mb-8 text-sm text-white/90">
            Our experienced dental surgeons provide advanced treatments
            using modern technology for safe and effective care.
          </p>
          <button className="bg-white text-[#2f5fd7] px-6 py-3 text-sm font-semibold">
            READ MORE
          </button>
        </div>
        <div className="bg-[#172a69] text-white px-8 py-14 relative">
          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Quick examination
          </h3>
          <p className="leading-relaxed mb-8 text-sm text-white/90">
            Fast and accurate diagnosis with minimal waiting time,
            ensuring patient comfort and efficiency.
          </p>
          <button className="bg-white text-[#345fe0] px-6 py-3 text-sm font-semibold">
            READ MORE
          </button>
        </div>
        <div className="bg-[#192755] text-white px-8 py-14 relative">
          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Painless procedures
          </h3>
          <p className="leading-relaxed mb-8 text-sm text-white/90">
            We use modern painless techniques to make dental treatments
            comfortable and stress-free.
          </p>
          <button className="bg-white text-[#3a6ae8] px-6 py-3 text-sm font-semibold">
            READ MORE
          </button>
        </div>
        <div className="bg-[#101c3e] text-white px-8 py-14 relative">
          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Book now
          </h3>
          <p className="leading-relaxed mb-8 text-sm text-white/90">
            Choose your preferred doctor and book an appointment
            online within minutes.
          </p>
          <button className="border-2 border-white px-6 py-3 text-sm font-semibold 
                             hover:bg-white hover:text-[#3f75f0] transition">
            CHOOSE A DOCTOR
          </button>
        </div>
      </div>
    </section>
  );
}
