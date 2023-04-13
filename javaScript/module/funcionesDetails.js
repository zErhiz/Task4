export function pintarDescripcionDeEventos(eventoAmazing, detallesCarta) {
  let eventosImpresos = ""
  eventosImpresos = ` <div class="letras"><h2 class="titulo22">${eventoAmazing.name}</h2>
  <h4 class="titulo33">Description:${eventoAmazing.description}</h4>
  <h4>Date: ${eventoAmazing.date}</h4>
  <h4>Category: ${eventoAmazing.category}</h4>
  <h4>Place: ${eventoAmazing.place}</h4>
  <h4>Capacity: ${eventoAmazing.capacity}</h4>
  `;

  if (eventoAmazing.assistance !== undefined) {
    eventosImpresos += `<h4>Assistance: ${eventoAmazing.assistance}</h4>`;
  } else {
    eventosImpresos += `<h4>Estimate: ${eventoAmazing.estimate}</h4>`;
  }

  eventosImpresos += `<h4>Price: ${eventoAmazing.price}</h4> </div>`

  detallesCarta.innerHTML = eventosImpresos;
}

export function pintarImagenEventos(eventoAmazing,contenedorImg) {
    let eventoImagenImpreso = "";
    eventoImagenImpreso = `<div class="imagen-fondo" style="background-image: url(${eventoAmazing.image})"></div>`;

    contenedorImg.innerHTML = eventoImagenImpreso;
}

//todo 
export function mostrarDetalleEvento(eventosAmazing, nombreEvento, detallesCarta, contenedorImg) {
  const eventoEncontrado = eventosAmazing.find(eventoAmazing => eventoAmazing.name === nombreEvento);
    
  pintarDescripcionDeEventos(eventoEncontrado, detallesCarta);
  pintarImagenEventos(eventoEncontrado, contenedorImg);
}

