import Head from "next/head";
import { FaShieldAlt, FaUserMd, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="py-24 font-[Poppins]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-2">Contact us anytime</p>
          <h2 className="text-4xl font-bold mb-16">
            SEND US YOUR COMMENTS
          </h2>
          <div className="grid md:grid-cols-3 gap-14">
            <form className="md:col-span-2 space-y-8">
              <div>
                <label className="block text-sm mb-2">
                  Your Name 
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-4 outline-none"/>
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Your Email 
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 p-4 outline-none"/>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  rows="6"
                  className="w-full bg-gray-100 p-4 outline-none resize-none"></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#243567] text-white px-8 py-3 font-semibold hover:bg-[#111c3e] transition cursor-pointer">
                SEND
              </button>
            </form>

            <div className="space-y-12 flex flex-col justify-center">
              <InfoItem
                icon={<FaShieldAlt />}
                title="EMERGENCY CONTACT"
                text="Free call 24/7"
                number="+1555 6761 020"/>

              <InfoItem
                icon={<FaUserMd />}
                title="HOME VISIT"
                text="Chargeable call 24/7"
                number="+1777 6761 050"/>

              <InfoItem
                icon={<FaPhoneAlt />}
                title="PHONE CONTACT"
                text="Within working hours"
                number="+0800 2336 7811"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoItem({ icon, title, text, number }) {
  return (
    <div className="flex items-center gap-5">
      <div className="text-[#152146] text-3xl">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p>{text}</p>
        <p className="font-medium">{number}</p>
      </div>
    </div>
  );
}


