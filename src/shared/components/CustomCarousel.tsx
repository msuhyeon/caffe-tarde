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
      alt: "신메뉴 출시",
      link: "/menu/new",
    },
    {
      src: "/images/main_banner_02.png",
      alt: "이달의 이벤트",
      link: "/event",
    },
  ];

  return (
    <Carousel className="w-full">
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
