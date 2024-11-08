import NavLink from "./NavLink";

type NavBarProps = {
  theme: "light" | "dark";
};

const NavBar = ({ theme }: NavBarProps) => {
  const textColor =
    theme === "light" ? "text-primary-light" : "text-color-dark";

  return (
    <div className={`fixed w-full flex justify-center ${textColor}`}>
      <div className="flex xxl:gap-12 xl:gap-4 gap-2">
        <NavLink to="/about">o mně</NavLink>
        <NavLink to="/work">práce</NavLink>
        <NavLink to="/brows">obočí</NavLink>
        <NavLink to="/lashes">řasy</NavLink>
        <NavLink to="/piercings">piercing</NavLink>
        <NavLink to="/prices">ceník</NavLink>
        <NavLink to="/contact">kontakt</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
