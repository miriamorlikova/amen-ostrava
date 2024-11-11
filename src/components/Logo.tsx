import { Link } from "react-router-dom";
import logoDark from "../assets/logo-black.png";
import logoLight from "../assets/logo-white.png";
type LogoDarkProps = {
  theme: "dark" | "light";
};

const Logo = ({ theme }: LogoDarkProps) => {
  return (
    <Link className="flex items-center justify-center" to="/">
      <div className="p-10">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          className="xl:w-20 h-auto xxl:w-24"
        />
      </div>
    </Link>
  );
};

export default Logo;
