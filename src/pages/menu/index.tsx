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
      <MenuGrid sortedMenu={sortedMenu} />
    </section>
  );
};

export default Menu;
