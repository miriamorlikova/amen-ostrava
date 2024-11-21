import withTransition from "../utils/withTransition";
import useMediaQuery from "../utils/useMediaQuery";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import { useEffect, useRef, useState } from "react";
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
import WorkItem from "../components/WorkItem";

const lashes = [lashes1, lashes2, lashes3, lashes4, lashes5];
const eyebrows = [brows1, brows2, brows3, brows4, brows5];
const piercings = [pierc1, pierc2, pierc3, pierc4, pierc5];

const WorkSection = () => {
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	const lashesRef = useRef<HTMLDivElement>(null);
	const browsRef = useRef<HTMLDivElement>(null);
	const piercingsRef = useRef<HTMLDivElement>(null);

	const [widths, setWidths] = useState({
		lashes: 0,
		brows: 0,
		piercings: 0,
	});

	const calculateWidth = (ref: React.RefObject<HTMLDivElement>) => {
		if (!ref.current) return 0;
		return ref.current.scrollWidth - ref.current.offsetWidth;
	};

	useEffect(() => {
		const updateWidths = () => {
			setWidths({
				lashes: calculateWidth(lashesRef),
				brows: calculateWidth(browsRef),
				piercings: calculateWidth(piercingsRef),
			});
		};

		updateWidths();

		window.addEventListener("resize", updateWidths);

		return () => {
			window.removeEventListener("resize", updateWidths);
		};
	}, []);

	return (
		<div className="min-h-screen overflow-y-auto w-screen bg-primary-dark">
			{isNavBarVisible ? (
				<NavBar
					navbarBackground="bg-primary-dark bg-opacity-[90%]"
					theme="light"
				/>
			) : (
				<MobileNavBar
					theme="light"
					navbarBackground="bg-primary-dark bg-opacity-[90%]"
				/>
			)}

			<div className="text-primary-light uppercase xxl:text-4xl xl:text-3xl text-2xl flex flex-col w-[85%] h-full m-auto gap-10 xxl:gap-14 relative">
				{/* Spacer div */}
				<div className="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-64" />
				{/* Řasy */}
				<WorkItem
					title="řasy"
					images={lashes}
					containerRef={lashesRef}
					width={widths.lashes}
				/>
				{/* Obočí */}
				<WorkItem
					title="obočí"
					images={eyebrows}
					containerRef={browsRef}
					width={widths.brows}
				/>
				{/* Piercing */}
				<WorkItem
					title="piercing"
					images={piercings}
					containerRef={piercingsRef}
					width={widths.piercings}
				/>{" "}
				{/* Spacer div */}
				<div className="h-16 sm:h-20 lg:h-24 xl:h-32" />
			</div>
		</div>
	);
};

export default withTransition(WorkSection);
