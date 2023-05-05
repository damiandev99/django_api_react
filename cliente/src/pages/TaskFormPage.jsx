import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/task.api";
//! Use paramr es para traer o ver los datos de la url y de esta manera poder ocultar el boton de delete y ver si viene el id de la tarea y mostrar el boton, caso contrario no
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate()
    const params = useParams()



    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Tarea actualizada', {
                position: 'bottom-right',
                style: {
                    background: '#202020',
                    color: '#fff'
                }
            })
        } else {
            await createTask(data)
            toast.success('Tarea creada', {
                position: 'bottom-right',
                style: {
                    background: '#202020',
                    color: '#fff'
                }
            })
        }
        navigate("/tasks")

    });
    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data: { title, description } } = await getTask(params.id)
                setValue('title', title)
                setValue('description', description)

            }
        }
        loadTask()
    }, [])
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
            {
                params.id && <button onClick={async () => {
                    const accepted = window.confirm('Are you sure?')
                    if (accepted) {
                        await deleteTask(params.id)
                        toast.success('Tarea eliminada', {
                            position: 'bottom-right',
                            style: {
                                background: '#202020',
                                color: '#fff'
                            }
                        })
                        navigate("/tasks")
                    }
                }}>Delete</button>
            }



        </div>
    )
}

