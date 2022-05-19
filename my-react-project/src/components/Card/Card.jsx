/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Card.css";

const Card = ({ imagen, texto, nombre }) => {
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        margin: "0.3%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h5 className="txt2">{nombre}</h5>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <p className="card-text txt3">{texto}</p>
      </div>
    </div>
  );
};

export default Card;
