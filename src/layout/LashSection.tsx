import React from "react";
import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import H1Text from "../components/H1Text";
import lashLiftingImg from "../assets/section-5-image.png";

type LashSectionProps = {};

const LashSection = (props: LashSectionProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1250px)");

  return (
    <div className=" h-screen w-screen bg-primary-light">
      {isAboveMediumScreen && <NavBar theme="dark" />}
      <div
        className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
      >
        <div className="flex basis-1/2 max-w-[700px]">
          <img src={lashLiftingImg} alt="lash lifting" />
        </div>
        <div className="flex flex-col gap-6 basis-1/2 max-w-[700px]">
          <H1Text theme="dark">Lash lifting</H1Text>
          <p className="xxl:text-2xl text-xl ">
            Donec iaculis gravida nulla. Sed vel lectus. Donec odio tempus
            molestie, porttitor ut, iaculis quis, sem. Aenean id metus id velit
            ullamcorper pulvinar. Neque porro quisquam est, qui dolorem ipsum
            quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Et harum quidem rerum facilis est et
            expedita distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withTransition(LashSection);
