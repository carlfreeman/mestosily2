// components/SectionWithListAndCarousel.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SectionWithListAndCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItems = [
    { 
      id: 1, 
      title: "Таруса", 
      subtitle: "В 10 км – уютный город с музеями, кафе и речными прогулками до Поленово",
      image: "/images/tarusa.webp"
    },
    { 
      id: 2, 
      title: "Культурный досуг", 
      subtitle: "Мастер-классы, концерты и душевная атмосфера старинного русского купеческого городка",
      image: "/images/culture.webp"
    },
    { 
      id: 3, 
      title: "Конный клуб", 
      subtitle: "На машине до 5 минут -  можно устроить семейную прогулку",
      image: "/images/horse.webp"
    },
    { 
      id: 4, 
      title: "Ферма с альпаками", 
      subtitle: "Всегда можно приехать, погулять и покормить чудесных животных",
      image: "/images/alpaka.webp"
    },
    { 
      id: 5, 
      title: "Парк Русский", 
      subtitle: "На машине до 30 минут",
      image: "/images/russian.webp"
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
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Левый блок: список */}
          <div className="lg:w-1/2">
          <div className="flex flex-col">
            <h2 className="font-ctetb text-2xl text-center text-primary">Удобства на территории</h2>
            <div className="justify-center bg-accent w-60 ml-20 mr-20 p-[2px] mb-7"></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Дом на 8–10 человек", 
                "4 уютные спальни", 
                "Cветлая гостиная с панорамными окнами", 
                "Полностью оборудованная кухня",
                "2 санузла, ГВС",
                "Зеленая зона",
                "Баня на дровах",
                "Просторная терраса с красивым видом",
                "Мангальная зона",
                "Wi-Fi и Smart-TV"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-light p-2 rounded-full mr-3 mt-1">
                    <svg className="w-5 h-5 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="font-georgia text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Правый блок: карусель */}
          <div className="lg:w-1/2">
            <h2 className="font-ctetb text-2xl text-center text-primary mb-8">Интересные места в округе</h2>
            <div className="relative overflow-hidden rounded-xl h-96">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="font-ctetb text-xl">{item.title}</h3>
                    <p className="font-georgia opacity-75 mb-3">{item.subtitle}</p>
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
        </div>
      </div>
    </section>
  );
}