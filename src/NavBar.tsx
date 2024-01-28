import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-end w-full bg-gray-200 py-6">
      <ul className="flex p-2 gap-10 mr-32 text-xl">
        <li>
          <Link to={``}>Inicio</Link>
        </li>
        <li>
          <Link to={`Dominio`}>Dominio</Link>
        </li>
        <li>
          <Link to={`Casos-de-uso`}>Casos de uso</Link>
        </li>
        <li>
          <Link to={`MockUp`}>MockUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
