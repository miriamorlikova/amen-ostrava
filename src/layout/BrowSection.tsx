import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import H1Text from "../components/H1Text";
import eyebrowImg from "../assets/section-3-image.png";
import { motion } from "framer-motion";
import MobileNavBar from "../components/MobileNavBar";
type BrowSectionProps = {};

const BrowSection = (props: BrowSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div className="min-h-screen w-screen bg-beige flex flex-col">
			{isNavBarVisible ? (
				<NavBar navbarBackground="bg-beige bg-opacity-[90%]" theme="dark" />
			) : (
				<MobileNavBar
					theme="dark"
					navbarBackground="bg-beige bg-opacity-[90%]"
				/>
			)}
			<div
				className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
			>
				<motion.div
					transition={{ duration: 0.6, delay: 0.3 }}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					className={`flex flex-col gap-6 basis-1/2 max-w-[600px] ${isAboveMediumScreen ? "text-right" : "pt-44 sm:pt-0 max-w-[500px]"}`}
				>
					<H1Text theme="dark">brow lamination</H1Text>
					<p
						className={`xxl:text-2xl text-xl ${isAboveMediumScreen ? "text-right" : "text-xl"}`}
					>
						Donec iaculis gravida nulla. Sed vel lectus. Donec odio t tempus
						molestie, porttitor ut, iaculis quis, sem. Aenean id metus id velit
						ullamcorper pulvinar. Neque porro quisquam est, qui dolorem ipsum
						quia dolor sit amet, consectetur, adipisci velit, sed quia non
						numquam eius modi tempora incidunt ut labore et dolore magnam
						aliquam quaerat voluptatem. Et harum quidem rerum facilis est et
						expedita distinctio.
					</p>
				</motion.div>

				<motion.div
					transition={{ duration: 0.6, delay: 0.3 }}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					className="flex basis-1/2 justify-center items-center pt-12 pb-24"
				>
					<img
						src={eyebrowImg}
						alt="eyebrow lamination"
						className="sm:w-[90%] sm:max-w-[600px] h-auto max-h-[75vh] object-contain"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default withTransition(BrowSection);
