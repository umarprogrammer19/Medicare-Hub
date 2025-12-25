import { Poppins } from "next/font/google";
import { FaPhoneAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function MapSection() {
  return (
    <section className={`relative w-full h-[600px] ${poppins.className}`}>
      {/* Google Map */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps?q=New+York&output=embed"
        loading="lazy"
      />

      {/* Overlay Box */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-10 bg-white w-[360px] rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Working hours
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">MON – WED</span>
              <span>8AM – 7PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">THU</span>
              <span>8AM – 5PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">FRI</span>
              <span>8AM – 5PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">SAT – SUN</span>
              <span className="text-red-500">Closed</span>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex items-start gap-3 mb-4">
            <FaPhoneAlt className="text-blue-600 text-lg mt-1" />
            <div>
              <p className="font-semibold text-sm">CALL US ANYTIME</p>
              <p className="text-gray-600 text-sm">0-800-2336-7820</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-600 text-lg mt-1" />
            <div>
              <p className="font-semibold text-sm">VISIT US ANYTIME</p>
              <p className="text-gray-600 text-sm">
                27th Avenue <br /> New York, W2 3XE, US
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaHeart className="text-blue-600 text-lg mt-1" />
            <div>
              <p className="font-semibold text-sm">BOOK AN APPOINTMENT</p>
              <p className="text-blue-600 text-sm cursor-pointer hover:underline">
                Click here to book
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
