import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';
import { menu } from '@/data/menu';
import MenuGrid from '@/shared/components/MenuGrid';
import { DetailTypes } from '@/shared/types/menuItem';
import Link from 'next/link';

const Menu = () => {
  const sortedMenu: DetailTypes[] = menu.sort(function compare(a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });

  return (
    <section className="mt-10">
      <Breadcrumb>
        <BreadcrumbList className="justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>메뉴</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ul className="w-full mb-10 flex">
        <li className="border-1 border-[#505e54] w-full p-4 text-center bg-[#505e54] text-white">
          <Link href="/menu/drinks">음료</Link>
        </li>
        <li className="border-1 border-[#505e54] w-full p-4 text-center">
          <Link href="/menu/deserts">디저트</Link>
        </li>
      </ul>
      <MenuGrid sortedMenu={sortedMenu} />
    </section>
  );
};

export default Menu;
