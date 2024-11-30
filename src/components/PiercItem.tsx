import React from "react";
import { piercingData } from "../utils/piercingData";
import dot from "../assets/dot-gold.png";
type PiercDataType = {
	icon: JSX.Element;
	heading: string;
	types: { name: string; description: string }[];
};
type PiercItemProps = {
	data: PiercDataType;
	background: string;
	textColor: string;
	backgroundImage?: string;
	iconBackground: string;
	iconColor: string;
};

const PiercItem = ({
	data,
	background,
	textColor,
	backgroundImage,
	iconBackground,
	iconColor,
}: PiercItemProps) => {
	return (
		<div className={`${background} ${textColor}`} style={{ backgroundImage }}>
			<div className="w-[75%] m-auto relative py-16 md:py-18 flex flex-col">
				<div className="flex items-center gap-5 pb-12">
					<span
						className={`mt-3 p-4 rounded-full ${iconBackground} ${iconColor}`}
					>
						{data.icon}
					</span>
					<h2 className="uppercase font-cormorant font-semibold tracking-wide pb-3 pt-6 text-2xl">
						{data.heading}
					</h2>
				</div>
				<ul className="flex flex-col ">
					{data.types.map((type, index) => (
						<li key={index} className="flex flex-col py-5">
							<div className="flex sm:flex-row gap-4 sm:gap-0 flex-col text-xl w-full">
								<h4 className="basis-1/2 uppercase">{type.name}</h4>
								<p className="basis-1/2 flex gap-3">
									<img src={dot} className="w-3 h-3 mt-1" />

									{type.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default PiercItem;
