import { BsEar } from "react-icons/bs";
import { IoBodyOutline } from "react-icons/io5";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";

// utils/piercingData.ts
export const piercingData = [
	{
		icon: <BsEar className="w-6 h-6" />,
		heading: "Piercing uší",
		types: [
			{
				name: "Ušní lalůček (Lobes)",
				description: "Tradiční piercing v měkké části ucha.",
			},
			{
				name: "Middle Helix",
				description: "Piercing ve střední části ušní chrupavky.",
			},
			{
				name: "Forward Helix",
				description: "Piercing v přední části chrupavky ucha.",
			},
			{
				name: "Tragus",
				description: "Piercing v malém výčnělku ucha, který zakrývá zvukovod.",
			},
			{
				name: "Conch",
				description: "Piercing ve vnitřní části ucha, kolem chrupavky.",
			},
			{
				name: "Rook",
				description: "Piercing v horní části chrupavky, uprostřed ucha.",
			},
		],
	},
	{
		icon: <MdOutlineFaceRetouchingNatural className="w-6 h-6" />,
		heading: "Piercing obličeje",
		types: [
			{ name: "Nostril", description: "Piercing v nosní dírce." },
			{
				name: "Septum",
				description: "Piercing v chrupavce mezi nosními dírkami.",
			},
			{
				name: "Labret",
				description: "Piercing pod dolním rtem, na střední linii.",
			},
			{ name: "Medusa", description: "Piercing nad horním rtem, ve středu." },
			{ name: "Snake Bites", description: "Dva piercingy na dolní části rtu." },
		],
	},
	{
		icon: <IoBodyOutline className="w-6 h-6" />,
		heading: "Piercing těla",
		types: [{ name: "Navel (Pupík)", description: "Piercing v pupíku." }],
	},
];
