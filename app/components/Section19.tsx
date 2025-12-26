import Head from "next/head";
import Image from "next/image";

export default function TestimonialSection() {
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

      <section className="relative py-20 font-[Poppins] text-white bg-[#141b2e]">
        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <p className="text-lg mb-3">What our patient say</p>
          <span className="inline-block w-16 h-[3px] bg-cyan-400 mb-6"></span>

          <h2 className="text-6xl  mb-20">
            <span
              className="text-cyan-400"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              The Word Of
            </span> {" "}
            <span>MOUTH</span>
          </h2>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-16 text-left">

            {/* Item 1 */}
            <TestimonialItem
              text="Ut tincidunt dolor felis, et accumsan ante elementum in. Fusce convallis, dui ac malesuada posuere, ante diam viverra ligula."
              sign="/sign1.png"
              name="PAUL SMITH"
              city="MANHATTAN"
            />

            {/* Item 2 */}
            <TestimonialItem
              text="Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante."
              sign="/sign2.png"
              name="JANE CROFT"
              city="BOSTON"
            />

            {/* Item 3 */}
            <TestimonialItem
              text="Vestibulum mattis diam quis interdum suscipit. Nam orci ipsum, scelerisque elementum ultricies sit amet."
              sign="/sign3.png"
              name="MICHELLE ECCLESTONE"
              city="CHICAGO"
            />

          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Testimonial Item */
function TestimonialItem({ text, sign, name, city }) {
  return (
    <div>
      <p className="leading-relaxed mb-10">{text}</p>

      <Image
        src={sign}
        alt="signature"
        width={160}
        height={60}
        className="mb-4"
      />

      <p className="font-semibold tracking-wide">
        {name}, <span className="font-normal">{city}</span>
      </p>
    </div>
  );
}
