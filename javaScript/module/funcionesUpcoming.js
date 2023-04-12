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
            <a href="./details.html?nombre=${eventoAmazing.name}" class="btn btn-primary">Details</a>
        </div>
        
    </div>
   </div>`;
}
export function crearCheckbox(checkboxCategoria) {
    return `
      <label>
        <input type="checkbox" name="opciones" value="${checkboxCategoria}" />
        ${checkboxCategoria}
      </label>`;
  }

  //barra busqueda
 export function buscarEventosFuturos(eventosFuturos) {
    const barraDeBusquedaValor = document.getElementById('search-input');
        
    barraDeBusquedaValor.addEventListener('input', () => {
      const busquedaValor = barraDeBusquedaValor.value.toLowerCase();
      const eventosFiltradosBusqueda = eventosFuturos.filter((evento) => {
        return evento.name.toLowerCase().includes(busquedaValor) || evento.description.toLowerCase().includes(busquedaValor);
      });
      const carta1 = document.getElementById('section-11');
      carta1.innerHTML = '';
      for (let i = 0; i < eventosFiltradosBusqueda.length; i++) {
        carta1.innerHTML += crearMasArticle(eventosFiltradosBusqueda[i]);
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
  