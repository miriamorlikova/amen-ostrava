import H1Text from "../components/H1Text";
import NavBar from "../components/NavBar";
import useMediaQuery from "../utils/useMediaQuery";
import withTransition from "../utils/withTransition";
import contactImg from "../assets/section-7-image.png";
import instagramLogo from "../assets/instagram-logo.png";
import emailLogo from "../assets/email-logo.png";
import adressLogo from "../assets/adress-logo.png";

type ContactSectionProps = {};

const ContactSection = (props: ContactSectionProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1250px)");

  return (
    <div className=" h-screen w-screen bg-brown">
      {isAboveMediumScreen && <NavBar theme="dark" />}
      <div
        className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
      >
        <div className="flex basis-1/2 max-w-[700px]">
          <img src={contactImg} alt="my salon" />
        </div>
        <div className="flex flex-col gap-6 basis-1/2 max-w-[700px]">
          <H1Text theme="dark">kontakt</H1Text>
          <p className="text-xl xxl:text-2xl">
            V případě zájmu o volný termín nebo v případě otázek mě prosím
            kontaktujte přes Instagram, který je uveden níže.
          </p>
          {/* INSTAGRAM */}
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex gap-4 items-center">
              <img
                src={instagramLogo}
                className="h-16 w-16 xxl:h-20 xxl:w-20"
              />
              <p className="xxl:text-4xl xl:text-3xl text-2xl">
                amen_studio_ostrava
              </p>
            </div>
            {/* EMAIL */}
            <div className="flex gap-4 items-center">
              <img src={emailLogo} className="h-16 w-16 xxl:h-20 xxl:w-20" />
              <p className="xxl:text-4xl xl:text-3xl text-2xl">
                randomemail@gmail.com
              </p>
            </div>
            {/* ADRESS */}
            <div className="flex gap-4 items-center">
              <img src={adressLogo} className="h-16 w-16 xxl:h-20 xxl:w-20" />
              <p className="xxl:text-4xl xl:text-3xl text-2xl">
                amen_studio_ostrava
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTransition(ContactSection);
