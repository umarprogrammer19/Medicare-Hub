import Head from "next/head";
import Image from "next/image";

export default function PatientsWithDoctors() {
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

          {/* Top Text */}
          <p className="text-gray-500 mb-2">
            The relationship we have with you is special
          </p>
          <span className="inline-block w-12 h-[2px] bg-red-500 mb-6"></span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OUR PATIENTS <br />
            <span className="text-red-600">WITH DOCTORS</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-20 leading-relaxed">
            Sed id ante a velit cursus luctus blandit ut elit. Ut sagittis quis urna non elementum.
            Suspendisse pretium nunc et suscipit hendrerit. Suspendisse potenti.
          </p>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <ImageBox img="/patient-1.jpg" />
            <ImageBox img="/patient-2.jpg" />
            <ImageBox img="/patient-3.jpg" />
          </div>

          {/* EXTRA 3 BOXES */}
          <div className="grid md:grid-cols-3 gap-10">
            <InfoBox
              title="Personal Care"
              text="Donec faucibus, nisi sit amet ullamcorper suscipit, ligula augue blandit turpis."
            />
            <InfoBox
              title="Trusted Doctors"
              text="Suspendisse potenti. Donec faucibus, nisi sit amet ullamcorper suscipit."
            />
            <InfoBox
              title="Modern Treatment"
              text="Vitae maximus lacus odio vitae felis. Donec cursus laoreet felis."
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
    <div className="border p-10 text-left hover:shadow-lg transition">
      <h4 className="font-semibold text-lg mb-3 text-gray-900">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
