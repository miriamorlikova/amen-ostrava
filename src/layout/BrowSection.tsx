import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import H1Text from "../components/H1Text";
import eyebrowImg from "../assets/section-3-image.png";
type BrowSectionProps = {};

const BrowSection = (props: BrowSectionProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1250px)");
  return (
    <div className=" h-screen w-screen bg-beige">
      {isAboveMediumScreen && <NavBar theme="dark" />}
      <div
        className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
      >
        <div className="flex flex-col items-end gap-6 basis-1/2 max-w-[700px]">
          <H1Text theme="dark">brow lamination</H1Text>
          <p className="xxl:text-2xl text-xl text-right">
            Donec iaculis gravida nulla. Sed vel lectus. Donec odio tempus
            molestie, porttitor ut, iaculis quis, sem. Aenean id metus id velit
            ullamcorper pulvinar. Neque porro quisquam est, qui dolorem ipsum
            quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Et harum quidem rerum facilis est et
            expedita distinctio.
          </p>
        </div>
        <div className="flex basis-1/2 max-w-[700px]">
          <img src={eyebrowImg} alt="eyebrow lamination" />
        </div>
      </div>
    </div>
  );
};

export default withTransition(BrowSection);
