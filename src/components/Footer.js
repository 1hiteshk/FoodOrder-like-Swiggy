import userContext from "../utils/userContext";
import { useContext } from "react";
import { FaReact } from "react-icons/fa6";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <h4 className="p-10 mt-4 mx-auto items-center text-center text-white bg-[#000000]">
      This site is developed with ♥️ by {user.name}{" "}
      <i className="fab fa-react text-teal-400"></i> -{" "}
      <a href="mailto: 1hiteshk@gmail.com" className="text-[#fd9133]">
        {user.email}
      </a>
    </h4>
  );
};

export default Footer;
