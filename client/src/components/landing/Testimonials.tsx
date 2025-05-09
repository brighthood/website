import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    text: "This platform helped me land my first developer job. The projects were real-world, the mentorship was top-tier, and the experience was game-changing.",
    name: "Sarah Johnson",
    role: "Frontend Developer at TechNova",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "testimonial-2",
    text: "I've taken several courses before, but nothing came close to the structure and guidance I received here. It’s perfect for career switchers.",
    name: "James Lee",
    role: "Software Engineer at DevSphere",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "testimonial-3",
    text: "The community, the hands-on approach, and the constant updates to modern tech stacks made it easy to stay current and relevant in my field.",
    name: "Amina Rahman",
    role: "Full-Stack Engineer at CloudCore",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
  },
];


const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-16">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="container flex flex-col items-center text-center">
                <p className="mb-8 max-w-4xl font-medium md:px-8 lg:text-3xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <Avatar className="mb-2 size-12 md:size-24">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name}</AvatarFallback>
                </Avatar>
                <p className="mb-1 text-sm font-medium md:text-lg">
                  {testimonial.name}
                </p>
                <p className="mb-2 text-sm text-muted-foreground md:text-lg">
                  {testimonial.role}
                </p>
                <div className="mt-2 flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="container flex justify-center py-16">
        {testimonials.map((testimonial, index) => (
          <Button
            key={testimonial.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              api?.scrollTo(index);
            }}
          >
            <div
              className={`size-2.5 rounded-full ${index === current ? "bg-primary" : "bg-input"}`}
            />
          </Button>
        ))}
      </div>
    </section>
  );
};

export { Testimonial };
