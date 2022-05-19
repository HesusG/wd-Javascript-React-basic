/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "../Card/Card";
import roma from "./roma.jpg";
import barcelona from "./barcelona.jpg";
import berlin from "./berlin.jpeg";
import paris from "./paris.jpg";
import "./ItemListContainer.css";


const ItemListContainer = ({ greeting }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid

    <div className="container" id="listContainer">
      <h3 className="txt1">{greeting}</h3>

      <div className="row" style={{ float: "center" }}>
        <Card
          imagen={roma}
          texto="La capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel."
          nombre="Roma"
        ></Card>
        <Card
          imagen={barcelona}
          texto="La capital cosmopolita de la región de Cataluña en España, es conocida por su arte y arquitectura. La fantástica iglesia de la Sagrada Familia y otros hitos modernistas diseñados por Antoni Gaudí adornan la ciudad. El Museo Picasso y la Fundación Joan Miró muestran el arte moderno de los artistas que dan origen a sus nombres. El Museo de Historia de Barcelona (MUHBA) incluye varios sitios arqueológicos romanos."
          nombre="Barcelona"
        ></Card>
        <Card
          imagen={berlin}
          texto="La capital alemana, data del siglo XIII. Los elementos que recuerdan la turbulenta historia de la ciudad en el siglo XX incluyen el Monumento del Holocausto y los restos del Muro de Berlín con grafitis. Después de dividirse durante la Guerra Fría, la Puerta de Brandeburgo del siglo XVIII se convirtió en un símbolo de la reunificación. La ciudad es conocida por su ambiente artístico y los sitios geográficos modernos, como la Filarmónica de Berlín, construida en 1963, de color dorado y con un diseño de paneles que se desprenden de su techo."
          nombre="Berlin"
        ></Card>
        <Card
          imagen={paris}
          texto="La capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré."
          nombre="Paris"
        ></Card>
      </div>
    </div>
  );
};

export default ItemListContainer;
