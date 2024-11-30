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
				className={`flex w-[75%] m-auto gap-12 xxl:gap-14 h-full justify-center 						items-center ${
					isAboveMediumScreen ? "flex-row pt-8" : "flex-col pt-28 gap-8"
				}`}
			>
				<motion.div
					transition={{ duration: 0.6, delay: 0.3 }}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					className={`flex basis-1/2 justify-center items-center pt-9																${isAboveMediumScreen ? "" : "pt-40"} `}
				>
					<img
						src={portrait}
						alt="portrait of me"
						className="sm:w-[90%] sm:max-w-[600px] h-auto max-h-[75vh] object-									contain"
					/>
				</motion.div>
				<motion.div
					transition={{ duration: 0.6, delay: 0.3 }}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					className={`flex flex-col gap-8 pt-9 basis-1/2 max-w-[600px] 														${isAboveMediumScreen ? "text-left" : "max-w-[550px]"}`}
				>
					<H1Text theme="dark">O mně</H1Text>
					<p className="xxl:text-2xl text-xl sm:pb-0 pb-24">
						Ahoj, jmenuji se Kateřina Lalíková, je mi 22 let a vítám tě v Amen
						Studiu v Ostravě! Mým snem vždy bylo mít vlastní kosmetický salon, a
						po téměř pěti letech praxe v oboru kosmetiky a piercingu se tento
						sen stal skutečností. V mém studiu kladu důraz na osobní a
						profesionální přístup, protože si nesmírně vážím každého klienta,
						který mi svěří svou důvěru. V Amen Studiu ti nabízím širokou škálu
						služeb – od úpravy obočí a řas až po moderní piercingy, které ti
						pomohou vyjádřit tvou jedinečnou osobnost. Každé návštěvě věnuji
						maximální pozornost a společně probereme, co pro tebe bude nejlepší.
						Věř mi, že společně dokážeme i to, co se zdá být nemožné. Mým cílem
						je, abys odcházel/a nejen s dokonalým výsledkem, ale také s pocitem
						jistoty a spokojenosti ve svých rozhodnutích.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default withTransition(AboutSection);
