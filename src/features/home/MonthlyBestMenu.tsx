import Image from "next/image";

type CardItem = {
  src: string;
  alt: string;
  link?: string;
  desc: string;
};

const MonthlyBestMenu = () => {
  const itemImages: CardItem[] = [
    {
      src: "/images/menu/strawberry-latte.png",
      alt: "딸기라떼",
      link: "/menu/drink/00000001",
      desc: "달콤한 딸기와 우유의 조화, 시원하게 즐기세요!",
    },
  ];

  const items: string[] = [
    "딸기 라떼",
    "말차 라떼",
    "망고 쉐이크",
    "아이스 아메리카노",
    "아인슈페너",
    "달고나 라떼",
  ];

  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 py-8 justify-items-center">
        {/* {itemImages.map((item, index) => (
        <li
          className="relative group overflow-hidden rounded-lg shadow-lg"
          key={index}
        >
          <Image src={item.src} alt={item.alt} className="w-full h-auto" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-center px-4">{item.desc}</p>
          </div>
        </li>
      ))} */}
        {items.map((item, index) => (
          <li
            className="relative group overflow-hidden rounded-lg shadow-lg w-[130px] h-[200px] p-6"
            key={index}
          >
            <div className="">{item}</div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MonthlyBestMenu;
