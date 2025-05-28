import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
// import { formatPrice } from '@/lib/format';
import { menu } from '@/data/menu';
import { DetailTypes } from '@/shared/types/menuItem';

const MonthlyBestMenu = () => {
  const items: DetailTypes[] = menu.slice(0, 4);

  return (
    <section className="lg:pt-10 pt-6">
      <h2 className="font-semibold text-2xl">이달의 베스트 메뉴</h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 lg:gap-8 gap-4 lg:mt-10 mt-5">
        {items.map((item, index) => (
          <Link
            className="cursor-pointer"
            href={`/menu/${item.category === 'drinks' ? 'drinks' : 'deserts'}/${item.id}`}
          >
            <Card className="p-0 overflow-hidden rounded-sm " key={index}>
              <div className="relative xl:h-80 w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={400}
                  height={400}
                  className="object-cover"
                  layout="responsive"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle className="lg:text-xl text-sm lg:font-semibold font-normal mx-auto lg:ml-0">
                  {item.name}
                </CardTitle>
                <CardDescription className="hidden lg:block lg:blck">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center hidden lg:blck">
                {/* <Link
                  className="cursor-pointer py-2 px-4 rounded-sm border text-sm"
                  href={`/menu/${item.category === 'drinks' ? 'drinks' : 'deserts'}/${item.id}`}
                >
                  확인하기
                </Link> */}
              </CardContent>
              <CardFooter />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MonthlyBestMenu;
