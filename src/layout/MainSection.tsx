import withTransition from "../utils/withTransition";

// import background from "../assets/bg-main-section.png";
import background from "../assets/bg-main-version-3.jpeg";
import NavBar from "../components/NavBar";
import useMediaQuery from "../utils/useMediaQuery";
import MobileNavBar from "../components/MobileNavBar";

const MainSection = () => {
  const isNavBarVisible = useMediaQuery("(min-width: 1250px)");
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center xl:bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <div className="relative h-dvh w-dvw">
        {isNavBarVisible ? (
          <NavBar theme="light" />
        ) : (
          <MobileNavBar theme="light" />
        )}

        <div className="absolute bottom-10 mb-10 flex w-full flex-col items-center uppercase text-primary-light sm:bottom-32">
          <h1 className="mb-0 font-cormorant text-8xl font-thin sm:text-9xl md:text-[10rem] lg:text-[12rem] xxl:text-[14rem]">
            amen
          </h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl xxl:text-4xl">
            studio ostrava
          </h3>
        </div>
      </div>
    </div>
  );
};

export default withTransition(MainSection);
