import { useState, useEffect } from "react";
import "./header.css";
import { techAdjectives, techNouns } from "../../data/headerWords";
import { getRandomWord } from "../../utils/arrayUtils";

const Header = () => {
  const [companyName, setCompanyName] = useState("");

  const generateName = () => {
    let name = "";
    const adjective = getRandomWord(techAdjectives);
    const noun = getRandomWord(techNouns);

    return `${adjective} ${noun}`;
  };

  useEffect(() => {
    setCompanyName(generateName());
  }, []);

  return <h1 className="header">{companyName}</h1>;
};

export default Header;
