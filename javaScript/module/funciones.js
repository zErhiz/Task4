
//index
export function crearMasArticle(eventoAmazing) {
    return  `<div class="card bg-dark" style="width: 18rem">
    <img src="${eventoAmazing.image}" class="cartafoto p-2" />
    <div class="card-body">
    <div class=cartatitulo>
        <h5 class="card-title">${eventoAmazing.name}</h5>
        <p class="card-text">
           ${eventoAmazing.description}
        </p>
        </div>  
        <div class="cardpriceandbutton">
            <p>price: ${eventoAmazing.price}</p>
            <a href="./pages/details.html?nombre=${eventoAmazing.name}" class="btn btn-primary">Details</a>
        </div>
        
    </div>
   </div>`
}
export function crearCheckbox(checkboxCategoria) {
    return `
      <label>
        <input type="checkbox" name="opciones" value="${checkboxCategoria}" />
        ${checkboxCategoria}
      </label>`;
  }


//hacer barra busqueda

export function filtrarEventosBusqueda(eventoDatos, idCarta) {
    const barraDeBusquedaValor = document.getElementById("search-input");
    barraDeBusquedaValor.addEventListener("input", () => {
      const busquedaValor = barraDeBusquedaValor.value.toLowerCase();
      if (eventoDatos) {
        const eventosFiltradosBusqueda = eventoDatos.events.filter((evento) => {
          return (
            evento.name.toLowerCase().includes(busquedaValor) ||
            evento.description.toLowerCase().includes(busquedaValor)
          );
        });
        const carta = document.getElementById(idCarta);
        carta.innerHTML = "";
        for (let i = 0; i < eventosFiltradosBusqueda.length; i++) {
          carta.innerHTML += crearMasArticle(eventosFiltradosBusqueda[i]);
        }
      }
    });
  }

  //crear checkboxes
  export function generarCheckboxes(eventosAmazing) {
    const checkboxContenedor = document.getElementById(`checkboxes`);
    const myset = new Set();
    let crearCheckboxes = ``;
    for (let i = 0; i < eventosAmazing.length; i++) {
      const checkboxCategoria = eventosAmazing[i].category;
      if (!myset.has(checkboxCategoria)) {
        myset.add(checkboxCategoria);
        crearCheckboxes += crearCheckbox(checkboxCategoria);
      }
    }
    checkboxContenedor.innerHTML = crearCheckboxes;
    return crearCheckboxes;
  }

