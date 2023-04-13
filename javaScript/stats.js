console.log("hola");
import {
  tabla1Render,
  tabla2Render,
  tabla3Render,
} from "./module/funcionesStats.js";
const url = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
    let eventoDatos = datos;

    const eventosAmazing = eventoDatos.events;
    const eventosPasados = [];
    const eventosFuturos = [];

    for (const evento of eventosAmazing) {
      if (evento.date < eventoDatos.currentDate) {
        eventosPasados.push(evento);
        const asistenciaPorcentaje =
          (evento.assistance / evento.capacity) * 100;
        const eventoAsistencia = {
          nombre: evento.name,
          asistencia: asistenciaPorcentaje,
        };
        eventosPasados.push(eventoAsistencia);
      } else {
        eventosFuturos.push(evento);
      }
    }
    //mayor y menor asistencia
    const maxAsistencia = eventosPasados.reduce((max, evento) => {
      if (max.asistencia === undefined || evento.asistencia > max.asistencia) {
        return evento;
      } else {
        return max;
      }
    });
    const minAsistencia = eventosPasados.reduce((min, evento) => {
      const asistenciaPorcentaje = (evento.assistance / evento.capacity) * 100;
      if (
        asistenciaPorcentaje < min.asistencia ||
        min.asistencia === undefined
      ) {
        return { evento, asistencia: asistenciaPorcentaje };
      } else {
        return min;
      }
    }, {});

    const eventosAsistencia = [maxAsistencia, minAsistencia];
    //eventomayorcapacidad
    const eventoMayorCapacidad = eventosAmazing.sort(
      (a, b) => b.capacity - a.capacity
    )[0];
    console.log(eventoMayorCapacidad);

    const primeraTabla = document.getElementById("tabla1");

    tabla1Render(
      primeraTabla,
      maxAsistencia,
      minAsistencia,
      eventoMayorCapacidad
    );

    //tabla 3 categorias

    const categoriasEventosFuturos = {}; //objeto almacenar las categorias y sus cosaas

    for (const evento of eventosFuturos) {
                                                         //verifica si el evento no tiene la categoria sigue con el siguiente
      if (!evento.category) {
        continue;
      }

      if (!categoriasEventosFuturos[evento.category]) {
                                                                 //verificamos si ya existe evento.category y si no se procede a lo siguiente crear un nuevo coso que se le asigna esos valores
        categoriasEventosFuturos[evento.category] = {
          asistenciaTotal: 0,
          gananciasTotal: 0,
          cantidadEventos: 0,
        };
      }

      const asistenciaPorcentaje = (evento.estimate / evento.capacity) * 100;     //calculamos porcentaje asistencia
      const ganancias = evento.price * evento.estimate;                          //calculamos precio

      categoriasEventosFuturos[evento.category].asistenciaTotal += asistenciaPorcentaje;     //actualiza la el alor de asistencia y se le suma el porcentaje pa mostrarlo    
      categoriasEventosFuturos[evento.category].gananciasTotal += ganancias;                //actualiza las ganancias sumandole las ganancias calculadas 
      categoriasEventosFuturos[evento.category].cantidadEventos += 1;                         //actualiza cantidad de eventos y se le suma 1 para que prosiga con el siguiente
    }

  
    console.log(categoriasEventosFuturos)

    //tabla3
    const terceraTabla = document.getElementById("tabla2");

    tabla3Render(terceraTabla, categoriasEventosFuturos);

    //tabla 2 categorias
    const categoriasEventosPasados = {};

    for (const evento of eventosPasados) {
      if (!evento.category) {
        continue;
      }

      if (!categoriasEventosPasados[evento.category]) {
        categoriasEventosPasados[evento.category] = {
          asistenciaTotal: 0,
          gananciasTotal: 0,
          cantidadEventos: 0,
        };
      }

      const asistenciaPorcentaje = (evento.assistance / evento.capacity) * 100;
      const ganancias = evento.price * evento.assistance;

      categoriasEventosPasados[evento.category].asistenciaTotal +=
        asistenciaPorcentaje;
      categoriasEventosPasados[evento.category].gananciasTotal += ganancias;
      categoriasEventosPasados[evento.category].cantidadEventos += 1;
    }
 
    //tabla 2

    const segundaTabla = document.getElementById("tabla3");

    tabla2Render(segundaTabla, categoriasEventosPasados);
  })

  .catch((err) => console.log(err));
