import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import { piercingData } from "../utils/piercingData";

import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import H1Text from "../components/H1Text";
import PiercingItem from "../components/PiercItem";
import MotionDiv from "../components/MotionDiv";

import backgroundImg from "../assets/section-4-bg.png";
import sandBackground from "../assets/sand-bg.png";
import whiteBackground from "../assets/white-texture-bg.png";
import blackBackground from "../assets/black-bg.png";

const PiercSection = () => {
  const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

  return (
    <>
      <div
        className="min-h-fit w-screen bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        {isNavBarVisible ? (
          <NavBar
            theme="light"
            navbarBackground="bg-opacity-80"
            backgroundImage={backgroundImg}
          />
        ) : (
          <MobileNavBar
            theme="light"
            navbarBackground="bg-opacity-80"
            backgroundImage={backgroundImg}
          />
        )}

        <MotionDiv
          isAnimatedFrom="left"
          className="relative m-auto flex w-[75%] flex-col pt-52 text-primary-light sm:pt-60 lg:pb-28 lg:pt-64 xl:top-[20%]"
        >
          <H1Text theme="light">Vítejte ve světě piercingu</H1Text>
          <p className="pt-6 text-xl xxl:text-2xl">
            Ve studiu nabízím širokou škálu piercingů – od jednoduchých ušních
            šperků až po složitější piercingy, které dokonale doplní váš vzhled
            a podtrhnou váš osobní styl. Každý piercing provádím s maximálním
            důrazem na bezpečnost, sterilitu a odborný přístup. Vždy se postarám
            o to, abyste se cítili pohodlně a sebevědomě.
          </p>
          <p className="pt-4 text-xl xxl:text-2xl">
            Kromě kvalitních piercingů poskytuji také odborné poradenství,
            abyste věděli, jak správně pečovat o svůj nový piercing a mohli si
            jeho krásu užívat bez obav. Mým cílem je, aby každý klient odcházel
            spokojený, s pocitem, že si vybral ten pravý šperk i vhodné
            umístění.
          </p>
          <p className="pb-10 pt-4 text-xl xxl:text-2xl">
            Ve studiu kladu důraz na individuální přístup ke každému
            zákazníkovi.
          </p>
          <div className="pb-24">
            <h2 className="font-cormorant text-3xl uppercase xxl:text-4xl">
              Piercingy v našem salonu
            </h2>
            <p className="pt-4 text-xl xxl:text-2xl">
              Pokud máte zájem o piercing, níže najdete přehled typů piercingů,
              které provádím. Pokud si nejste jistí, který piercing by pro vás
              byl ten pravý, ráda vám poradím při výběru. Společně můžeme
              probrat různé možnosti a vytvořit jedinečný návrh, například pro
              zdobení uší či jiných částí těla.
            </p>
          </div>
        </MotionDiv>
      </div>{" "}
      {/* Piercing uší */}
      <PiercingItem
        data={{
          icon: piercingData[0].icon,
          heading: piercingData[0].heading,
          types: piercingData[0].types,
        }}
        backgroundImage={`url(${sandBackground})`}
        textColor="text-primary-dark"
        iconColor="text-light-dark"
      />
      {/* Piercing obličeje */}
      <PiercingItem
        data={{
          icon: piercingData[1].icon,
          heading: piercingData[1].heading,
          types: piercingData[1].types,
        }}
        background="min-h-fit w-screen bg-cover bg-center bg-no-repeat"
        backgroundImage={`url(${whiteBackground})`}
        textColor="text-primary-dark"
        iconColor="text-dark-dark"
      />
      {/* Piercing těla */}
      <PiercingItem
        data={{
          icon: piercingData[2].icon,
          heading: piercingData[2].heading,
          types: piercingData[2].types,
        }}
        background="min-h-fit w-screen bg-cover bg-center bg-no-repeat"
        backgroundImage={`url(${blackBackground})`}
        textColor="text-primary-light"
        iconColor="text-primary-light"
      />
    </>
  );
};

export default withTransition(PiercSection);
