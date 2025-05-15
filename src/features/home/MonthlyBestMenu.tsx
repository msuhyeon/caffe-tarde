import Image from "next/image";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { formatPrice } from "@/lib/format";

type DrinkTypes = {
  src: string;
  name: string;
  desc: string;
  alt: string;
  price: number;
  link?: string;
};

const MonthlyBestMenu = () => {
  // const itemImages: CardItem[] = [
  //   {
  //     src: "/images/menu/strawberry-latte.png",
  //     alt: "딸기라떼",
  //     link: "/menu/drink/00000001",
  //     desc: "달콤한 딸기와 우유의 조화, 시원하게 즐기세요!",
  //   },
  // ];

  const items: DrinkTypes[] = [
    {
      src: "/images/best_01.png",
      alt: "음료 사진",
      name: "카페 라떼",
      desc: "우유 위에 달콤쌉싸름한 휘핑 커피 크림을 얹은 음료",
      price: 4500,
      link: "#",
    },
    {
      src: "/images/best_02.png",
      alt: "아인슈페너 커피",
      name: "아인슈페너",
      desc: "진한 에스프레소 위에 부드러운 휘핑 크림을 얹은 오스트리아 전통 커피",
      price: 6000,
      link: "#",
    },
    {
      src: "/images/best_03.png",
      alt: "음료 사진",
      name: "달고나 커피",
      desc: "달고나 사탕 같은 달콤함을 살린 커피 크림을 차가운 우유 위에 얹은 음료",
      price: 5500,
      link: "#",
    },
    {
      src: "/images/best_04.png",
      alt: "음료 사진",
      name: "아이스 아메리카노",
      desc: "시원한 에스프레소를 얼음과 함께 깔끔하게 즐기는 커피",
      price: 4000,
      link: "#",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="font-semibold text-2xl">이달의 베스트 메뉴</h2>
      <div className="flex justify-between pt-10 gap-8">
        {items.map((item, index) => (
          <Card className="flex-1 p-0 overflow-hidden rounded-sm" key={index}>
            <div className="relative h-50 w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {item.name}
              </CardTitle>
              <CardDescription className="">{item.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p>{`${formatPrice(item.price)}원`}</p>
              <Button variant="outline">자세히 보기</Button>
            </CardContent>
            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MonthlyBestMenu;
