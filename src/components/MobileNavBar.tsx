import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import NavLink from "./NavLink";

type MobileNavBarProps = {
	theme: "light" | "dark";
};

const MobileNavBar = ({ theme }: MobileNavBarProps) => {
	const textColor =
		theme === "light" ? "text-primary-light" : "text-primary-dark";
	const menuBackground =
		theme === "dark" ? "bg-primary-light" : "bg-primary-dark";
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div
			className={`$fixed w-full z-[30] flex ${menuBackground} transition-colors duration-500`}
		>
			<div className={`absolute top-0 left-0 ${textColor}`}>
				<Logo theme={theme} />
			</div>
			<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? (
					<div>
						<IoCloseOutline className="opacity-70 hover:opacity-100 z-[40] transition-colors duration-500 h-10 w-10 absolute top-12 right-10" />
						<nav className="bg-primary-light w-[300px] absolute z-[30] right-0 h-full justify-start items-center flex flex-col bg-opacity-90 text-primary-dark bottom-0">
							<div className="py-16 text-xl flex flex-col">
								<NavLink to="/about" theme="dark">
									o mně
								</NavLink>
								<NavLink to="/work" theme="dark">
									práce
								</NavLink>
								<NavLink to="/brows" theme="dark">
									obočí
								</NavLink>
								<NavLink to="/lashes" theme="dark">
									řasy
								</NavLink>
								<NavLink to="/piercings" theme="dark">
									piercing
								</NavLink>
								<NavLink to="/prices" theme="dark">
									ceník
								</NavLink>
								<NavLink to="/contact" theme="dark">
									kontakt
								</NavLink>
							</div>
						</nav>
					</div>
				) : (
					<CiMenuBurger
						className={`opacity-70 hover:opacity-100 transition-colors duration-500 h-14 w-14 absolute top-12 right-10 ${textColor}`}
					/>
				)}
			</button>
			<nav className="ml-[17%] mr-[17%] flex flex-col gap-2 font-exo"> </nav>
		</div>
	);
};
export default MobileNavBar;
