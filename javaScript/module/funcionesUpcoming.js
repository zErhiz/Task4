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
  
  //hacer que funcionen 
  export function filtrarPorCategorias(eventos, idElementoHTML) {
    const checkboxes = document.querySelectorAll('input[type=checkbox][name=opciones]');
  
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
  
        const categoriasSeleccionadas = [];
        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            categoriasSeleccionadas.push(checkbox.value);
          }
        });
  
        let eventosFiltradosCheckbox;
        if (categoriasSeleccionadas.length === 0) {
          eventosFiltradosCheckbox = eventos;
        } else {
          eventosFiltradosCheckbox = eventos.filter((evento) => {
            return categoriasSeleccionadas.includes(evento.category);
          });
        }
  
        const carta1 = document.getElementById(idElementoHTML);
        carta1.innerHTML = '';
        for (let i = 0; i < eventosFiltradosCheckbox.length; i++) {
          carta1.innerHTML += crearMasArticle(eventosFiltradosCheckbox[i]);
        }
      });
    });
  }
  //cartas funcion 
  export function mostrarEventosFuturos(eventos, seccionId, datos) {
    const carta1 = document.getElementById(seccionId);
  
    let eventosFuturos = [];
  
    for (const evento of eventos) {
        if (evento.date >= datos.currentDate) {
            eventosFuturos.push(evento);
        }
    }
  
    let crearArticle = "";
    for (let i = 0; i < eventosFuturos.length; i++) {
        crearArticle += crearMasArticle(eventosFuturos[i]);
    }
  
    carta1.innerHTML = crearArticle;
  }