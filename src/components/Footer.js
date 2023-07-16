import userContext from "../utils/userContext";
import { useContext } from "react";

const Footer = () => {
  const {user}= useContext(userContext);
    return <h4 className="p-10 mx-auto items-center text-center text-white bg-[#000000]">This site is developed with ♥️ by {user.name} - {user.email}</h4>;
  };
  
  export default Footer;
  