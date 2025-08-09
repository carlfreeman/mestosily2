// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import TwoColumnsSection from '../components/TwoColumnsSection';
import SectionWithListAndCarousel from '../components/SectionWithListAndCarousel';
import SectionWithTextAndCarousel from '../components/SectionWithTextAndCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Место Силы</title>
        <meta name="Приглашаем вас в наш теплый и просторный дом на берегу реки Таруса. Здесь, на опушке леса, атмосфера покоя и уюта – идеальное место, чтобы отдохнуть от суеты в кругу близких." content="Место Силы" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Секция 1: текст по центру */}
      <section className="py-20 px-4 h-screen content-center">
        <div className="container mx-auto max-w-3x1 md:max-w-4xl">
          <p className="font-ctetb text-3xl md:text-4xl text-justify text-primary leading-relaxed">
            Приглашаем вас в наш теплый и просторный дом на берегу реки Таруса. Здесь, на опушке леса, атмосфера покоя и уюта – идеальное место, чтобы отдохнуть от суеты в кругу близких.
          </p>
        </div>
      </section>

      {/* Секция 2: фото слева, текст справа */}
      <SectionWithTextAndCarousel 
        imageLeft={true}
        title="У нас празднуют"
      >
        <p className="font-georgia text-justify text-lg">
          Приготовьтесь к незабываемым праздникам! Дом идеально подходит для больших встреч с друзьями и семьей. Просторные комнаты, уютный камин и праздничная атмосфера сделают ваш Новый год (или любой другой праздник) по-настоящему особенным!
        </p>
      </SectionWithTextAndCarousel>

      {/* Секция 3: текст слева, фото справа */}
      <TwoColumnsSection 
        imageLeft={false}
        title="Мы - пет-фрэндли"
        bgRev={true}
        imageSrc="/images/pet.webp"
      >
        <p className="font-georgia text-justify text-lg mb-4">
          Не оставляйте любимцев дома! В нашем доме рады не только вам, но и вашим питомцам. Большая территория подойдет для выгула любых пушистых (и не очень) зверушек. Дом приспособлен выдерживать одновременное пребывание даже нескольких зверушек. Ваш питомец будет в восторге!
        </p>
      </TwoColumnsSection>

      {/* Секция 4: фото слева, текст справа */}
      <TwoColumnsSection 
        imageLeft={true}
        title="У нас красиво"
        imageSrc="/images/beauty.webp"
      >
        <p className="font-georgia text-justify  text-lg mb-4">
          Откройте для себя уголок, где душа находит покой! Дом расположен на охраняемой территории площадью 3 гектара, окружен вековыми соснами и лиственными лесами, есть выход к реке.
        </p>
      </TwoColumnsSection>

      {/* Секция 5: фото слева, текст справа */}
      <TwoColumnsSection 
        imageLeft={false}
        title="Уникальное расположение"
        bgRev={true}
        imageSrc="/images/unique.webp"
      >
        <p className="font-georgia text-justify text-lg mb-4">
          Дом находится в тихом живописном месте на опушке леса на берегу реки Таруса.
          Грибы, ягоды, рыбалка, купание в реке, спуск на сапах - все для Вас!
          Если повезет, можно встретить косуль, они прогуливаются вдоль реки.
        </p>
        <p className="font-georgia text-lg mb-4">
          К дому ведет асфальтированная дорога, территория огорожена.
        </p>
      </TwoColumnsSection>

      {/* Секция 6: два блока - список и карусель */}
      <SectionWithListAndCarousel />

      {/* Секция 7: текст по центру */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <p className="font-ctetb text-2xl md:text-3xl text-justify text-primary leading-relaxed">
            Это место, где время течёт медленно, а каждый день наполнен простыми радостями. Приезжайте отдыхать в любое время года – здесь всегда вам рады!
          </p>
        </div>
      </section>

      <ContactForm />

      {/* Футер */}
      <Footer />

      {/* Плавающая кнопка */}
      <FloatingButton />
    </div>
  );
}