import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navOption, setNavOption] = useState<string>("");
  return (
    <div className="flex justify-end w-full bg-gray-200 py-6 select-none">
      <ul className="flex p-2 gap-10 mr-32 text-xl">
        <li
          className={`${"" === navOption ? "bg-blue-400" : ""} rounded-lg p-2`}
        >
          <Link to={``} onClick={() => setNavOption("")}>
            Inicio
          </Link>
        </li>
        <li
          className={`${
            "dominio" === navOption ? "bg-blue-400" : ""
          } rounded-lg p-2`}
        >
          <Link to={`Dominio`} onClick={() => setNavOption("dominio")}>
            Dominio
          </Link>
        </li>
        <li
          className={`${
            "casosUso" === navOption ? "bg-blue-400" : ""
          } rounded-lg p-2`}
        >
          <Link to={`Casos-de-uso`} onClick={() => setNavOption("casosUso")}>
            Casos de uso
          </Link>
        </li>
        <li
          className={`${
            "mockUp" === navOption ? "bg-blue-400" : ""
          } rounded-lg p-2`}
        >
          <Link to={`MockUp`} onClick={() => setNavOption("mockUp")}>
            MockUp
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
