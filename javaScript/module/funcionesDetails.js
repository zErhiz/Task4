export function pintarDescripcionDeEventos(eventoAmazing, detallesCarta) {
    let eventosImpresos = ""
    eventosImpresos = ` <div class="letras"><h2 class="titulo22">${eventoAmazing.name}</h2>
    <h4 class="titulo33">Description:${eventoAmazing.description}</h4>
    <h4>Date: ${eventoAmazing.date}</h4>
    <h4>Category: ${eventoAmazing.category}</h4>
    <h4>Place: ${eventoAmazing.place}</h4>
    <h4>Capacity: ${eventoAmazing.capacity}</h4>
    <h4>Assistance: ${eventoAmazing.assistance}</h4>
    <h4>Price: ${eventoAmazing.price}</h4> </div>`
  
    detallesCarta.innerHTML = eventosImpresos
  }

export function pintarImagenEventos(eventoAmazing,contenedorImg) {
    let eventoImagenImpreso = "";
    eventoImagenImpreso = `<div class="imagen-fondo" style="background-image: url(${eventoAmazing.image})"></div>`;

    contenedorImg.innerHTML = eventoImagenImpreso;
}