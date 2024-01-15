import Image from "next/image";

const Acerca = () => {
  return (
    <main className="acerca wrapper">
      <h1 className="h1">Acerca de</h1>
      <h2 className="h2 highlighted-text">Nuestra historia</h2>
      <Image
        src="/pictures/about-desk.png"
        alt="team"
        className="acerca-img"
        height={300}
        width={500}
      ></Image>
      <p>
        Eduardo Medina Ylla, alternando en el Banco República y en el ámbito de
        la Facultad de Derecho, logró se le aceptara bajo matrícula No. 12 como
        Agente de la Propiedad Industrial, en el año 1968.{" "}
      </p>
      <p>
        Caracterizado por su afán de estudiar todos los casos en profundidad
        para su más acendrada defensa y legislaciones intelectuales y de
        comercio de todo el mundo, cuanto las más diversas artes, creó más de
        medio centenar de patentes en diversas áreas: mecánica, construcción,
        seguridad.
      </p>
      <p>
        En 1980, la sucesión de su ex colega Rómulo Marne Aurucci lo designó
        como su continuador.
      </p>
      <p>
        Asimismo recibió importantes ofertas de varias empresas de vehículos y
        de construcción para dirigir su producción, las cuales sistemáticamente
        rechazó ante su inexorable condición de independencia y compromiso con
        la Oficina de Marcas y Patentes de accésit global.
      </p>
      <p>
        Siendo que él no vive de las marcas y patentes, sino que las vive, las
        palpita, como un estudioso que ha optado por trabajar en dichos ámbitos
        propios de creación material, para poder conocerlos en profundidad.
      </p>
      <p>
        Esto lo ha llevado a tres cosas:
        <br />
        1) Ser considerado el mejor defensor de casos difíciles de América,
        ganando casos “imposibles”.
        <br />
        2) Varios clientes han preferido pagarle sus viajes con tal que él mismo
        prepare, controle y presente los casos que encomienda a sus colegas de
        otros países de América y más.
        <br />
        3) Arquitectos, médicos, armadores, creativos en general, ven sus
        proyectos ser traídos a la realidad, para identificar, obtener y
        mantener sus derechos “in totum”.
      </p>
    </main>
  );
};

export default Acerca;
