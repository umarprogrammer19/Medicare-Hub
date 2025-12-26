import { Poppins, Dancing_Script } from "next/font/google";
import {
  FaHeartbeat,
  FaClipboardCheck,
  FaUserFriends,
  FaBriefcaseMedical,
} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
          <span className={dancing.className}>In Numbers</span>
        </h2>

        <div className="w-14 h-[2px] bg-[#243567] mb-6"></div>

        <p className="max-w-2xl mb-14 leading-relaxed">
          Dynamically target high-payoff intellectual capital for customized
          technologies.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

          {/* 90% */}
          <div>
            <div
              className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: "conic-gradient(#243567 90%, #e5e7eb 0)",
              }}
            >
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <FaHeartbeat className="text-4xl text-[#13192c]" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">HEALING SUCCESS</h4>
            <p className="text-sm">90% Success Rate</p>
          </div>

          {/* 80% */}
          <div>
            <div
              className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: "conic-gradient(#243567 80%, #e5e7eb 0)",
              }}
            >
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <FaClipboardCheck className="text-4xl text-[#13192c]" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">DEDICATION FOR PATIENT</h4>
            <p className="text-sm">80% Satisfaction</p>
          </div>

          {/* 70% */}
          <div>
            <div
              className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: "conic-gradient(#243567 70%, #e5e7eb 0)",
              }}
            >
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <FaBriefcaseMedical className="text-4xl text-[#13192c]" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">OPERATIONAL SUCCESS</h4>
            <p className="text-sm">70% Efficiency</p>
          </div>

          {/* 60% */}
          <div>
            <div
              className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{
                background: "conic-gradient(#243567 60%, #e5e7eb 0)",
              }}
            >
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <FaUserFriends className="text-4xl text-[#13192c]" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">CARE EXPRESSED</h4>
            <p className="text-sm">60% Engagement</p>
          </div>

        </div>
      </div>
    </section>
  );
}
