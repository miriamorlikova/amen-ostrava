import React from "react";
import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import H1Text from "../components/H1Text";
import NavBar from "../components/NavBar";
import backgroundImg from "../assets/section-6-bg.png";
type PriceListSectionProps = {};

const PriceListSection = (props: PriceListSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div
			className=" h-screen w-screen bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			{isNavBarVisible && <NavBar theme="light" />}
			<div
				className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
			></div>
		</div>
	);
};
export default withTransition(PriceListSection);
