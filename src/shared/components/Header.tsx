import { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/shared/components/ui/dropdown-menu';
import menuData from '@/data/menu.json';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full z-50 fixed">
      <div
        className={`relative  overflow-hidden transition-all duration-300 ${
          expanded ? 'h-[280px] bg-[#f6f5ef]' : 'h-[80px]'
        }`}
      >
        <div className="flex justify-between items-center px-20 py-4 h-[80px] w-screen max-h-[270px] py-2">
          <div className="text-2xl font-extrabold text-black-500">
            <h1>
              <Link href="/"> TARDE COFFEE</Link>
            </h1>
          </div>
          <nav>
            <ul
              className="flex gap-5"
              onMouseEnter={() => setExpanded(true)}
              onMouseLeave={() => setExpanded(false)}
            >
              {menuData.map((menu, index) => (
                <li key={index} className="cursor-pointer relative flex gap-10">
                  <span className="hover:font-medium">{menu.label}</span>
                  <ul className="absolute left-0 top-full w-full z-40 pt-7 ">
                    {menu.subItems.map((sub, subIndex) => (
                      <li key={subIndex} className="pt-5 hover:text-rose-700">
                        <Link href={sub.linkUrl} className="">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <a className="main_link"></a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium border px-3 py-1 rounded-md hover:bg-gray-100">
                Language
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>한국어</DropdownMenuItem>
                <DropdownMenuItem>EN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
