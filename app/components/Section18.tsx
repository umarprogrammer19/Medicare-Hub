import Head from "next/head";
import { FaShieldAlt, FaUserMd, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      {/* Poppins Font – SAME FILE */}
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
          <p className="text-gray-500 mb-2">Contact us anytime</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            SEND US YOUR COMMENTS
          </h2>

          <div className="grid md:grid-cols-3 gap-14">

            {/* LEFT FORM */}
            <form className="md:col-span-2 space-y-8">
              <div>
                <label className="block text-sm mb-2">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  rows="6"
                  className="w-full bg-gray-100 p-4 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-cyan-500 text-white px-8 py-3 font-semibold hover:bg-cyan-600 transition"
              >
                SEND
              </button>
            </form>

            {/* RIGHT INFO */}
            <div className="border-l pl-10 space-y-12">

              <InfoItem
                icon={<FaShieldAlt />}
                title="EMERGENCY CONTACT"
                text="Free call 24/7"
                number="+1555 6761 020"
              />

              <InfoItem
                icon={<FaUserMd />}
                title="HOME VISIT"
                text="Chargeable call 24/7"
                number="+1777 6761 050"
              />

              <InfoItem
                icon={<FaPhoneAlt />}
                title="PHONE CONTACT"
                text="Within working hours"
                number="+0800 2336 7811"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Info Item */
function InfoItem({ icon, title, text, number }) {
  return (
    <div className="flex gap-5">
      <div className="text-cyan-500 text-3xl mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-500">{text}</p>
        <p className="text-gray-700 font-medium">{number}</p>
      </div>
    </div>
  );
}
