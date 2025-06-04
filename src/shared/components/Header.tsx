import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/shared/components/ui/dropdown-menu';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/shared/components/ui/drawer';
import { DialogTitle } from '@radix-ui/react-dialog';

import { category } from '@/data/category';
import clsx from 'clsx';

const Header = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full z-50 fixed">
      <div
        className={`relative overflow-hidden transition-all duration-300 ${
          expanded ? 'h-[280px]' : 'h-[80px]'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-4 h-[80px] w-full max-h-[270px]">
          <div className="text-2xl font-extrabold text-black-500">
            <h1>
              <Link href="/">TARDE COFFEE</Link>
            </h1>
          </div>
          <nav
            className="hidden lg:flex gap-5"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
          >
            <ul className="flex gap-5">
              {category.map((menu, index) => (
                <li
                  key={index}
                  className={clsx(
                    'cursor-pointer relative flex gap-10',
                    expanded && 'text-[#505e54]',
                  )}
                >
                  {menu?.linkUrl ? (
                    <Link href={menu?.linkUrl} className="p-5 lg:min-w-[90px]">
                      <span className="hover:font-medium">{menu.label}</span>
                    </Link>
                  ) : (
                    <span className="hover:font-medium p-5">{menu.label}</span>
                  )}
                  <ul className="absolute left-0 top-full w-full z-40 pt-7">
                    {menu.subItems.map((sub, subIndex) => (
                      <li key={subIndex} className="pt-5 hover:text-rose-700">
                        <Link href={sub.linkUrl} className="p-5">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:hidden">
            <Drawer direction="right" open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button className="p-2" aria-label="Toggle mobile menu">
                  <Menu size={24} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="w-[300px]">
                <div className="p-6">
                  <DialogTitle className="text-lg font-bold mb-4">
                    메뉴
                  </DialogTitle>
                  <ul className="space-y-4">
                    {category.map((menu, idx) => (
                      <li key={idx}>
                        {menu?.linkUrl ? (
                          <Link
                            href={menu.linkUrl}
                            className="block w-full px-3 py-2 rounded hover:bg-neutral-100 transition"
                            onClick={() => setOpen(false)}
                          >
                            <span className="font-medium">{menu.label}</span>
                          </Link>
                        ) : (
                          <span className="font-medium">{menu.label}</span>
                        )}
                        <ul className="pl-4 mt-2 space-y-1">
                          {menu.subItems.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={sub.linkUrl}
                                className="block w-full px-3 py-2 rounded hover:bg-neutral-100 transition"
                                onClick={() => setOpen(false)}
                              >
                                <span className="text-sm text-neutral-600 hover:text-black">
                                  {sub.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          {/* Language 드롭다운 */}
          <div className="invisible lg:flex items-center gap-4">
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
