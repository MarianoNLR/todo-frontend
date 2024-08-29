import { useEffect, useState } from 'react'
import './TaskView.css'
import api from '../../../api.js'
import { useParams } from 'react-router-dom'
export function TaskView () {
    const {taskId} = useParams()
    const user = JSON.parse(window.localStorage.getItem('user'))
    const [task, setTask] = useState(null)
    const [loadingTask, setLoadingTask] = useState(true)
    useEffect(() => {
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
    }, [])
 
    return (
        <>
            <main className="task-view-main">
                <div className='task-container'>
                    <div className='task-details-container'>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                        <p>{task.deadline.split("T")[0]}</p>
                    </div>
                </div>
            </main>
        </>
    )

}