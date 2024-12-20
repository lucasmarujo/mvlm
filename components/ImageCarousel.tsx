'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

import * as imagens from './../components/images';

const images = Object.values(imagens);

export function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (current === images.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-100 flex items-center justify-center gap-2">
        <Heart className="text-pink-300" />
        Um Pouco de Nós
        <Heart className="text-pink-300" />
      </h2>
      
      <Carousel className="w-full max-w-xl mx-auto" setApi={setApi}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative aspect-square w-full md:w-[400px] mx-auto overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Momento ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        
        <div className="py-2 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                current === index ? 'bg-pink-300' : 'bg-pink-100/50'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}