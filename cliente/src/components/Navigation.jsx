import { Link } from "react-router-dom"
// Link reemplaza lo que seria una etiqueta de tipo <a>

export function Navigation() {
    return (
        <div>
            
            <Link to='/tasks'> <h1>Task App</h1></Link> <br/>
            <Link to='/tasks-create'> create Task</Link>
        </div>
    )
}
