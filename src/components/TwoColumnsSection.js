// components/TwoColumnsSection.js
import Image from 'next/image';

export default function TwoColumnsSection({ 
  imageLeft = true, 
  title, 
  children,
  bgRev = false,
  imageSrc
}) {
  return (
    <section className={`py-16 px-4 bg-transparent ${bgRev ? 'bg-gradient-to-r from-transparent to-gray-100' : 'bg-gradient-to-r from-gray-100 to-transparent'}`}>
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
        <div className={`w-full md:w-1/2 mb-10 md:mb-0 ${imageLeft ? 'md:pr-8' : 'md:pl-8 order-2'}`}>
          <div className="relative w-full h-96 rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              quality={90}
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Текст */}
        <div className={`md:w-1/2 ${imageLeft ? '' : 'md:order-1'}`}>
        <div className="flex flex-col">
          <h2 className="font-ctetb text-primary text-3xl mb-6">{title}</h2>
          <div className="justify-center bg-accent w-60 p-[2px] mb-7"></div></div>
          <div className="font-georgia text-text text-lg">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}