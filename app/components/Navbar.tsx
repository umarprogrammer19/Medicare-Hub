import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto relative flex items-center px-6 h-16">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="MediCare Logo"
            width={150}
            height={50}
            className="h-full w-auto object-contain"
            priority/>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8 text-sm font-medium text-[#243567]">
          <li className="relative pb-1">
            <Link href="/">
              <span className="after:block after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-[#243567] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                HOME
              </span>
            </Link>
          </li>
          <li className="relative pb-1">
            <Link href="/doctors">
              <span className="after:block after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-[#243567] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                ALL DOCTORS
              </span>
            </Link>
          </li>
          <li className="relative pb-1">
            <Link href="/about">
              <span className="after:block after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-[#243567] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                ABOUT
              </span>
            </Link>
          </li>
          <li className="relative pb-1">
            <Link href="/contact">
              <span className="after:block after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-[#243567] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                CONTACT
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2 ml-auto ">
          <button className="cursor-pointer px-6 py-2 border border-[#243567] text-[#243567] bg-white text-sm font-serif font-medium hover:bg-[#243567] hover:text-white transition">
            Create account
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-b border-gray-300" />
    </nav>
  );
}
