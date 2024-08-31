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
    const [orderBy, setOrderBy] = useState('')
    const user = JSON.parse(window.localStorage.getItem('user'))
    useEffect(() => {
        if (loadingTaskList) {
            api.get('task/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            .then(res => {
                setTaskList(res.data.taskList)
                setLoadingTaskList(false)
            }) 
        }
        
    }, [loadingTaskList, user.token])

    const toggleTaskForm = () => {
        setTaskFormIsVisible(!taskFormIsVisible);
      };

    const handleNewTaskButton = (e) => {
        console.log("Nueva Tarea")
    }

    const handleOrderChange = (event) => {
        setOrderBy(event.target.value);
      };

    return (
        <>
            <main className="main-home">
                <div className="controls-wrapper">
                    <div className="order-by-wrapper">
                        <select name="order-by" id="order-by" className="order-by-select">
                            <option value="">Ordenar</option>
                            <option value="">Prioridad</option>
                            <option value="">Fecha Limite</option>
                        </select>
                    </div>
                    <Button className="add-task-button" variant="contained" color="success" onClick={(e) => toggleTaskForm(e)}>
                    Nueva Tarea
                    </Button>
                </div>
                <div className="task-list-container">
                    {taskList.length > 0 ?
                        taskList.map((item, index) => (
                            <TaskCard key={index}
                            id={item.id}
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
                {taskFormIsVisible && 
                    <NewTaskForm setLoadingTaskList={setLoadingTaskList} user={user} toogleTaskForm={toggleTaskForm}>
                    </NewTaskForm>
                }
            </main>
        </>
    )
}