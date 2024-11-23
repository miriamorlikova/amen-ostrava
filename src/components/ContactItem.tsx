import { motion } from "framer-motion";
import React, { useState } from "react";

type ContactItemProps = {
	src: string;
	children: React.ReactNode;
};

const ContactItem = ({ src, children }: ContactItemProps) => {
	const [hovered, setHovered] = useState(false);
	return (
		<div className="flex lg:gap-8 gap-4 items-center">
			<img src={src} className="xl:h-16 xl:w-16 w-12 h-12 xxl:h-20 xxl:w-20 " />
			<motion.div
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
			>
				<p className="xxl:text-4xl xl:text-3xl sm:text-2xl text-lg pt-2">
					{children}
				</p>
				<div
					className={`border-t-4 border-primary-dark opacity-90 rounded-xl transition-all duration-300 ease-in-out ${hovered ? "w-full" : "w-0 border-transparent"}`}
				/>
			</motion.div>
		</div>
	);
};

export default ContactItem;
