import { Poppins, Dancing_Script } from "next/font/google";
import {FaUserMd, FaHeartbeat, FaPhoneAlt, FaUserNurse, FaAmbulance, FaHospital} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function OurValues() {
  return (
    <section className={`py-24 bg-white ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-2">What we stand for</p>

        <h2 className="text-6xl font-bold mb-16">
          <span className={`${dancing.className} text-[#243567] font-semibold`}>
            Our Values
          </span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="space-y-14">
            <ValueItem
              icon={<FaUserMd />}
              title="DOCTOR YOU CHOOSE"
              text="Donec porta tellus ac purus eleifend faucibus sit amet eu eros. Donec cursus laoreet felis blandit facilisis"/>
            <ValueItem
              icon={<FaUserNurse />}
              title="NURSING STAFF"
              text="Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et"/>
          </div>

          <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-[#243567]"></div>
          <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-[#243567]"></div>

          <div className="space-y-14">
            <ValueItem
              icon={<FaHeartbeat />}
              title="YOUR HEALTHCARE"
              text="Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod ante sit amet elementum"/>

            <ValueItem
              icon={<FaAmbulance />}
              title="EMERGENCY SERVICES"
              text="Pellentesque sagittis neque neque, ac ultrices neque tempor a. In tellus sollicitudin eu."
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-14">
            <ValueItem
              icon={<FaPhoneAlt />}
              title="ALWAYS THERE FOR YOU"
              text="Mauris commodo lacinia nisi a fermentum. Donec risus magna, fringilla laoreet ullamcorper in."
            />

            <ValueItem
              icon={<FaHospital />}
              title="PREMIUM FACILITIES"
              text="Donec porta tellus ac purus eleifend faucibus sit amet eu eros. Donec cursus laoreet felis."
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Item */
function ValueItem({ icon, title, text }) {
  return (
    <div className="flex gap-5">
      <div className="text-[#192243] text-4xl">{icon}</div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
