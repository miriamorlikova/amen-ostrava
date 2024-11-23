import React from "react";

type PriceItemProps = {
	heading: string;
	description?: string;
	price: string;
};

const PriceItem = ({ heading, description, price }: PriceItemProps) => {
	return (
		<div className="flex text-primary-light justify-between pb-6 border-b pt-6">
			<div className="flex flex-col gap-3">
				<h2 className="text-xl xl:text-2xl">{heading}</h2>
				<p className="opacity-80 text-primary-light text-sm sm:text-base">
					{description}
				</p>
			</div>
			<p className="text-2xl font-bold ">{price}</p>
		</div>
	);
};

export default PriceItem;
