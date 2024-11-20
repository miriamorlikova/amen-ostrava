import withTransition from "../utils/withTransition";
import backgroundImg from "../assets/section-4-bg.png";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
type PiercSectionProps = {};

const PiercSection = (props: PiercSectionProps) => {
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div
			className=" h-screen w-screen bg-primary-dark bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			{isNavBarVisible && (
				<div className="bg-primary-light">
					<NavBar
						theme="light"
						navbarBackground="opacity-80"
						backgroundImage={backgroundImg}
					/>
				</div>
			)}
			<div className="flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center"></div>
		</div>
	);
};

export default withTransition(PiercSection);
