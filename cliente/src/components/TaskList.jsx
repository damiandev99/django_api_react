import { useEffect, useState } from 'react';
import { getAllTask } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        
        async function loadTask() {
            const res = await getAllTask()
            //! Le llamamos .data porque la consulta que devuleve el getAllTask se llama data, es la propiedad que viene por defecto al momento de consultar
            setTasks(res.data);
        }
        loadTask();

    }, [])

    return <div>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div>;

}
