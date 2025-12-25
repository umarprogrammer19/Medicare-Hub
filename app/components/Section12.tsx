// app/components/Newsletter.tsx
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Newsletter() {
  return (
    <section className={`py-24 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-500 mb-4">
            Latest Medicare notifications
          </p>

          <h2 className="text-5xl font-light leading-tight mb-6">
            We have some <br />
            <span className="font-bold text-blue-600">
              Good news
            </span>
          </h2>

          <div className="w-16 h-[3px] bg-blue-600 mb-8" />

          <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
            Sign up for Medicare newsletter to receive all the new offers and
            discounts from Medicare clinic. Discounts are only valid for our
            newsletter subscribers.
          </p>

          {/* FORM */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <input
              type="email"
              placeholder="Type in your email address"
              className="flex-1 px-6 py-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button className="px-10 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[450px]">
          <Image
            src="/Box7.PNG" // apni image ka path
            alt="Medicare Newsletter"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
