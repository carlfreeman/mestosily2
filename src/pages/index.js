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
  const pageTitle = "Место Силы в Тарусе";
  const pageDescription = "Теплый дом на берегу реки Таруса для отдыха с семьей и друзьями. Пет-френдли, баня, мангал, охраняемая территория.";
  const canonicalUrl = "https://mestosily-tarusa.ru";
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/images/og-image.webp`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${canonicalUrl}/images/twitter-image.webp`} />

        // <meta name="yandex-verification" content="Ваш_код" />
        // <meta name="google-site-verification" content="Ваш_код" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Vacation",
            "name": "Место Силы",
            "description": "${pageDescription}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Таруса",
              "addressRegion": "Калужская область",
              "postalCode": "249105",
              "streetAddress": "село Лопатино"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "54.737508",
              "longitude": "37.031054"
            }
          }
          `}
        </script>
      </Head>

      <Header />

      {/* Секция 1: текст по центру */}
      <section className="py-20 px-4 h-screen content-center">
        <div className="container mx-auto max-w-3x1 md:max-w-5xl">
          <p className="font-ctetb text-3xl md:text-4xl text-justify text-primary leading-relaxed">
            Приглашаем Вас в наш теплый и просторный дом для круглогодичного проживания на берегу реки Таруса. Здесь, на опушке леса, атмосфера покоя и уюта – идеальное место, чтобы отдохнуть от суеты в кругу близких.
          </p>
        </div>
      </section>

      {/* Секция 2: фото слева, текст справа */}
      <SectionWithTextAndCarousel 
        imageLeft={true}
        title="У нас празднуют"
      >
        <p className="font-georgia text-justify text-lg">
          Приготовьтесь к незабываемым праздникам! Дом идеально подходит для больших встреч с друзьями и семьей. Уютные комнаты, просторная гостиная с камином и красивым видом из окон и праздничная атмосфера сделают Ваш Новый год (или любой другой праздник) по-настоящему особенным!
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
          Не оставляйте любимцев дома! В нашем доме рады не только Вам, но и Вашим питомцам. Большая территория подойдет для выгула любых пушистых (и не очень) зверушек. Ваш питомец будет в восторге!
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
            Это место, где время течёт медленно, а каждый день наполнен простыми радостями. Приезжайте отдыхать в любое время года – здесь всегда Вам рады!
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