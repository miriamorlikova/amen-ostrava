import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";

import NavBar from "../components/NavBar";
import MotionDiv from "../components/MotionDiv";
import MobileNavBar from "../components/MobileNavBar";
import H1Text from "../components/H1Text";

import eyebrowImg from "../assets/section-3-image.png";

const BrowSection = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
  const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

  return (
    <div className="flex min-h-screen w-screen flex-col bg-beige">
      {isNavBarVisible ? (
        <NavBar navbarBackground="bg-beige bg-opacity-[90%]" theme="dark" />
      ) : (
        <MobileNavBar
          theme="dark"
          navbarBackground="bg-beige bg-opacity-[90%]"
        />
      )}
      <div
        className={`relative top-[15%] m-auto flex h-[75%] w-[75%] items-center justify-center gap-10 xxl:gap-14 ${isAboveMediumScreen ? "flex-row" : "flex-col sm:pt-10"}`}
      >
        <MotionDiv
          isAnimatedFrom="left"
          className={`flex max-w-[600px] basis-1/2 flex-col gap-6 ${isAboveMediumScreen ? "text-right" : "max-w-[500px] pt-44 sm:pt-0"}`}
        >
          <H1Text theme="dark">brow lamination</H1Text>
          <p
            className={`text-xl xxl:text-2xl ${isAboveMediumScreen ? "text-right" : "text-xl"}`}
          >
            Laminace obočí je kosmetický proces zaměřený na úpravu tvaru obočí a
            zlepšení jeho vzhledu. Cílem je zpevnit, zvýraznit a přirozeně
            vytvarovat obočí. Výsledek laminace vydrží obvykle 6 až 8 týdnů, v
            závislosti na růstu a typu chloupků. Tento zákrok je ideální pro
            osoby s řídkým nebo nepoddajným obočím, protože pomáhá dosáhnout
            plného a upraveného vzhledu bez nutnosti každodenního líčení.
            Nemusíš se obávat, že bude obočí příliš tmavé, vždy si dávám záležet
            na tom, aby obočí působilo přirozeně a dokonale ladilo s tvým
            celkovým vzhledem.
          </p>
        </MotionDiv>

        <MotionDiv
          isAnimatedFrom="right"
          className="flex basis-1/2 items-center justify-center pb-24 pt-12 sm:pb-0 sm:pt-0"
        >
          <img
            src={eyebrowImg}
            alt="eyebrow lamination"
            className="h-auto max-h-[75vh] object-contain sm:w-[90%] sm:max-w-[600px]"
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default withTransition(BrowSection);
