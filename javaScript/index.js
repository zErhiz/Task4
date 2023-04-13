import {
  crearMasArticle,
  generarCheckboxes,
  filtrarEventosBusqueda,
  filtrarEventosPorCategorias,
  crearArticulos,
} from "./module/funciones.js";
// url fetch api
const url = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    const eventosAmazing = datos.events;
    let eventoDatos = datos;

    // section 1
    console.log(crearMasArticle);
    crearArticulos(eventosAmazing, "section-11");

    //hacer funcionar barra de busqueda
    const barraDeBusquedaValor = document.getElementById("search-input");

    filtrarEventosBusqueda(eventoDatos, "section-11");
    //crear checkbox
    generarCheckboxes(eventosAmazing);
    //hacer que funcionen los checkbox
    filtrarEventosPorCategorias(eventoDatos);
    //hacer que actuen cruzados
    const actualizarEventosFiltrados = () => {
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
    };

    barraDeBusquedaValor.addEventListener("input", actualizarEventosFiltrados);

    const checkboxesArray = Array.from(checkboxes);
    checkboxesArray.forEach((checkbox) => {
      checkbox.addEventListener("change", () =>
        actualizarEventosFiltrados(
          eventoDatos,
          barraDeBusquedaValor,
          checkbox
        )
      );
      checkbox.addEventListener("change", actualizarEventosFiltrados);
    });
    /*  actualizarEventosFiltrados(eventoDatos, barraDeBusquedaValor, checkboxes)  */
  })
  .catch((err) => console.log(err));
