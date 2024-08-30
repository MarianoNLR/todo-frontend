import { Button } from "@mui/material"
import { useEffect, useState } from 'react'
import './TaskView.css'
import api from '../../../api.js'
import { useParams } from 'react-router-dom'
import { SubtaskForm } from "../../components/SubtaskForm/SubtaskForm.jsx"
import { SubtaskList } from "../../components/SubTaskList/SubTaskList.jsx"
export function TaskView () {
    const {taskId} = useParams()
    const user = JSON.parse(window.localStorage.getItem('user'))
    const [task, setTask] = useState(null)
    const [loadingTask, setLoadingTask] = useState(true)
    const [subtaskFormIsVisible, setSubtaskFormIsVisible] = useState(false)

    useEffect(() => {
        if (loadingTask) {
            try {
                api.get(`task/${taskId}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                .then(res => {
                    setTask(res.data.task)
                    setLoadingTask(false)
                })
                .catch(err => {
                    console.log(err)
                })
            } catch (error) {
                console.log(error)
            }
        }   
    }, [loadingTask])

    if (loadingTask) {
        return <>Loading</>
    }

    const toggleSubtaskForm = () => {
        setSubtaskFormIsVisible(!subtaskFormIsVisible);
    };
 
    return (
        <>
            <main className="task-view-main">
                <Button className="add-task-button" variant="contained" color="success" onClick={(e) => toggleSubtaskForm(e)}>
                Agregar
                </Button>
                <div className='task-container'>
                    <div className='task-details-container'>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                        <p>{task.deadline.split("T")[0]}</p>
                    </div>
                </div>
                <SubtaskList subtasks={task.subtasks}></SubtaskList>
                {subtaskFormIsVisible && 
                    <SubtaskForm toogleSubtaskForm={toggleSubtaskForm} taskId={taskId} subtasks={task.subtasks}>
                    </SubtaskForm>
                }
            </main>
        </>
    )

}