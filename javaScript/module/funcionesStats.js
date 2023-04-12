export  function tabla1Render(primeraTabla,maxAsistencia, minAsistencia, eventoMayorCapacidad) {
   
    
  

    let tabla1 = "";
    tabla1 += `
      <table class="tabla">
        <caption class="caption1">Events statistics</caption>
        <thead>
          <tr>
            <th class="tableth">Events with the highest percentage of attendance</th>
            <th class="tableth">Events with the lowest percentage of attendance</th>
            <th class="tableth">Events with larger capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tabletd" id="tablatd1"> ${maxAsistencia.nombre} ${maxAsistencia.asistencia.toFixed(2)}% </td>
            <td class="tabletd" id="tablatd2">${minAsistencia.evento.name} ${minAsistencia.asistencia.toFixed(2)}%</td>
            <td class="tabletd" id="tablatd3">${eventoMayorCapacidad.name} capacity: ${eventoMayorCapacidad.capacity}</td>
          </tr>
        </tbody>
      </table>
    `;
    primeraTabla.innerHTML = tabla1;
  }
    

  export function tabla3Render(terceraTabla,categoriasEventosFuturos) {
    let tabla3 = "";
    tabla3 += `
      <table class="tabla1">
        <caption class="caption3">Upcoming events statistics by category</caption>
        <thead>
          <tr>
            <th class="tableth1">
              Categories
            </th>
            <th class="tableth1">
              Revenues
            </th>
            <th class="tableth1">
              Percentage of attendance
            </th>
          </tr>
        </thead>
        <tbody>
    `;
  
    for (const categoria in categoriasEventosFuturos) {
      const categoriaStats = categoriasEventosFuturos[categoria];
      const gananciasTotales = categoriaStats.gananciasTotal;
  
      const asistenciaPromedio = categoriaStats.asistenciaTotal / categoriaStats.cantidadEventos;
  
      tabla3 += `
        <tr>
          <td class="tabletd1">
            ${categoria}
          </td>
          <td class="tabletd1">
            $${gananciasTotales}
          </td>
          <td class="tabletd1">
            ${asistenciaPromedio.toFixed(2)}%
          </td>
        </tr>
      `;
    }
  
    tabla3 += `
        </tbody>
      </table>
    `;
  
    terceraTabla.innerHTML = tabla3;
  }
  
  export function tabla2Render(segundaTabla,categoriasEventosPasados ) {
    let tabla2 = "";
    tabla2 += `
      <table class="tabla1">
        <caption class="caption2">Past events statistics by category</caption>
        <thead>
          <tr>
            <th class="tableth1">
              Categories
            </th>
            <th class="tableth1">
              Revenues
            </th>
            <th class="tableth1">
              Percentage of attendance
            </th>
          </tr>
        </thead>
        <tbody>
    `;
    
    for (const categoria in categoriasEventosPasados) {
      const categoriaStats = categoriasEventosPasados[categoria];
      const asistenciaPromedio = categoriaStats.asistenciaTotal / categoriaStats.cantidadEventos;
  
      
      tabla2 += `
        <tr>
          <td class="tabletd1">
            ${categoria}
          </td>
          <td class="tabletd1" >
            $${categoriaStats.gananciasTotal}
          </td>
          <td class="tabletd1">
            ${asistenciaPromedio.toFixed(2)}%
          </td>
        </tr>
      `;
    }
    
    tabla2 += `
        </tbody>
      </table>
    `;
    
    segundaTabla.innerHTML = tabla2;
  }
  
