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
    <section className="py-10">
      <h2 className="font-semibold text-2xl">이달의 베스트 메뉴</h2>
      <div className="flex justify-between pt-10 gap-8">
        {items.map((item, index) => (
          <Card className="flex-1 p-0 overflow-hidden rounded-sm" key={index}>
            <div className="relative h-70 w-full">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {item.name}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              {/* <p>{`${formatPrice(item.price)}원`}</p> */}
              <Link
                className="cursor-pointer py-2 px-4 rounded-sm border-1 text-sm"
                href={`/menu/${item.category === 'drinks' ? 'drinks' : 'deserts'}/${item.id}`}
              >
                자세히 보기
              </Link>
            </CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MonthlyBestMenu;
