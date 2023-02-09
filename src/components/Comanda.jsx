import React, { useEffect, useState } from "react";
import data from "../data/data.json";

export const Comanda = () => {
  const [picadas, setPicadas] = useState([''])
  const [picadaElegida, setPicadaElegida] = useState({});
  const [pedido, setPedido] = useState([''])
  const [cambio1, setCambio1] = useState([''])
  const [cambio2, setCambio2] = useState([''])

  useEffect(() => {
    
    setPicadas(data.picadas)
    console.log('cargado1')
  
  },[])
  

  const Cambios = () => {
    return (
      <div className="row mx-3">
        <div className="col-5 align-items-center  mb-3">
          <select className="form-select" id="inputGroupSelect01">
            <option defaultValue={" "}></option>
            {picadaElegida?.content?.map( c => {
                      return (
            <option value={c}>{c}</option>
                      )
                })
            }
          </select>
        </div>
        <span className="col-2 text-center"> x </span>
        <div className="col-5  mb-3">
        <select className="form-select" id="inputGroupSelect01">
            <option defaultValue={" "}></option>
            {picadaElegida?.content?.map( c => {
                      return (
            <option value={c}>{c}</option>
                      )
                })
            }
          </select>
        </div>
      </div>
    );
  };

  const funcEleccionPicada = (num) => {
    setPicadaElegida({})
    setPedido()
    const result = picadas.find(({ id }) => id === num);
    setPicadaElegida(result)
    setPedido({"title": picadaElegida.title})
    console.log(pedido.title)
  };

  const funcTamanoPicada = (num) => {
    setPedido({...pedido, "tamano": num})
    console.log(pedido.title, pedido.tamano)
  };

  const funcCambios = (num) => {
    setCambios({...pedido, "cambios": ['']})
    console.log(pedido.title, pedido.tamano, pedido.cambios)
  };

  return (
    <div className="card text-center">
      <div className="card-header text-white bg-black">COMANDA</div>
      <div className="card-body">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          AGREGAR PICADA
        </button>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  AGREGAR PICADA
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 className="card-title mb-1">SELECCIONAR PICADA</h5>
                <div className="nav nav-pills nav-fill" id="myTab" role="tablist">
                    {picadas?.map(({ id, title }) => {
                      return (
                        <button
                          key={id}
                          onClick={() => funcEleccionPicada(id)}
                          className="nav-link col-auto text-uppercase p-1 m-1 btn btn-primary btn-sm"
                          id="home-tab"
                          data-bs-toggle="tab"
                          type="button"
                        >
                          {title}
                        </button>
                      );
                    })}
                </div>
                    
              <div className="modal-body">
              <hr className="mx-5 my-1 p-0" />
                <h5 className="card-title mt-3 mb-1">SELECCIONAR PERSONAS</h5>
                <div className="nav nav-pills nav-fill" id="myTab" role="tablist">
                  {picadaElegida?.tamano?.map( cant => {
                      return (
                        <button
                          key={cant}
                          onClick={() => funcTamanoPicada(cant)}
                          className="nav-link col-auto text-uppercase p-1 m-1 btn btn-primary btn-sm"
                          id="home-tab"
                          data-bs-toggle="tab"
                          type="button"
                        >
                          {cant}
                        </button>
                      );
                    })}
                </div>
                </div>

                <hr className="mx-5 my-1 p-0" />
                <h5 className="card-title mb-1">SELECCIONAR CAMBIOS</h5>
                <div>
                  <Cambios />
                  <Cambios />
                </div>
                <hr className="mx-5 my-1 p-0" />
                <h5 className="card-title mb-1">PREPARADO DEL PAN</h5>
                <div className="row input-group">
                  <span className="col-5">
                    <input type="radio" name="coccion-pan" value="cocido" />{" "}
                    COCIDO
                  </span>
                  <span className="col-5">
                    <input type="radio" name="coccion-pan" value="precocido" />{" "}
                    PRECOCIDO
                  </span>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                >
                  CANCELAR
                </button>
                <button type="button" className="btn btn-success">
                  AGREGAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
