// components/SectionWithListAndCarousel.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SectionWithListAndCarousel({ 
    imageLeft = true, 
    title, 
    children,
    bgRev = false
  }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItems = [
    { 
      id: 1, 
      title: "Гостиная",
      image: "/images/dining.webp"
    },
    { 
      id: 2, 
      title: "Кухня",
      image: "/images/kitchen.webp"
    },
    { 
      id: 3, 
      title: "Комната",
      image: "/images/room1.webp"
    },
    { 
      id: 4, 
      title: "Комната",
      image: "/images/room2.webp"
    },
    { 
      id: 5, 
      title: "Комната",
      image: "/images/1party.webp"
    },
    { 
      id: 6, 
      title: "Баня",
      image: "/images/banya.webp"
    },
    { 
      id: 7, 
      title: "Природа",
      image: "/images/nature1.webp"
    },
    { 
      id: 8, 
      title: "Природа",
      image: "/images/nature2.webp"
    },
    { 
      id: 9, 
      title: "Природа",
      image: "/images/nature3.webp"
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-16 px-4 bg-transparent ${bgRev ? 'bg-gradient-to-r from-transparent to-gray-100' : 'bg-gradient-to-r from-gray-100 to-transparent'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Левый блок: карусель */}
          <div className="lg:w-1/2 md:w-1/1">
            <div className="relative overflow-hidden rounded-xl h-150">
              {carouselItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                    index === activeSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      quality={90}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {carouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === activeSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Перейти к слайду ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Текст */}
          <div className={`md:w-1/2 ${imageLeft ? '' : 'md:order-1'}`}>
            <h2 className="font-ctetb text-primary text-3xl mb-6">{title}</h2>
            <div className="font-georgia text-text text-3x1">
              {children}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}