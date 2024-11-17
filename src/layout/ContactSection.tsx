import H1Text from "../components/H1Text";
import NavBar from "../components/NavBar";
import useMediaQuery from "../utils/useMediaQuery";
import withTransition from "../utils/withTransition";
import contactImg from "../assets/section-7-image.png";
import instagramLogo from "../assets/insta-logo.png";
import emailLogo from "../assets/mail-logo.png";
import adressLogo from "../assets/adress-logo.png";
import ContactItem from "../components/ContactItem";

type ContactSectionProps = {};

const ContactSection = (props: ContactSectionProps) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1050px)");
	const isNavBarVisible = useMediaQuery("(min-width: 1250px)");

	return (
		<div className=" h-screen w-screen bg-brown">
			{isNavBarVisible && (
				<NavBar navbarBackground="bg-brown bg-opacity-[90%]" theme="dark" />
			)}
			<div
				className={`flex w-[75%] m-auto gap-10 xxl:gap-14 relative top-[15%]  h-[75%] justify-center items-center ${isAboveMediumScreen ? "flex" : "flex-col"}`}
			>
				<div className="flex basis-1/2 justify-center items-center">
					<img
						src={contactImg}
						alt="my salon"
						className="xl:w-[600px] w-[90%] max-w-[600px] pt-14 h-auto max-h-[75vh] object-contain"
					/>
				</div>
				<div className="flex flex-col gap-6 basis-1/2 max-w-[700px]">
					<H1Text theme="dark">kontakt</H1Text>
					<p className="text-xl xxl:text-2xl">
						V případě zájmu o volný termín nebo v případě otázek mě prosím
						kontaktujte přes Instagram, který je uveden níže.
					</p>
					{/* INSTAGRAM */}
					<div className="flex flex-col gap-8 mt-8">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/amen_studio_ostrava/"
						>
							<ContactItem src={instagramLogo}>amen_studio_ostrava</ContactItem>
						</a>
						<a href="mailto:katy2242@seznam.cz">
							<ContactItem src={emailLogo}>katy2242@seznam.cz</ContactItem>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.google.com/maps/place/Amen+Studio+Ostrava/@49.8360246,18.2768784,17z/data=!3m1!4b1!4m6!3m5!1s0x4713e39c3a93f99f:0xfa9da1c52f37768d!8m2!3d49.8360246!4d18.2768784!16s%2Fg%2F11kpk1xlky?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
						>
							<ContactItem src={adressLogo}>
								Hornopolní 933/36, 702 00 Moravská Ostrava a Přívoz
							</ContactItem>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withTransition(ContactSection);
