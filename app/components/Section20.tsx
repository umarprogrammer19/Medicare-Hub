import Head from "next/head";
import Image from "next/image";

export default function PatientsWithDoctors() {
  return (
    <>
      {/* Fonts – Poppins + Dancing Script */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="py-28 bg-white font-[Poppins]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Top Text */}
          <p className="mb-2">
            The relationship we have with you is special
          </p>
          <span className="inline-block w-12 h-[2px] bg-[#243567] mb-6"></span>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span style={{ fontFamily: "'Dancing Script', cursive" }}>
              Our Patients
            </span>{" "}
            <br />
            <span className="text-[#243567]">WITH DOCTORS</span>
          </h2>

          <p className="max-w-3xl mx-auto mb-20 leading-relaxed">
            Sed id ante a velit cursus luctus blandit ut elit. Ut sagittis quis urna non elementum.
            Suspendisse pretium nunc et suscipit hendrerit. Suspendisse potenti.
          </p>

          {/* Upper Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 cursor-pointer">
            <ImageBox img="/box9.jpg"/>
            <ImageBox img="/box10.jpg" />
            <ImageBox img="/box11.jpg" />
          </div>

          {/* Lower Images */}
          <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
            <ImageBox img="/box12.jpg"/>
            <ImageBox img="/box13.jpg"/>
            <ImageBox img="/box14.jpg" />
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
