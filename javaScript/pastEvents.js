import { crearMasArticle, generarCheckboxes,filtrarEventosPorBusqueda} from "./module/funcionesPast.js";

const url = 'https://mindhub-xj03.onrender.com/api/amazing';
fetch(url)
  .then(response => response.json())
  .then(datos => 
    {
      let eventoDatos = datos;
  //section 1
 const carta1 = document.getElementById(`section-11`);
 
 const eventosAmazing = eventoDatos.events;
 
 let eventosPasados = [];
 
 for (const evento of eventosAmazing) {
   if (evento.date < eventoDatos.currentDate) {
     eventosPasados.push(evento);
     console.log(evento);
   }
 }
 
 let crearArticle = "";
 for (let i = 0; i < eventosPasados.length; i++) {
   crearArticle += crearMasArticle(eventosPasados[i]);
 }
 
 carta1.innerHTML = crearArticle;
 //hacer funcionar barra de busqueda
 const barraDeBusquedaValor = document.getElementById("search-input");
 filtrarEventosPorBusqueda(eventosPasados)
//crear checkbox
generarCheckboxes(eventosAmazing)
//hacer que funcionen los checkbox
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
      eventosFiltradosCheckbox = eventoDatos.events;
    } else {
      eventosFiltradosCheckbox = eventoDatos.events.filter((evento) => {
        return categoriasSeleccionadas.includes(evento.category);
      });
    }

    
    const carta1 = document.getElementById('section-11');
    carta1.innerHTML = '';
    for (let i = 0; i < eventosFiltradosCheckbox.length; i++) {
      carta1.innerHTML += crearMasArticle(eventosFiltradosCheckbox[i]);
    }
  });
});
//hacer que actuen cruzados
const actualizarEventosFiltrados = () => {
  const busquedaValor = barraDeBusquedaValor.value.toLowerCase();
  const categoriasSeleccionadas = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  let eventosFiltrados = eventosPasados;
  if (busquedaValor) {
    eventosFiltrados = eventosFiltrados.filter((evento) => {
      return evento.name.toLowerCase().includes(busquedaValor) || evento.description.toLowerCase().includes(busquedaValor);
    });
  }
  if (categoriasSeleccionadas.length) {
    eventosFiltrados = eventosFiltrados.filter((evento) => {
      return categoriasSeleccionadas.includes(evento.category);
    });
  }
  const carta1 = document.getElementById('section-11');
  if (eventosFiltrados.length > 0) {
    carta1.innerHTML = '';
    for (let i = 0; i < eventosFiltrados.length; i++) {
      carta1.innerHTML += crearMasArticle(eventosFiltrados[i]);
    }
  } else {
    carta1.innerHTML = '<h2 class ="NoCards">Oops! No events were found with that name. Maybe you wanted to search for another one? 😕</h2>';
  }
};

barraDeBusquedaValor.addEventListener('input', actualizarEventosFiltrados);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', actualizarEventosFiltrados);
}); 
    })

  .catch(err => console.log(err));






