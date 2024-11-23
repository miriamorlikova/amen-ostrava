import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import NavLink from "./NavLink";

type MobileMenuProps = {};

const MobileMenu = (props: MobileMenuProps) => {
	return (
		<div>
			<IoCloseOutline className="opacity-70 hover:opacity-100 z-[40] transition-colors duration-500 h-10 w-10 fixed top-12 right-10" />
			<nav className="bg-primary-light w-[300px] z-[30] right-0 h-full justify-start items-center flex flex-col fixed bg-opacity-90 text-primary-dark bottom-0">
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
	);
};

export default MobileMenu;
