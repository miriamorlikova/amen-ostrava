import { IoCloseOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type MobileMenuProps = {
	isMenuOpen: boolean;
	onClose: () => void;
};

const MobileMenu = ({ isMenuOpen, onClose }: MobileMenuProps) => {
	const location = useLocation();
	const [activeNavLink, setActiveNavLink] = useState<string>(location.pathname);

	// Update active link on route change
	useEffect(() => {
		setActiveNavLink(location.pathname);
	}, [location.pathname]);

	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: isMenuOpen ? "0%" : "100%" }}
			exit={{ x: "100%" }}
			transition={{ type: "tween", duration: 0.6 }}
			className="fixed top-0 right-0 w-[300px] h-full bg-primary-light bg-opacity-90 z-[30] flex flex-col justify-start items-center"
		>
			{/* Close Button */}
			<button onClick={onClose}>
				<IoCloseOutline className="opacity-70 hover:opacity-100 z-[40] transition-colors duration-500 h-10 w-10 fixed top-12 right-10" />
			</button>

			{/* Navigation Links */}
			<nav className="py-16 text-xl flex flex-col text-primary-dark">
				<NavLink
					to="/about"
					theme="dark"
					isActive={activeNavLink === "/about"}
					onClick={() => setActiveNavLink("/about")}
				>
					o mně
				</NavLink>
				<NavLink
					to="/work"
					theme="dark"
					isActive={activeNavLink === "/work"}
					onClick={() => setActiveNavLink("/work")}
				>
					práce
				</NavLink>
				<NavLink
					to="/brows"
					theme="dark"
					isActive={activeNavLink === "/brows"}
					onClick={() => setActiveNavLink("/brows")}
				>
					obočí
				</NavLink>
				<NavLink
					to="/lashes"
					theme="dark"
					isActive={activeNavLink === "/lashes"}
					onClick={() => setActiveNavLink("/lashes")}
				>
					řasy
				</NavLink>
				<NavLink
					to="/piercings"
					theme="dark"
					isActive={activeNavLink === "/piercings"}
					onClick={() => setActiveNavLink("/piercings")}
				>
					piercing
				</NavLink>
				<NavLink
					to="/prices"
					theme="dark"
					isActive={activeNavLink === "/prices"}
					onClick={() => setActiveNavLink("/prices")}
				>
					ceník
				</NavLink>
				<NavLink
					to="/contact"
					theme="dark"
					isActive={activeNavLink === "/contact"}
					onClick={() => setActiveNavLink("/contact")}
				>
					kontakt
				</NavLink>
			</nav>
		</motion.div>
	);
};

export default MobileMenu;
