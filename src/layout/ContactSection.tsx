import useMediaQuery from "../utils/useMediaQuery";
import withTransition from "../utils/withTransition";

import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import MotionDiv from "../components/MotionDiv";
import H1Text from "../components/H1Text";
import ContactItem from "../components/ContactItem";

import contactImg from "../assets/section-7-image-version-1.jpeg";
import instagramLogo from "../assets/insta-logo.png";
import emailLogo from "../assets/mail-logo.png";
import adressLogo from "../assets/adress-logo.png";

const ContactSection = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
  const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

  return (
    <div className="flex min-h-screen w-screen flex-col bg-brown">
      {isNavBarVisible ? (
        <NavBar navbarBackground="bg-brown bg-opacity-[90%]" theme="dark" />
      ) : (
        <MobileNavBar
          theme="dark"
          navbarBackground="bg-brown bg-opacity-[90%]"
        />
      )}
      <div
        className={`relative top-[15%] m-auto flex h-[75%] w-[75%] items-center justify-center gap-10 xxl:gap-14 ${isAboveMediumScreen ? "flex" : "flex-col"}`}
      >
        <MotionDiv
          isAnimatedFrom="left"
          className={`flex basis-1/2 items-center justify-center ${isAboveMediumScreen ? "" : "pt-44"} `}
        >
          <img
            src={contactImg}
            alt="my salon"
            className="h-auto max-h-[75vh] object-contain sm:max-w-[600px]"
          />
        </MotionDiv>

        <MotionDiv
          isAnimatedFrom="right"
          className={`flex max-w-[600px] basis-1/2 flex-col gap-6 ${isAboveMediumScreen ? "text-left" : "max-w-[500px]"}`}
        >
          <H1Text theme="dark">kontakt</H1Text>
          <p className="text-xl xxl:text-2xl">
            V případě zájmu o volný termín nebo v případě otázek mě prosím
            kontaktujte přes Instagram, který je uveden níže.
          </p>
          {/* INSTAGRAM */}
          <div
            className={`mt-6 flex flex-col gap-6 ${isAboveMediumScreen ? "pb-0" : "pb-24"}`}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/amen_studio_ostrava/"
            >
              <ContactItem src={instagramLogo}>amen_studio_ostrava</ContactItem>
            </a>
            <a href="mailto:katy2242@seznam.cz">
              <ContactItem src={emailLogo}>katy2242@seznam.cz</ContactItem>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Amen+Studio+Ostrava/@49.8360246,18.2768784,17z/data=!3m1!4b1!4m6!3m5!1s0x4713e39c3a93f99f:0xfa9da1c52f37768d!8m2!3d49.8360246!4d18.2768784!16s%2Fg%2F11kpk1xlky?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
            >
              <ContactItem src={adressLogo}>
                Hornopolní 933/36, 702 00 Moravská Ostrava a Přívoz
              </ContactItem>
            </a>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default withTransition(ContactSection);
