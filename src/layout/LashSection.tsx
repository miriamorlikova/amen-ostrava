import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";

import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import MotionDiv from "../components/MotionDiv";
import H1Text from "../components/H1Text";

import lashLiftingImg from "../assets/section-5-image.png";

const LashSection = () => {
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
        className={`relative top-[15%] m-auto flex h-[75%] w-[75%] items-center justify-center gap-10 xxl:gap-14 ${isAboveMediumScreen ? "flex-row" : "flex-col"}`}
      >
        <MotionDiv
          isAnimatedFrom="left"
          className={`flex basis-1/2 items-center justify-center ${isAboveMediumScreen ? "" : "pt-44 sm:pt-10"} `}
        >
          <img
            src={lashLiftingImg}
            alt="lash lifting"
            className="h-auto max-h-[75vh] object-contain sm:w-[90%] sm:max-w-[600px]"
          />
        </MotionDiv>
        <MotionDiv
          isAnimatedFrom="right"
          className={`flex max-w-[600px] basis-1/2 flex-col gap-6 ${isAboveMediumScreen ? "text-left" : "max-w-[550px]"}`}
        >
          <H1Text theme="dark">Lash lifting</H1Text>
          <p className="pb-24 text-xl sm:pb-0 xxl:text-2xl">
            Lash lifting je kosmetický zákrok zaměřený na zvednutí a zvýraznění
            přirozených řas. Během této procedury se řasy pomocí speciálních
            přípravků a technik nadzvednou od kořínků, čímž vzniká efekt
            přirozeně natočených a plnějších řas. Proces je podobný trvalé,
            avšak využívají se jemnější produkty, které zajišťují bezpečnost a
            přirozený vzhled. Výsledek lash liftingu obvykle vydrží 6 až 8
            týdnů, v závislosti na rychlosti růstu řas. Jedná se o ideální
            řešení pro ty, kteří chtějí zvýraznit své řasy bez použití umělých
            řas nebo řasenky. V případě potřeby je možné efekt doplnit právě
            řasenkou.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
};

export default withTransition(LashSection);
