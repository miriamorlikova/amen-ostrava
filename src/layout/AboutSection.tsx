import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";

import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import MotionDiv from "../components/MotionDiv";
import H1Text from "../components/H1Text";

import portrait from "../assets/photo-about-section.png";

const AboutSection = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
  const isNavBarVisible = useMediaQuery("(min-width: 1250px)");
  return (
    <div className="flex min-h-screen w-screen flex-col bg-primary-light">
      {isNavBarVisible ? (
        <NavBar
          navbarBackground="bg-primary-light bg-opacity-[90%]"
          theme="dark"
        />
      ) : (
        <MobileNavBar
          theme="dark"
          navbarBackground="bg-primary-light bg-opacity-[90%]"
        />
      )}
      <div
        className={`m-auto flex h-full w-[75%] items-center justify-center gap-12 pt-28 ${
          isAboveMediumScreen ? "flex-row" : "flex-col gap-8"
        }`}
      >
        <MotionDiv
          isAnimatedFrom="left"
          className={`flex basis-1/2 items-center justify-center pt-16 ${isAboveMediumScreen ? "" : ""} `}
        >
          <img
            src={portrait}
            alt="portrait of me"
            className="xxl:-px-5 h-auto w-full object-cover sm:max-w-[600px]"
          />
        </MotionDiv>
        <MotionDiv
          isAnimatedFrom="right"
          className={`flex max-w-[600px] basis-1/2 flex-col gap-8 pt-9 ${isAboveMediumScreen ? "text-left" : "max-w-[550px]"}`}
        >
          <H1Text theme="dark">O mně</H1Text>
          <p className="pb-24 text-xl sm:pb-0 xxl:text-2xl">
            Ahoj, jmenuji se Kateřina Lalíková, je mi 22 let a vítám tě v Amen
            Studiu v Ostravě! Mým snem vždy bylo mít vlastní kosmetický salon, a
            po téměř pěti letech praxe v oboru kosmetiky a piercingu se tento
            sen stal skutečností. V mém studiu kladu důraz na osobní a
            profesionální přístup, protože si nesmírně vážím každého klienta,
            který mi svěří svou důvěru. V Amen Studiu ti nabízím širokou škálu
            služeb – od úpravy obočí a řas až po moderní piercingy, které ti
            pomohou vyjádřit tvou jedinečnou osobnost. Každé návštěvě věnuji
            maximální pozornost a společně probereme, co pro tebe bude nejlepší.
            Věř mi, že společně dokážeme i to, co se zdá být nemožné. Mým cílem
            je, abys odcházel/a nejen s dokonalým výsledkem, ale také s pocitem
            jistoty a spokojenosti ve svých rozhodnutích.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
};

export default withTransition(AboutSection);
