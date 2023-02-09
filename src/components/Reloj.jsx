import { useEffect, useRef } from "react";

export const Reloj = () => {
  const h1 = useRef();
  const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Sabado","Domingo"];
  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  const addZero = (i) => {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const ti = () => {
    const fechahora = new Date();
    const diaNombre = dias[fechahora.getDay()]
    const diaNumero = fechahora.getDate()
    const mesActual =  meses[fechahora.getDay()]
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    // const segundo = fechahora.getSeconds();
    return `${hora}:${minuto}, ${diaNombre} ${diaNumero} de ${mesActual}`
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ti()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);

  return (
    <div>
      <h1 ref={h1}>{ti()}</h1>
    </div>
  );
}