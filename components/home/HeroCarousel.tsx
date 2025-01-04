import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "@/public/images/hero1.jpg";
import image2 from "@/public/images/hero2.jpg";
import image3 from "@/public/images/hero3.jpg";
import image4 from "@/public/images/hero4.jpg";
import Image from "next/image";

const images = [image1, image2, image3, image4];

function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt={`hero image ${index}`}
                    className="w-full h-[24rem] rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default HeroCarousel;
