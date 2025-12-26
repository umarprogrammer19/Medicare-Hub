import Head from "next/head";
import Image from "next/image";

export default function StatsSection() {
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
      <section className="font-[Poppins] bg-[#050b1f] text-white py-13">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Image
              src="/dr.png"
              alt="Doctor"
              width={420}   
              height={900} />
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <StatBox
              number="12"
              title="YEARS WITH YOU"
              text="Phasellus laoreet tristique sagittis. Phasellus commodo dolor sed elit iaculis interdum"/>

            <StatBox
              number="41"
              title="AWARDS"
              text="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero"/>

            <StatBox
              number="25"
              title="DOCTORS"
              text="Suspendisse sed lorem elit Aenean nec faucibus lacus. Phasellus ultrices risus vitae eros suscipit"/>

            <StatBox
              number="800"
              title="SATISFIED CLIENTS"
              text="Mauris vitae varius tortor. Fusce eros diam, auctor sit amet lorem ut, efficitur iaculis magna"/>
          </div>
        </div>
      </section>
    </>
  );
}

function StatBox({ number, title, text }) {
  return (
    <div>
      <h3 className="text-5xl font-semibold mb-2">{number}</h3>

      <h4 className="text-xl font-semibold tracking-wide mb-2 relative inline-block">
        {title}
        <span className="block w-14 h-[2px] bg-white mt-2"></span>
      </h4>

      <p className="leading-relaxed">{text}</p>
    </div>
  );
}
