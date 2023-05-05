
import { useNavigate } from "react-router-dom";

//! Creamos un componente simple para estructurar las tarjetas de las tareas, ventaja de react
export function TaskCard({ task }) {
    const navigate = useNavigate()
    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer"
            onClick={() => {
            navigate(`/tasks/${task.id}`)
        }} >
            <h1 className="font-bold uppercase" >Nombre de la tarea: {task.title} </h1>
            <p className="text-slate-400">{task.description}</p>
            <hr/>
        </div>
    )
}
