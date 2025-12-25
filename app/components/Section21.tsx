import Head from "next/head";
import Image from "next/image";

export default function PatientsWithDoctorsFourBoxes() {
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

      <section className="py-28 bg-white font-[Poppins]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Top Line */}
          <p className="text-gray-500 mb-2">
            We’re highly professional and skilled
          </p>
          <span className="inline-block w-12 h-[2px] bg-red-500 mb-6"></span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            
            <span className="text-red-600">MEDICARE </span>
            STAFF
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-20 leading-relaxed">
            Donec faucibus, nisi sit amet ullamcorper suscipit, ligula augue blandit turpis,
            vitae maximus lacus odio vitae felis. Suspendisse potenti.
          </p>

          {/* Top Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <ImageBox img="/patient-4.jpg" />
            <ImageBox img="/patient-5.jpg" />
            <ImageBox img="/patient-6.jpg" />
          </div>

          {/* 4 BOXES IN ONE LINE */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <InfoBox
              title="24/7 Support"
              text="Available around the clock to ensure continuous care."
            />
            <InfoBox
              title="Expert Doctors"
              text="Highly qualified specialists with years of experience."
            />
            <InfoBox
              title="Advanced Equipment"
              text="Modern technology for accurate diagnosis and treatment."
            />
            <InfoBox
              title="Patient Safety"
              text="Your safety and comfort are always our top priority."
            />
          </div>

        </div>
      </section>
    </>
  );
}

/* Image Box */
function ImageBox({ img }) {
  return (
    <div className="overflow-hidden">
      <Image
        src={img}
        alt="patient doctor"
        width={400}
        height={300}
        className="w-full h-[300px] object-cover"
      />
    </div>
  );
}

/* Info Box */
function InfoBox({ title, text }) {
  return (
    <div className="border p-8 hover:shadow-lg transition">
      <h4 className="font-semibold text-lg mb-3 text-gray-900">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm">
        {text}
      </p>
    </div>
  );
}
