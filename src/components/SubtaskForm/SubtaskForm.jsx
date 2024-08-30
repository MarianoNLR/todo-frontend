import './SubtaskForm.css'
import api from '../../../api.js'
import { useState } from 'react'

export function SubtaskForm ({toogleSubtaskForm, subtasks, taskId}) {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const [description, setDescription] = useState("")

    const handleSubmitSubtaskForm = (e) => {
        const updateSubtasks = subtasks
        updateSubtasks.push({description, 'status': false})
        e.preventDefault()
        api.patch(`task/${taskId}/newSubtask`, {
            updateSubtasks,
        },
        {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then(res => {
            toogleSubtaskForm()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleCloseForm = (e) => {
        e.preventDefault()
        toogleSubtaskForm()

    }

    return (
        <>
            <div className='subtask-wrapper'>
                <div className="subtask-container">
                    <form className="subtask-form">
                        <div className='close-button-wrapper'>
                            <button className='close-button' onClick={(e) => handleCloseForm(e)}>X</button></div>
                        <h2>Nueva Subtarea</h2>
                        <textarea rows={5} name="description" id="description" placeholder='Descripcion de la tarea' onChange={e => onChangeDescription(e)}></textarea>
                        <input type="submit" value="Guardar" onClick={(e)=> handleSubmitSubtaskForm(e)}/>
                    </form>
                </div>
            </div>
        </>
    )
}