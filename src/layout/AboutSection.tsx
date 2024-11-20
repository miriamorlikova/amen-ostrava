import withTransition from "../utils/withTransition";
import NavBar from "../components/NavBar";
import useMediaQuery from "../utils/useMediaQuery";
import H1Text from "../components/H1Text";
import portrait from "../assets/photo-about-section.png";
import MobileNavBar from "../components/MobileNavBar";

type AboutSectionProps = {};

const AboutSection = (props: AboutSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1000px)");

	return (
		<div className="min-h-screen py-24 sm:py-0 w-screen bg-primary-light">
			{isAboveMediumScreen ? (
				<NavBar
					navbarBackground="bg-primary-light bg-opacity-[90%]"
					theme="dark"
				/>
			) : (
				<MobileNavBar theme="dark" />
			)}
			<div
				className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative sm:top-[15%] h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
			>
				<div className="flex basis-1/2 justify-center items-center">
					<img
						src={portrait}
						alt="portrait of me"
						className="sm:w-[90%] sm:max-w-[600px] pt-14 h-auto max-h-[75vh] object-contain"
					/>
				</div>
				<div className="flex flex-col gap-6 basis-1/2 max-w-[700px]">
					<H1Text theme="dark">O mně</H1Text>
					<p className="xxl:text-2xl text-xl">
						Aenean fermentum risus id tortor. Itaque earum rerum hic tenetur a
						sapiente delectus, ut aut reiciendis voluptatibus maiores alias
						consequatur aut perferendis doloribus asperiores repellat. Nullam
						dapibus fermentum ipsum. Praesent vitae arcu tempor neque lacinia
						pretium. Aliquam id dolor.
					</p>
				</div>
			</div>
		</div>
	);
};

export default withTransition(AboutSection);
