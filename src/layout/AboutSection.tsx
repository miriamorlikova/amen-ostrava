import withTransition from "../utils/withTransition";
import NavBar from "../components/NavBar";
import useMediaQuery from "../utils/useMediaQuery";
import H1Text from "../components/H1Text";
import portrait from "../assets/photo-about-section.png";
import MobileNavBar from "../components/MobileNavBar";
import { motion } from "framer-motion";

type AboutSectionProps = {};

const AboutSection = (props: AboutSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");
	return (
		<div className="min-h-screen w-screen bg-primary-light flex flex-col">
			{isNavBarVisible ? (
				<NavBar
					navbarBackground="bg-primary-light bg-opacity-[90%]"
					theme="dark"
				/>
			) : (
				<MobileNavBar
					theme="dark"
					navbarBackground="bg-primary-light bg-opacity-[90%]"
				/>
			)}
			<div
				className={`flex w-[75%] m-auto gap-12 xxl:gap-14 h-full justify-center items-center ${
					isAboveMediumScreen ? "flex-row" : "flex-col"
				}`}
			>
				<motion.div
					transition={{ duration: 0.6, delay: 0.3 }}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					className={`flex basis-1/2 justify-center items-center ${isAboveMediumScreen ? "" : "pt-40"} `}
				>
					<img
						src={portrait}
						alt="portrait of me"
						className="sm:w-[90%] sm:max-w-[600px] h-auto max-h-[75vh] object-contain"
					/>
				</motion.div>
				<motion.div
					transition={{ duration: 0.6, delay: 0.3 }}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					className={`flex flex-col gap-6 basis-1/2 max-w-[600px] ${isAboveMediumScreen ? "text-left" : "max-w-[550px]"}`}
				>
					<H1Text theme="dark">O mně</H1Text>
					<p className="xxl:text-2xl text-xl pb-24">
						Aenean fermentum risus id tortor. Itaque earum rerum hic tenetur a
						sapiente delectus, ut aut reiciendis voluptatibus maiores alias
						consequatur aut perferendis doloribus asperiores repellat. Nullam
						dapibus fermentum ipsum. Praesent vitae arcu tempor neque lacinia
						pretium. Aliquam id dolor.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default withTransition(AboutSection);
