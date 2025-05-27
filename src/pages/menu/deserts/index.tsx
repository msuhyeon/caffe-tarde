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

const Desert = () => {
  const filteredMenu: DetailTypes[] = menu.filter(
    item => item.category === 'deserts',
  );
  const sortedMenu: DetailTypes[] = filteredMenu.sort(function compare(a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });

  return (
    <section className="lg:mt-10">
      <Breadcrumb>
        <BreadcrumbList className="justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/menu">메뉴</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>디저트</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <MenuGrid sortedMenu={sortedMenu} />
    </section>
  );
};

export default Desert;
