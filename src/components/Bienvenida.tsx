import { LogoSVG } from "../assets/Icons";

const Bienvenida = () => {
  return (
    <>
      <div className="flex p-10 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl">Proyecto Ingeniería de Software</h1>
          <h2 className="text-3xl">
            Reservas Uneat - Joseph Alemany (Cliente)
          </h2>
          <h2 className="text-2xl">Resumen</h2>
          <p>
            Se desarrolla el modelo del dominio de una problemática propuesta
            por un cliente, la cual es, poder manejar las reservas de la cancha
            de padel de la universidad europea del atlantico que sea de facil
            uso para gestionar las reservas, hacer seguimiento del mismo,
            realizar cobros de estas reservas e informar al usuario su tiempo
            limite de uso en las canchas de padel, ademas que todos los usarios
            deberan pertenecer al mismo dominio.
          </p>
        </div>
        <LogoSVG />
      </div>
    </>
  );
};

export default Bienvenida;
