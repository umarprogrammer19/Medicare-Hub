import Head from "next/head";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

export default function StatsSection() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="bg-white py-20 font-[Poppins]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#243567] flex items-center justify-center">
                  <HiOutlineUsers className="text-3xl text-[#243567]" />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-[#243567] mb-1">
                  30+
                </h3>
                <h4 className="text-lg font-semibold text-[#0b1c39] mb-2">
                  Years Of Experience
                </h4>
                <p className="text-gray-500 leading-7">
                  Incubate extensive scenarios without top-line quality vectors.
                  Authoritatively engage
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#243567] flex items-center justify-center">
                  <MdOutlineMedicalServices className="text-3xl text-[#243567]" />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-[#243567] mb-1">
                  100+
                </h3>
                <h4 className="text-lg font-semibold text-[#0b1c39] mb-2">
                  Experienced Doctor's
                </h4>
                <p className="text-gray-500 leading-7">
                  Incubate extensive scenarios without top-line quality vectors.
                  Authoritatively engage
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-24 h-24 rounded-full  flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#243567] flex items-center justify-center">
                  <FaRegSmile className="text-3xl text-[#243567]" />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-[#243567] mb-1">
                  200+
                </h3>
                <h4 className="text-lg font-semibold text-[#0b1c39] mb-2">
                  Happy Patients
                </h4>
                <p className="text-gray-500 leading-7">
                  Incubate extensive scenarios without top-line quality vectors.
                  Authoritatively engage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}