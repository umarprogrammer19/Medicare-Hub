import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const services = [
  {
    title: "DENTIST",
    subtitle: "For your child whitest teeth",
    image: "/Box1.jpg",
  },
  {
    title: "CARDIOLOGIST",
    subtitle: "Got a broken heart?",
    image: "/Box2.jpg",
  },
  {
    title: "CHIROPRACTOR",
    subtitle: "Neck or back pain?",
    image: "/Box3.jpg",
  },
];

export default function Services() {
  return (
    <section
      className={`${poppins.className} max-w-7xl mx-auto px-6 py-20`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {services.map((item, index) => (
          <div key={index} className="text-center">
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                  <IoSearch className="text-sky-500 w-6 h-6" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              {item.subtitle}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-wide text-gray-900">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed px-4">
              Praesent convallis tortor et enim laoreet, vel consectetur purus
              laoreet
            </p>
          </div>
        ))}
        <div className="bg-[#0f162c] p-8 h-fit">
          <h3 className="text-2xl font-bold mb-4 text-white">
            WORKING HOURS
          </h3>
          <p className="text-white text-sm mb-6">
            Duis scelerisque faucibus nisi sed lacinia Curabitur ipsum elit
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between border-b pb-2 text-white">
              <span className="font-medium">Monday</span>
              <span>8:00 AM - 2:30 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-white">
              <span className="font-medium">Tuesday</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-white">
              <span className="font-medium">Wednesday</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-white">
              <span className="font-medium">Thursday</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-white">
              <span className="font-medium">Friday</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-white">
              <span className="font-medium">Saturday</span>
              <span >Closed</span>
            </li>
            <li className="flex justify-between text-white">
              <span className="font-medium">Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
