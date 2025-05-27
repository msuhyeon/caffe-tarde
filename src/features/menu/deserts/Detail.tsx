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

const DesertDetail = (desert: DetailTypes) => {
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
            <BreadcrumbLink href="/menu/desert">디저트</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{desert.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Detail {...desert} />
    </section>
  );
};

export default DesertDetail;
