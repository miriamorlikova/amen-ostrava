import Logo from "./Logo";
import NavLink from "./NavLink";

type NavBarProps = {
  theme: "light" | "dark";
  isWithBg?: boolean;
};

const NavBar = ({ theme, isWithBg }: NavBarProps) => {
  const textColor =
    theme === "light" ? "text-primary-light" : "text-primary-dark";
  const backgroundColor = isWithBg
    ? "bg-primary-dark bg-opacity-[95%]"
    : "bg-transparent";
  return (
    <div
      className={`fixed w-full z-[30] flex justify-center pt-10 pb-14 ${textColor} ${backgroundColor} transition-all duration-300 `}
    >
      <div className="absolute top-0 left-0">
        <Logo theme={theme} />
      </div>
      <div className="flex xxl:gap-12 xl:gap-4 gap-2">
        <NavLink to="/about" theme={theme}>
          o mně
        </NavLink>
        <NavLink to="/work" theme={theme}>
          práce
        </NavLink>
        <NavLink to="/brows" theme={theme}>
          obočí
        </NavLink>
        <NavLink to="/lashes" theme={theme}>
          řasy
        </NavLink>
        <NavLink to="/piercings" theme={theme}>
          piercing
        </NavLink>
        <NavLink to="/prices" theme={theme}>
          ceník
        </NavLink>
        <NavLink to="/contact" theme={theme}>
          kontakt
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
