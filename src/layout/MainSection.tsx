import withTransition from "../utils/withTransition";

import Logo from "../components/Logo";
import background from "../assets/bg-main-section.png";
import NavBar from "../components/NavBar";
import useMediaQuery from "../utils/useMediaQuery";
type MainSectionProps = {};

const MainSection = (props: MainSectionProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1250px)");
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <div className="relative h-dvh w-dvw">
        {isAboveMediumScreen && <NavBar theme="light" />}
        <Logo theme="light" />
        <div className="text-primary-light uppercase absolute bottom-32 mb-10 flex flex-col items-center w-full">
          <h1 className="font-cormorant font-thin xl:text-[12rem] xxl:text-[14rem] mb-[-3.5rem]">
            amen
          </h1>
          <h3 className="xl:text-3xl xxl:text-4xl ">studio ostrava</h3>
        </div>
      </div>
    </div>
  );
};

export default withTransition(MainSection);
