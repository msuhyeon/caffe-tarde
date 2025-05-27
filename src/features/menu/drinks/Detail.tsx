import { DetailTypes } from '@/shared/types/menuItem';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';
import Detail from '@/shared/components/ProductDetail';

const DrinkDetail = (drink: DetailTypes) => {
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
            <BreadcrumbLink href="/menu/drinks">음료</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{drink.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Detail {...drink} />
    </section>
  );
};

export default DrinkDetail;
