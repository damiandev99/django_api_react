import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTask = () => taskApi.get('/')
export const createTask = (task) => taskApi.post('/', task)

