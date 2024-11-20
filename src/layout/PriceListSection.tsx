import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import backgroundImg from "../assets/section-6-bg.png";
import PriceItem from "../components/PriceItem";

type PriceListSectionProps = {};

const PriceListSection = (props: PriceListSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div
			className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			{isNavBarVisible && (
				<NavBar
					backgroundImage={backgroundImg}
					navbarBackground="opacity-80"
					theme="light"
				/>
			)}
			<div className={`w-[75%] m-auto xl:top-[20%] relative py-[10%] h-[75%]`}>
				<PriceItem
					heading="Laminace obočí"
					description="laminování, barvení, celková úprava a výživa, vosk, na závěr hydratace pokožky"
					price="1099,-"
				/>

				<PriceItem
					heading="Celková úprava obočí"
					description="vytvarování, barvení, stínování, stříhání, fixace, vosk, na závěr hydratace pokožky"
					price="799,-"
				/>
				<PriceItem
					heading="Lash lifting"
					description="laminace řas, barvení, výživa"
					price="1199,-"
				/>
				<PriceItem
					heading="Úprava obočí bez barvy"
					description="čištění, vytvarování, stříhání, hydratace obočí"
					price="299,-"
				/>

				<PriceItem heading="Odstranění umělých řas" price="299,-" />
				<PriceItem heading="Barvení řas + výživa" price="299,-" />
				<PriceItem
					heading="Všechny druhy piercingů"
					description="konkrétní druhy piercingů jsou více popsané na stránce s názvem Piercings"
					price="699,-"
				/>
				<PriceItem
					heading="Piercing bradavky (nipple piercing)"
					price="849,-"
				/>
			</div>
		</div>
	);
};
export default withTransition(PriceListSection);
