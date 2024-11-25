import withTransition from "../utils/withTransition";
import backgroundImg from "../assets/section-4-bg.png";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
type PiercSectionProps = {};

const PiercSection = (props: PiercSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div
			className="min-h-screen w-screen bg-black bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			{isNavBarVisible ? (
				<NavBar
					theme="light"
					navbarBackground="bg-opacity-80"
					backgroundImage={backgroundImg}
				/>
			) : (
				<MobileNavBar
					theme="light"
					navbarBackground="bg-opacity-80"
					backgroundImage={backgroundImg}
				/>
			)}

			<div className="w-[75%] m-auto xl:top-[20%] relative py-44 md:py-48 h-[75%] flex flex-col text-primary-light">
				<p className="xxl:text-2xl text-xl pb-24">
					Aenean fermentum risus id tortor. Itaque earum rerum hic tenetur a
					sapiente delectus, ut aut reiciendis voluptatibus maiores alias
					consequatur aut perferendis doloribus asperiores repellat. Nullam
					dapibus fermentum ipsum. Praesent vitae arcu tempor neque lacinia
					pretium. Aliquam id dolor.
				</p>
				<p className="xxl:text-2xl text-xl pb-24">
					Aenean fermentum risus id tortor. Itaque earum rerum hic tenetur a
					sapiente delectus, ut aut reiciendis voluptatibus maiores alias
					consequatur aut perferendis doloribus asperiores repellat. Nullam
					dapibus fermentum ipsum. Praesent vitae arcu tempor neque lacinia
					pretium. Aliquam id dolor.
				</p>
				<p className="xxl:text-2xl text-xl pb-24">
					Aenean fermentum risus id tortor. Itaque earum rerum hic tenetur a
					sapiente delectus, ut aut reiciendis voluptatibus maiores alias
					consequatur aut perferendis doloribus asperiores repellat. Nullam
					dapibus fermentum ipsum. Praesent vitae arcu tempor neque lacinia
					pretium. Aliquam id dolor.
				</p>
			</div>
		</div>
	);
};

export default withTransition(PiercSection);
