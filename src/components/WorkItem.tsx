import { motion } from "framer-motion";

type WorkItemProps = {
	title: string;
	images: string[];
	containerRef: React.RefObject<HTMLDivElement>;
	width: number;
};

const WorkItem = ({ title, images, containerRef, width }: WorkItemProps) => {
	return (
		<div className="flex flex-col mb-8">
			<h1 className="ml-2 mb-8">{title}</h1>
			<div
				ref={containerRef}
				className="overflow-x-scroll w-full relative mx-2"
			>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="flex cursor-grab gap-6 active:cursor-grabbing items-center"
				>
					{images.map((image, index) => (
						<div
							className="aspect-square shrink-0 min-w-[150px] sm:min-w-[200px] md:min-w-[300px] lg:min-w-[400px] xl:min-w-[500px]"
							style={{
								backgroundImage: `url(${image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							key={index}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};
export default WorkItem;
