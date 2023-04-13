import {
  crearMasArticle,
  generarCheckboxes,
  buscarEventosFuturos,
  filtrarPorCategorias,
  mostrarEventosFuturos,
} from "./module/funcionesUpcoming.js";
const url = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    let eventoDatos = datos;
    let eventosFuturos = [];

    for (const evento of datos.events) {
      if (evento.date >= datos.currentDate) {
        eventosFuturos.push(evento);
      }
    }
    //mostrar los eventos
    mostrarEventosFuturos(datos.events, "section-11", datos);

    //hacer funcionar barra de busqueda
    const barraDeBusquedaValor = document.getElementById("search-input");
    buscarEventosFuturos(eventosFuturos);
    //crear checkbox
    generarCheckboxes(datos.events);

    //hacer que funcionen los checkbox
    filtrarPorCategorias(datos.events, "section-11");
    //hacer que actuen cruzados
    const actualizarEventosFiltrados = () => {
      const busquedaValor = barraDeBusquedaValor.value.toLowerCase();
      const categoriasSeleccionadas = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      let eventosFiltrados = eventosFuturos;
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
      checkbox.addEventListener("change", actualizarEventosFiltrados);
    });
  })
  .catch((err) => console.log(err));

/*  


 */
