import { useForm } from "react-hook-form";
import { createTask } from "../api/task.api";
//! Use paramr es para traer o ver los datos de la url y de esta manera poder ocultar el boton de delete y ver si viene el id de la tarea y mostrar el boton, caso contrario no
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const params = useParams()
    console.log(params);
    

    const  onSubmit = handleSubmit(async data => {        
        await createTask(data);
        navigate("/tasks")
        
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="text"
                    {...register("title", { required: true })}
                />
                {/*! Manejador de errores */}
                {errors.title && <span>Title is required</span>}

                <textarea rows="3" placeholder="Description"
                    {...register("description", { required: true })}
                ></textarea>
                {errors.description && <span>Description is required</span>}
                <button type="Sumbmit"> Save </button>
            </form>
            <button>Delete</button>

        </div>
    )
}

