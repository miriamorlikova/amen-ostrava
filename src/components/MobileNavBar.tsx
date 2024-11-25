import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

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
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<div className={`fixed w-full z-[30] flex ${backgroundColor}`}>
			{/* Navbar */}
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: isMenuOpen ? "-100%" : 0 }}
				transition={{ duration: 0.6 }}
				className={`fixed w-full z-[30] flex justify-center pt-10 pb-28 ${textColor} ${backgroundColor} transition-all duration-300`}
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
				<button onClick={() => setIsMenuOpen(true)}>
					<CiMenuBurger
						className={`opacity-70 hover:opacity-100 transition-colors duration-500 h-14 w-14 absolute top-12 right-10 ${textColor}`}
					/>
				</button>
			</motion.div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<MobileMenu
						isMenuOpen={isMenuOpen}
						onClose={() => setIsMenuOpen(false)}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MobileNavBar;
