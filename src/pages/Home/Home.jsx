import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import api from '../../../api.js'
import { TaskCard } from "../../components/TaskCard/TaskCard.jsx"
import './Home.css'
import { NewTaskForm } from "../../components/NewTaskForm/NewTaskForm.jsx"

export function Home () {
    const [taskList, setTaskList] = useState([])
    const [taskFormIsVisible, setTaskFormIsVisible] = useState(false)
    const [loadingTaskList, setLoadingTaskList] = useState(true)
    const user = JSON.parse(window.localStorage.getItem('user'))
    useEffect(() => {
        api.get('task/', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then(res => {
            console.log(res)
            setTaskList(res.data.taskList)
            setLoadingTaskList(false)
        }) 
    }, [])

    const toggleTaskForm = () => {
        setTaskFormIsVisible(!taskFormIsVisible);
      };

    const handleNewTaskButton = (e) => {
        console.log("Nueva Tarea")
    }

    return (
        <>
            <main className="main-home">
                <h1>Home</h1>
                <Button variant="contained" color="success" onClick={(e) => toggleTaskForm(e)}>
                Nueva Tarea
                </Button>
                <div className="task-list-container">
                    {taskList.length > 0 ?
                        taskList.map((item, index) => (
                            <TaskCard key={index} 
                            title={item.title}
                            description={item.description}
                            deadline={item.deadline}
                            priority={item.priority}
                            subtasks={item.subtasks}
                            ></TaskCard>
                        ))
                    :
                    <h3>No Hay Tareas</h3>
                    }
                </div>
                {taskFormIsVisible && <NewTaskForm setLoadingTaskList={setLoadingTaskList} user={user}></NewTaskForm>}
            </main>
        </>
    )
}