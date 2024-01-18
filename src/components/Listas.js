import React from "react";
import Formulario from "./Formulario";
import { useState } from "react";
import Metas from "./Metas.js";

function Lista(){
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
          tarea.texto = tarea.texto.trim();
          const tareasActualizadas = [tarea, ...tareas];
          setTareas(tareasActualizadas);
        }
        console.log("Se agrego una tarea");
    }
    
    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }
    
    const completarTarea = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      setTareas(tareasActualizadas);
      console.log("Tarea Completa");
    }
     
    return (
      <>
        <Formulario onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea) =>
              <Metas
                key={tarea.id}
                id={tarea.id} 
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea} />
            ) 
          }
        </div>
      </>
    );
}
export default Lista;