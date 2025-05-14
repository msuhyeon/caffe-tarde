import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";

type BannerItem = {
  src: string;
  alt: string;
  link?: string;
};

const CustomCarousel = () => {
  const carouselImages: BannerItem[] = [
    {
      src: "/images/main_banner_01.png",
      alt: "신메뉴 출시 라떼 PC 배너 이미지",
      link: "/menu/new",
    },
    {
      src: "/images/main_banner_02.png",
      alt: "이달의 이벤트 PC 배너 이미지",
      link: "/event",
    },
    {
      src: "/images/main_banner_03.png",
      alt: "신메뉴 출시 제주 말차 PC 배너 이미지",
      link: "/event",
    },
  ];

  return (
    <Carousel className="w-full py-[80px]">
      <CarouselContent>
        {carouselImages.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={1920}
              height={580}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CustomCarousel;
