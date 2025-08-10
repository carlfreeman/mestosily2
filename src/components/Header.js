// components/Header.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setScrollPosition(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 transition-transform duration-700 z-1"
        style={{
          // transform: `translateY(${scrollPosition * 0.5}px)`,
          opacity: 1 - Math.min(scrollPosition / 600, 0.8)
        }}>
        <Image
          src="/images/header-bg.webp"
          alt="Участок"
          fill
          className="object-cover"
          quality={100}
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      <div 
        className="absolute w-screen h-screen bg-black/35 z-3"
        style={{ 
          opacity: imageLoaded 
            ? 1 - Math.min(scrollPosition / 300, 1) 
            : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      ></div>
      
      {/* Текст заголовка */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-6"
        style={{ 
          opacity: imageLoaded 
            ? 1 - Math.min(scrollPosition / 300, 1) 
            : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <h1 className="text-8xl md:text-10xl font-bold text-white font-loreley text-center px-4 transition-all duration-1000 transform">
          Место Силы
        </h1>
      </div>
      
      {/* Индикатор загрузки */}
      {isClient && !imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-20">
          <div className="w-16 h-16 border-4 border-t-blue-100 border-r-blue-100 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </header>
  );
}