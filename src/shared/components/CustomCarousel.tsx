import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

type BannerItem = {
  src: string;
  alt: string;
  link?: string;
};

const CustomCarousel = () => {
  const carouselImages: BannerItem[] = [
    { src: '/images/main_banner_01.png', alt: '라떼 출시', link: '/menu/new' },
    { src: '/images/main_banner_02.png', alt: '이달의 이벤트', link: '/event' },
    {
      src: '/images/main_banner_03.png',
      alt: '제주 말차 출시',
      link: '/event',
    },
  ];

  return (
    <Carousel className="w-full" plugins={[Autoplay({ delay: 4000 })]}>
      <CarouselContent>
        {carouselImages.map((item, index) => (
          <CarouselItem
            key={index}
            className="relative cursor-pointer aspect-[1920/580]"
          >
            {item.link ? (
              <Link href={item.link} className="block w-full h-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </Link>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={580}
                className="object-cover w-full h-full"
                priority
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 !p-8 [&>svg]:!h-8 [&>svg]:!w-8" />
      <CarouselNext className="right-4 !p-8 [&>svg]:!h-8 [&>svg]:!w-8" />
    </Carousel>
  );
};

export default CustomCarousel;
