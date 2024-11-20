import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import lashes1 from "../assets/lashes/lashes-image-1.png";
import lashes2 from "../assets/lashes/lashes-image-2.png";
import lashes3 from "../assets/lashes/lashes-image-3.png";
import lashes4 from "../assets/lashes/lashes-image-4.png";
import lashes5 from "../assets/lashes/lashes-image-5.png";
import brows1 from "../assets/eyebrows/brows-image-1.png";
import brows2 from "../assets/eyebrows/brows-image-2.png";
import brows3 from "../assets/eyebrows/brows-image-3.png";
import brows4 from "../assets/eyebrows/brows-image-4.png";
import brows5 from "../assets/eyebrows/brows-image-5.png";
import pierc1 from "../assets/piercings/pierc-image-1.png";
import pierc2 from "../assets/piercings/pierc-image-2.png";
import pierc3 from "../assets/piercings/pierc-image-3.png";
import pierc4 from "../assets/piercings/pierc-image-4.png";
import pierc5 from "../assets/piercings/pierc-image-5.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MobileNavBar from "../components/MobileNavBar";

type WorkSectionProps = {};

const lashes = [lashes1, lashes2, lashes3, lashes4, lashes5];
const eyebrows = [brows1, brows2, brows3, brows4, brows5];
const piercings = [pierc1, pierc2, pierc3, pierc4, pierc5];

const WorkSection = ({}: WorkSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1250px)");
	const [width, setWidth] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current == null) return;
		setWidth(
			containerRef.current.scrollWidth - containerRef.current.offsetWidth
		);
	}, []);

	return (
		<div className="h-full overflow-y-auto w-screen bg-primary-dark">
			{isAboveMediumScreen && (
				<NavBar
					navbarBackground="bg-primary-dark bg-opacity-[90%]"
					theme="light"
				/>
			)}
			<MobileNavBar theme="light" />

			<div className="text-primary-light uppercase xxl:text-4xl xl:text-3xl text-2xl flex flex-col w-[85%] h-full m-auto gap-10 xxl:gap-14 relative top-[25%] ">
				{/* LASHES */}
				<div className="flex flex-col mb-8">
					<h1 className="ml-2 mb-8">řasy</h1>
					<div
						ref={containerRef}
						className="overflow-x-scroll  w-full relative mx-2 "
					>
						<motion.div
							dragConstraints={{ right: 0, left: -width }}
							drag="x"
							className="flex cursor-grab gap-6 active:cursor-grabbing items-center"
						>
							{lashes.map((image, index) => (
								<div
									className="aspect-square shrink-0 sm:min-w-[400px] xxl:min-w-[500px] min-w-[300px]"
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
				{/* EYEBROWS */}
				<div className="flex flex-col mb-8">
					<h1 className="ml-2 mb-8">obočí</h1>
					<div
						ref={containerRef}
						className="overflow-x-scroll  w-full relative mx-2 "
					>
						<motion.div
							dragConstraints={{ right: 0, left: -width }}
							drag="x"
							className="flex cursor-grab gap-6 active:cursor-grabbing items-center"
						>
							{eyebrows.map((image, index) => (
								<div
									className="aspect-square shrink-0 sm:min-w-[400px] xxl:min-w-[500px] min-w-                 [300px]"
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
				{/* PIERCINGS */}
				<div className="xxl:pb-60 xl:pb-48 pb-40 flex flex-col">
					<h1 className="ml-2 mb-8">piercing</h1>
					<div
						ref={containerRef}
						className="overflow-x-scroll  w-full relative mx-2 "
					>
						<motion.div
							dragConstraints={{ right: 0, left: -width }}
							drag="x"
							className="flex cursor-grab gap-6 active:cursor-grabbing items-center"
						>
							{piercings.map((image, index) => (
								<div
									className="aspect-square shrink-0 sm:min-w-[400px] xxl:min-w-[500px] min-w-             [300px]"
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
			</div>
		</div>
	);
};

export default withTransition(WorkSection);
