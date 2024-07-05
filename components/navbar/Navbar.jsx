import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";
import { GiGreekTemple } from "react-icons/gi";
import { MdOutlineTempleHindu } from "react-icons/md";
import { FaDharmachakra } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <button className="bg-[#FFEEDF] px-6 py-2 rounded-sm flex text-xs mr-3 hover:bg-gray-200 transition-colors duration-300">
            <MdOutlineMenu className="mr-1 text-lg" />
            Menu
          </button>
          <div className="hidden md:flex mt-2 space-x-4">
            <Link
              href="#"
              className="flex items-center text-xs hover:text-gray-800"
            >
              <GiByzantinTemple className="text-xl mr-1 mt-[-4px]" />
              Pura Besakhi
            </Link>
            <Link
              href="#"
              className="flex items-center text-xs hover:text-gray-800"
            >
              <GiGreekTemple className="text-xl mr-1 mt-[-4px]" />
              Taj Mahal
            </Link>
            <Link
              href="#"
              className="flex items-center text-xs hover:text-gray-800"
            >
              <MdOutlineTempleHindu className="text-xl mr-1 mt-[-4px]" />
              Taj Mahal
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Link
            href="#"
            className="text-xs flex items-center mr-4 hover:text-gray-800"
          >
            <FaDharmachakra className="text-orange-400 text-lg mr-2" /> Offers
          </Link>
          <Link
            href="#"
            className="text-xs flex items-center bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            <IoLocationOutline className="text-lg font-bold mr-1" /> Plan A Trip
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
