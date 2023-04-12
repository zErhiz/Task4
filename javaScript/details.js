import { pintarDescripcionDeEventos, pintarImagenEventos } from "./module/funcionesDetails.js"
const url = 'https://mindhub-xj03.onrender.com/api/amazing';
fetch(url)
  .then(response => response.json())
  .then(datos => {
    const eventosAmazing = datos.events;
    const detallesCarta = document.getElementById(`titulocontainer`)
    const contenedorImg = document.getElementById(`contenedorimg`)
    
    let urlParams = location.search
    let params = new URLSearchParams(urlParams)
    let nombre = params.get("nombre")
    
    
    
    let eventoEncontrado = eventosAmazing.find(eventoAmazing => eventoAmazing.name == nombre)
    
    pintarDescripcionDeEventos(eventoEncontrado, detallesCarta)
    pintarImagenEventos(eventoEncontrado,contenedorImg)
    
  })
  .catch(err => console.log(err));

