import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { dm_sans } from "../content/font";

const Header = () => {
  return (
    <div className={`z-50 w-full flex justify-between items-center ${dm_sans.className}`}>
      {/* Logo and Home Link */}
      <Link
        href="/"
        className="flex items-center space-x-1.5 xs:space-x-3 sm:space-x-4 md:space-x-8 cursor-pointer"
      >
        <Image
          loading="lazy"
          alt="Stru.AI"
          src="/assets/svg/StruLogo.svg"
          width={50}
          height={50}
          className="w-[40px] sm:w-[50px]"
        />
        <div className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#FAFAFA]">Stru</div>
      </Link>

      {/* Navigation Links */}
      <div className="flex justify-between items-center text-lg font-semibold space-x-1.5 xs:space-x-3 sm:space-x-6 md:space-x-12">
        {/* Pricing Link */}
        <Link
          href="/pricing"
          className="text-sm xs:text-base sm:text-lg text-[#F2F2F2] cursor-pointer"
        >
          Pricing
        </Link>

        {/* Beta Access Link */}
        <a
          href={process.env.NEXT_PUBLIC_HOST}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:bg-white text-[#F2F2F2] hover:text-black text-sm xs:text-base sm:text-lg font-semibold border border-[#F7F6FA] px-3 sm:px-6 py-2 sm:py-3 gap-2 rounded-full cursor-pointer transition duration-200"
        >
          Beta Access
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Header;
