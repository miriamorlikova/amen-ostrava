import { Link } from "react-router-dom";
import logoDark from "../assets/logo-black.png";
import logoLight from "../assets/logo-white.png";
type LogoDarkProps = {
  theme: "dark" | "light";
};

const Logo = ({ theme }: LogoDarkProps) => {
  return (
    <div className="m-10 pt-2">
      <Link className="flex" to="/">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          className="xl:w-20 h-auto xxl:w-24"
        />
      </Link>
    </div>
  );
};

export default Logo;
