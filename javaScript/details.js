import {mostrarDetalleEvento} from "./module/funcionesDetails.js"
const url = 'https://mindhub-xj03.onrender.com/api/amazing';
fetch(url)
  .then(response => response.json())
  .then(datos => {
    
    const eventosAmazing = datos.events;
    const detallesCarta = document.getElementById("titulocontainer");
const contenedorImg = document.getElementById("contenedorimg");
    let urlParams = location.search;
let params = new URLSearchParams(urlParams);
let nombreEvento = params.get("nombre");
mostrarDetalleEvento(eventosAmazing, nombreEvento, detallesCarta, contenedorImg);
  })
  .catch(err => console.log(err));

