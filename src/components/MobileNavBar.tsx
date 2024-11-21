import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

type MobileNavBarProps = {
	theme: "light" | "dark";
	navbarBackground?: string;
	backgroundImage?: string;
};

const MobileNavBar = ({
	theme,
	navbarBackground,
	backgroundImage,
}: MobileNavBarProps) => {
	const textColor =
		theme === "light" ? "text-primary-light" : "text-primary-dark";
	const backgroundColor = navbarBackground || "bg-transparent";
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

	return (
		<div
			className={`$fixed w-full z-[30] flex ${backgroundColor} transition-colors duration-500`}
		>
			<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? (
					<MobileMenu />
				) : (
					<div
						className={`fixed w-full z-[30] flex justify-center pt-10 pb-14 ${textColor} ${backgroundColor} transition-all duration-300 pb-28`}
						style={
							backgroundImage
								? {
										backgroundImage: `url(${backgroundImage})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}
								: {}
						}
					>
						<div className={`absolute top-0 left-0 ${textColor}`}>
							<Logo theme={theme} />
						</div>
						<CiMenuBurger
							className={`opacity-70 hover:opacity-100 transition-colors duration-500 h-14 w-14 absolute top-12 right-10 ${textColor}`}
						/>
					</div>
				)}
			</button>
			<nav className="ml-[17%] mr-[17%] flex flex-col gap-2 font-exo"> </nav>
		</div>
	);
};
export default MobileNavBar;
