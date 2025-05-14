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
      src: "",
      alt: "음료 사진",
      name: "Dalgona Coffee",
      desc: "An espresso coffee drink, topped with a small",
      price: 4500,
      link: "#",
    },
    {
      src: "",
      alt: "음료 사진",
      name: "Lungo Coffee",
      desc: "Whipped coffee made using instant coffee",
      price: 6000,
      link: "#",
    },
    {
      src: "",
      alt: "음료 사진",
      name: "Lugo Coffee",
      desc: "An espresso coffee drink, topped with a small",
      price: 4000,
      link: "#",
    },
    {
      src: "",
      alt: "음료 사진",
      name: "Lugo Coffee",
      desc: "Whipped coffee made using instant coffee",
      price: 5500,
      link: "#",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="font-semibold text-2xl">이달의 베스트 메뉴</h2>
      <div className="flex justify-between pt-10">
        {items.map((item, index) => (
          <Card className="w-[250px]" key={index}>
            <div className="relative h-60 w-full">
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
            <CardContent className="flex justify-between items-end">
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
