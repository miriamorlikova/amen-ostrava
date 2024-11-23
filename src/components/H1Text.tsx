import React from "react";

type H1TextProps = {
	children: React.ReactNode;
	theme: "dark" | "light";
};

const H1Text = ({ children, theme }: H1TextProps) => {
	return (
		<h1
			className={`xxl:text-7xl lg:text-5xl xl:text-6xl text-[2.5rem] uppercase font-cormorant ${theme === "light" ? "text-primary-light" : "text-primary-dark"}`}
		>
			{children}
		</h1>
	);
};

export default H1Text;
