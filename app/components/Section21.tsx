import Head from "next/head";
import Image from "next/image";

export default function PatientsWithDoctorsSixBoxes() {
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

      <section className="py-16 bg-white font-[Poppins]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Top Line */}
          <p className="mb-2">
            We are highly professional and skilled
          </p>
          <span className="inline-block w-12 h-[2px] bg-[#243567] mb-6"></span>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-[#243567]">MEDICARE</span>{" "}
            <span style={{ fontFamily: "'Dancing Script', cursive" }}>
              Staff
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mb-20 leading-relaxed">
            Donec faucibus, nisi sit amet ullamcorper suscipit, ligula augue blandit turpis,
            vitae maximus lacus odio vitae felis. Suspendisse potenti.
          </p>

          {/* Upper Images */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <ImageBox img="/dr1.jpg" />
            <ImageBox img="/dr2.jpg" />
            <ImageBox img="/dr3.jpg" />
          </div>

          {/* Lower Images */}
          <div className="grid md:grid-cols-3 gap-4">
            <ImageBox img="/dr4.jpg" />
            <ImageBox img="/dr5.jpg" />
            <ImageBox img="/dr6.jpg" />
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
        alt="staff doctor"
        width={400}
        height={300}
        className="w-full h-[400px] object-cover"
      />
    </div>
  );
}
