import Head from "next/head";
import {
  FaUserMd,
  FaHeartbeat,
  FaPhoneAlt,
  FaUserNurse,
  FaAmbulance,
  FaHospital,
} from "react-icons/fa";

export default function OurValues() {
  return (
    <>
      {/* Poppins Font added in SAME file */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="py-24 bg-white font-[Poppins]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <p className="text-gray-500 mb-2">What we stand for</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            OUR VALUES
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-12 relative">

            {/* Column 1 */}
            <div className="space-y-14">
              <ValueItem
                icon={<FaUserMd />}
                title="DOCTOR YOU CHOOSE"
                text="Donec porta tellus ac purus eleifend faucibus sit amet eu eros. Donec cursus laoreet felis blandit facilisis."
              />

              <ValueItem
                icon={<FaUserNurse />}
                title="NURSING STAFF"
                text="Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et."
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-gray-200"></div>
            <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-gray-200"></div>

            {/* Column 2 */}
            <div className="space-y-14">
              <ValueItem
                icon={<FaHeartbeat />}
                title="YOUR HEALTHCARE"
                text="Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod ante sit amet elementum."
              />

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
    </>
  );
}

/* Reusable Item */
function ValueItem({ icon, title, text }) {
  return (
    <div className="flex gap-5">
      <div className="text-cyan-500 text-4xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
