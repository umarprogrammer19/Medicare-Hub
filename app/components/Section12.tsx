// app/components/Newsletter.tsx
import Image from "next/image";
import { Poppins, Dancing_Script } from "next/font/google";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Newsletter() {
  return (
    <section className={`py-24 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-gray-500">
            Latest Medicare notifications
          </p>

          <h2 className="text-5xl md:text-6xl leading-tight mb-6">
            {/* Dancing Script */}
            <span className={`${dancing.className} block text-5xl md:text-6xl font-bold text-[#243567]`}>
              We have some
            </span>

            {/* Poppins */}
            <span className="block font-extrabold text-[#243567]">
              Good News
            </span>
          </h2>

          <div className="w-16 h-[3px] bg-[#243567] mb-8" />

          <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
            Sign up for the Medicare newsletter to receive all the new offers and
            discounts from Medicare clinic. Discounts are only valid for our
            newsletter subscribers.
          </p>

          {/* FORM */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <input
              type="email"
              placeholder="Type in your email address"
              className="flex-1 px-6 py-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-[#243567]"
            />

            <button className="cursor-pointer px-10 py-4 rounded-full bg-[#243567] text-white font-semibold hover:bg-[#0b1430] transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/Box7.PNG" // Apni image ka path
            alt="Medicare Newsletter"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
