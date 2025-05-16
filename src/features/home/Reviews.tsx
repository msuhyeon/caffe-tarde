import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


type Reviews = {
    profileUrl: string;
    rate: number;
    contents: string;
}

const Reviews = () => {
  return (
    <section className="p-5">
      <h2>따르데 후기</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3"></CarouselItem>
          <CarouselItem className="basis-1/3"></CarouselItem>
          <CarouselItem className="basis-1/3"></CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Reviews;
