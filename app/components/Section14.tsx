import { Poppins } from "next/font/google";
import {FaHeartbeat,FaClipboardCheck,FaUserFriends,} from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function MedicareNumbers() {
  return (
    <section className={`py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <p className="text-sm mb-2">
          Great practice means great health care
        </p>

        <h2 className="text-4xl md:text-5xl font-light mb-4">
          <span className="text-[#243567] font-semibold">Medicare</span>{" "}
          <span>In Numbers</span>
        </h2>

        <div className="w-14 h-[2px] bg-[#243567] mb-6"></div>

        <p className="max-w-2xl mb-14 leading-relaxed">
          Dynamically target high-payoff intellectual capital for customized
          technologies. Objectively integrate emerging core competencies.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Card 1 */}
          <div>
            <div className="w-44 h-44 mx-auto rounded-full border-[6px] border-[#243567] flex items-center justify-center mb-6">
              <FaHeartbeat className="text-4xl" />
            </div>
            <h4 className="font-semibold mb-2">HEALING SUCCESS</h4>
            <p className="text-sm leading-relaxed">
              Progressively maintain extensive infomediaries via extensible
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-44 h-44 mx-auto rounded-full border-[6px] border-[#243567] flex items-center justify-center mb-6">
              <FaClipboardCheck className="text-4xl " />
            </div>
            <h4 className="font-semibold mb-2">
              DEDICATION FOR PATIENT
            </h4>
            <p className="text-sm leading-relaxed">
              Progressively maintain extensive infomediaries via extensible
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-44 h-44 mx-auto rounded-full border-[6px] border-[#243567] flex items-center justify-center mb-6">
              <FaBriefcaseMedical className="text-4xl" />
            </div>
            <h4 className="font-semibold mb-2">
              OPERATIONAL SUCCESS
            </h4>
            <p className="text-sm leading-relaxed">
              Efficiently enable enabled sources and cost effective
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <div className="w-44 h-44 mx-auto rounded-full border-[6px] border-[#243567] flex items-center justify-center mb-6">
              <FaUserFriends className="text-4xl" />
            </div>
            <h4 className="font-semibold mb-2">CARE EXPRESSED</h4>
            <p className="text-sm leading-relaxed">
              Efficiently innovate open-source infrastructures via inexpensive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
