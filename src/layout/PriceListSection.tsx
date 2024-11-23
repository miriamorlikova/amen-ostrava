import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import backgroundImg from "../assets/section-6-bg.png";
import PriceItem from "../components/PriceItem";
import MobileNavBar from "../components/MobileNavBar";
import { motion } from "framer-motion";

type PriceListSectionProps = {};

const containerVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const PriceListSection = (props: PriceListSectionProps) => {
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div
			className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			{isNavBarVisible ? (
				<NavBar
					backgroundImage={backgroundImg}
					navbarBackground="bg-opacity-80"
					theme="light"
				/>
			) : (
				<MobileNavBar
					theme="light"
					backgroundImage={backgroundImg}
					navbarBackground="bg-opacity-80"
				/>
			)}
			<motion.div
				initial="initial"
				animate="animate"
				variants={containerVariants}
				className={`w-[75%]  m-auto xl:top-[20%] relative py-44 md:py-48 h-[75%] flex flex-col`}
			>
				<motion.div variants={itemVariants}>
					<PriceItem
						heading="Laminace obočí"
						description="laminování, barvení, celková úprava a výživa, vosk, na závěr hydratace pokožky"
						price="1099,-"
					/>
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem
						heading="Celková úprava obočí"
						description="vytvarování, barvení, stínování, stříhání, fixace, vosk, na závěr hydratace pokožky"
						price="799,-"
					/>
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem
						heading="Lash lifting"
						description="laminace řas, barvení, výživa"
						price="1199,-"
					/>
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem
						heading="Úprava obočí bez barvy"
						description="čištění, vytvarování, stříhání, hydratace obočí"
						price="299,-"
					/>
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem heading="Odstranění umělých řas" price="299,-" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem heading="Barvení řas + výživa" price="299,-" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem
						heading="Všechny druhy piercingů"
						description="konkrétní druhy piercingů jsou více popsané na stránce s názvem Piercings"
						price="699,-"
					/>
				</motion.div>
				<motion.div variants={itemVariants}>
					<PriceItem
						heading="Piercing bradavky (nipple piercing)"
						price="849,-"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};
export default withTransition(PriceListSection);
