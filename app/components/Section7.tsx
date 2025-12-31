import { FiPhoneCall } from "react-icons/fi";
export default function HeroSection() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

          /* Opti
    
          .hero-section {
            font-family: 'Poppins', sans-serif;
          }

          /* Dancing Script for specific text */
          .dancing {
            font-family: 'Dancing Script', cursive;
          }
        `}
      </style>
      <section className="py-24 hero-section">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="dancing text-4xl text-[#243567] mb-4">
              Medical & General Care!
            </p>

            <h1 className="text-5xl font-semibold text-black leading-tight mb-6">
              Surprise Your Body <br />
              with <span className="text-[#243567]">Extra Care</span>
            </h1>

            <p className="text-gray-600 leading-8 max-w-xl mb-10">
              Rapidiously evisculate user-centric functionalities for highly
              efficient interfaces. Competently leverage other's scalable
              technology before synergistic manufactured products.
            </p>
            <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center">
                  <FiPhoneCall className="text-[#243567] text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#243567]">
                    CALL ANYTIME 24/7
                  </p>
                  <p className="text-xl font-semibold text-[#243567]">
                    +44-1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/about.jpg"
              alt="Doctors"
              className="w-full object-cover"/>
          </div>
        </div>
      </section>
    </>
  );
}




