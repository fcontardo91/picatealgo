import React, { useEffect, useState } from "react";
import "./pedidos.css";
import data from "../data/data.json";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState([""]);

  useEffect(() => {
    setPedidos(data.pedidos);
    console.log("cargado2");
  }, []);

  const CardPedido2 = () => {
    return (
      <div className="card__pedido">
        <div className="card__zonahora">
          <span>Villa Madero</span> <span>20.30 a 21.30</span>
        </div>
        <div className="card__body">
          <div className="card__nropedido">
            <span>Comanda 15100</span>
            <span>Orden #1</span>
          </div>
          <div className="card__descpedido">
            <div className="card__descpedido__picada">
              <span>La Buenos Aires</span>
              <span>2</span>
              <span>PC</span>
            </div>
            <div className="card__cambio">
              <li>Jamon Crudo x Mar del Plata</li>
              <li>Roquefort x Salame</li>
            </div>
          </div>
          <div className="card__adicionales">
            <span>Mani</span>
            <span>Pan Adicional</span>
            <span>Berenjenas</span><span>Tostaditas</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-black text-white">PEDIDOS</div>
      <div className="card-body">
        <h5 className="card-title">FECHA</h5>
        <div>
          <CardPedido2 />
          <CardPedido2 />
        </div>
      </div>
    </div>
  );
};
