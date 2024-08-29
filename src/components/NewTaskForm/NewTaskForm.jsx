import { useState } from 'react'
import './NewTaskForm.css'
import api from '../../../api.js'

export function NewTaskForm ({setLoadingTaskList, user}) {
    const today = new Date().toISOString().split('T')[0]
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [deadline, setDeadline] = useState(null)

    const handleSubmitTaskForm = (e) => {
        e.preventDefault()
        api.post('task/', {
            title,
            description,
            priority,
            deadline
        },
        {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then(res => {
            setLoadingTaskList(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangePriority = (e) => {
        setPriority(e.target.value)
    }

    const onChangeDeadline = (e) => {
        setDeadline(e.target.value)
    }

    return (
        <>
            <div className='new-task-wrapper'>
                <div className="new-task-container">
                    <form className="new-task-form">
                        <div className='close-button-wrapper'><button className='close-button'>X</button></div>
                        <h2>Nueva Tarea</h2>
                        <input type="text" placeholder='Titulo' onChange={e =>onChangeTitle(e)}/>
                        <textarea rows={5} name="description" id="description" placeholder='Descripcion de la tarea' onChange={e => onChangeDescription(e)}></textarea>
                        <select name="priority" id="priority" onChange={e => onChangePriority(e)}>
                            <option value="Seleccionar" selected>Prioriodad</option>
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baja">Baja</option>
                        </select>
                        <input type="date" name="deadline" id="deadline" min={today} onChange={e => onChangeDeadline(e)}/>
                        <input type="submit" value="Guardar" onClick={(e)=> handleSubmitTaskForm(e)}/>
                    </form>
                </div>
            </div>
        </>
    )
}