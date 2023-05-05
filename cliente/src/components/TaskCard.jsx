
import { useNavigate } from "react-router-dom";

//! Creamos un componente simple para estructurar las tarjetas de las tareas, ventaja de react
export function TaskCard({ task }) {
    const navigate = useNavigate()
    return (
        <div style={{ background: "#101010" }}
            onClick={() => {
            navigate(`/tasks/${task.id}`)
        }} >
            <h1>Nombre de la tarea: {task.title} </h1>
            <p>{task.description}</p>
            <hr/>
        </div>
    )
}