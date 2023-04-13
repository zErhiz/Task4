
const eventosAmazing = []
//crear cartas
export function crearArticulos(eventos, idElementoHTML) {
  const carta = document.getElementById(idElementoHTML);
  let crearArticle = ``;
  for (let i = 0; i < eventos.length; i++) {
    crearArticle += crearMasArticle(eventos[i]);
  }
  carta.innerHTML = crearArticle;
}

// Utilización de la función
crearArticulos(eventosAmazing, "section-11");

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
let barraDeBusquedaValor;
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
  
//funcionar checkbox 
export function filtrarEventosPorCategorias(eventoDatos) {
  const checkboxes = document.querySelectorAll(
    "input[type=checkbox][name=opciones]"
  );
 
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const categoriasSeleccionadas = [];
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          categoriasSeleccionadas.push(checkbox.value);
        }
      });

      let eventosFiltradosCheckbox;
      if (categoriasSeleccionadas.length === 0) {
        eventosFiltradosCheckbox = eventoDatos.events;
      } else {
        eventosFiltradosCheckbox = eventoDatos.events.filter((evento) => {
          return categoriasSeleccionadas.includes(evento.category);
        });
      }

      const carta1 = document.getElementById("section-11");
      carta1.innerHTML = "";
      for (let i = 0; i < eventosFiltradosCheckbox.length; i++) {
        carta1.innerHTML += crearMasArticle(eventosFiltradosCheckbox[i]);
      }
    });
  });
}

//filtrar eventos cruzados
/* export function actualizarEventosFiltrados(eventoDatos, barraDeBusquedaValor, checkboxes) {
  const busquedaValor = barraDeBusquedaValor.value.toLowerCase();
  const categoriasSeleccionadas = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  let eventosFiltrados = eventoDatos.events;
  if (busquedaValor) {
    eventosFiltrados = eventosFiltrados.filter((evento) => {
      return (
        evento.name.toLowerCase().includes(busquedaValor) ||
        evento.description.toLowerCase().includes(busquedaValor)
      );
    });
  }
  if (categoriasSeleccionadas.length) {
    eventosFiltrados = eventosFiltrados.filter((evento) => {
      return categoriasSeleccionadas.includes(evento.category);
    });
  }
  const carta1 = document.getElementById("section-11");
  if (eventosFiltrados.length > 0) {
    carta1.innerHTML = "";
    for (let i = 0; i < eventosFiltrados.length; i++) {
      carta1.innerHTML += crearMasArticle(eventosFiltrados[i]);
    }
  } else {
    carta1.innerHTML =
      '<h2 class ="NoCards">Oops! No events were found with that name. Maybe you wanted to search for another one? 😕</h2>';
  }
  
  barraDeBusquedaValor.addEventListener("input", () => actualizarEventosFiltrados(eventoDatos, barraDeBusquedaValor, checkboxes));
  const checkboxesArray = Array.from(checkboxes);
checkboxesArray.forEach((checkbox) => {
    checkbox.addEventListener("change", () => actualizarEventosFiltrados(eventoDatos, barraDeBusquedaValor, checkboxes));
  }); 
} */