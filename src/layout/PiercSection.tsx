import withTransition from "../utils/withTransition";
import backgroundImg from "../assets/section-4-bg.png";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import H1Text from "../components/H1Text";
import { piercingData } from "../utils/piercingData";
import PiercingItem from "../components/PiercItem";
import Goldbackground from "../assets/backgroud-gold-v2.png";
type PiercSectionProps = {};

const PiercSection = (props: PiercSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<>
			<div
				className="min-h-fit w-screen bg-black bg-cover bg-center bg-no-repeat"
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

				<div className="w-[75%] m-auto xl:top-[20%] relative pt-52 sm:pt-60 lg:pt-64 lg:pb-28 sm-16 flex flex-col text-primary-light">
					<H1Text theme="light">Vítejte ve světě piercingu</H1Text>
					<p className="xxl:text-2xl text-xl pt-6">
						Ve studiu nabízím širokou škálu piercingů – od jednoduchých ušních
						šperků až po složitější piercingy, které dokonale doplní váš vzhled
						a podtrhnou váš osobní styl. Každý piercing provádím s maximálním
						důrazem na bezpečnost, sterilitu a odborný přístup. Vždy se postarám
						o to, abyste se cítili pohodlně a sebevědomě.
					</p>
					<p className="xxl:text-2xl text-xl pt-4">
						Kromě kvalitních piercingů poskytuji také odborné poradenství,
						abyste věděli, jak správně pečovat o svůj nový piercing a mohli si
						jeho krásu užívat bez obav. Mým cílem je, aby každý klient odcházel
						spokojený, s pocitem, že si vybral ten pravý šperk i vhodné
						umístění.
					</p>
					<p className="xxl:text-2xl text-xl pb-10 pt-4">
						Ve studiu kladu důraz na individuální přístup ke každému
						zákazníkovi.
					</p>
					<div className="pb-24">
						<h2 className="font-cormorant text-3xl xxl:text-4xl uppercase">
							Piercingy v našem salonu
						</h2>
						<p className="xxl:text-2xl text-xl pt-4">
							Pokud máte zájem o piercing, níže najdete přehled typů piercingů,
							které provádím. Pokud si nejste jistí, který piercing by pro vás
							byl ten pravý, ráda vám poradím při výběru. Společně můžeme
							probrat různé možnosti a vytvořit jedinečný návrh, například pro
							zdobení uší či jiných částí těla.
						</p>
					</div>
				</div>
			</div>{" "}
			{/* Piercing uší */}
			<PiercingItem
				data={{
					icon: piercingData[0].icon,
					heading: piercingData[0].heading,
					types: piercingData[0].types,
				}}
				background="bg-cream"
				textColor="text-primary-dark"
				iconBackground="bg-primary-dark"
				iconColor="text-light-gold"
			/>
			{/* Piercing obličeje */}
			<PiercingItem
				data={{
					icon: piercingData[1].icon,
					heading: piercingData[1].heading,
					types: piercingData[1].types,
				}}
				background="min-h-fit w-screen bg-[url('../assets/backgroud-gold-v2.png')] bg-cover bg-center bg-no-repeat"
				backgroundImage={`url(${Goldbackground})`}
				textColor="text-primary-light"
				iconBackground="bg-cream"
				iconColor="text-dark-gold"
			/>
			{/* Piercing těla */}
			<PiercingItem
				data={{
					icon: piercingData[2].icon,
					heading: piercingData[2].heading,
					types: piercingData[2].types,
				}}
				background="bg-primary-dark"
				textColor="text-primary-light"
				iconBackground="from-light-gold to-dark-gold bg-gradient-to-br "
				iconColor="text-primary-dark"
			/>
		</>
	);
};

export default withTransition(PiercSection);
