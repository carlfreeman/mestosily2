import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 transition-transform duration-700"
        style={{
        //   transform: `translateY(${scrollPosition * 0.5}px)`,
          opacity: 1 - Math.min(scrollPosition / 600)
        }}
      >
      <Image
        await="true"
        src="/images/header-bg.webp"
        alt="Фон шапки"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      </div>
      <div 
        className="absolute inset-0 w-screen justify-center bg-black/20 transition-opacity ease-in duration-700"
        style={{ opacity: 1 - Math.min(scrollPosition / 300, 1) }}
      ></div>
      <div 
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
        style={{ opacity: 1 - Math.min(scrollPosition / 300, 1) }}
      >
        <h1 className="text-7xl md:text-9xl text-white font-loreley font-semibold text-center px-4">
          Место Силы
        </h1>
      </div>
    </header>
  );
}