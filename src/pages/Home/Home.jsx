import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import api from '../../../api.js'
import { TaskCard } from "../../components/TaskCard/TaskCard.jsx"
import './Home.css'
import { NewTaskForm } from "../../components/NewTaskForm/NewTaskForm.jsx"
import { TaskList } from "../../components/TaskList/TaskList.jsx"

export function Home () {
    const [taskFormIsVisible, setTaskFormIsVisible] = useState(false)
    const [orderBy, setOrderBy] = useState('')
    const [loadingTaskList, setLoadingTaskList] = useState(true)
    const user = JSON.parse(window.localStorage.getItem('user'))
    useEffect(() => {
        
        
    }, [user.token])

    const toggleTaskForm = () => {
        setTaskFormIsVisible(!taskFormIsVisible);
      };

    const handleNewTaskButton = (e) => {
        console.log("Nueva Tarea")
    }

    const handleOrderChange = (e) => {
        setOrderBy(e.target.value);
        setLoadingTaskList(true)
      };

    return (
        <>
            <main className="main-home">
                <div className="controls-wrapper">
                    <div className="order-by-wrapper">
                        <select name="order-by" id="order-by" className="order-by-select" onChange={(e) => handleOrderChange(e)}>
                            <option value="">Por defecto</option>
                            <option value="priority">Prioridad</option>
                            <option value="deadline">Fecha Limite</option>
                        </select>
                    </div>
                    <Button className="add-task-button" variant="contained" color="success" onClick={(e) => toggleTaskForm(e)}>
                    Nueva Tarea
                    </Button>
                </div>
                <TaskList setLoadingTaskList={setLoadingTaskList} loadingTaskList={loadingTaskList} orderBy={orderBy}></TaskList>
                {taskFormIsVisible && 
                    <NewTaskForm setLoadingTaskList={setLoadingTaskList} user={user} toogleTaskForm={toggleTaskForm}>
                    </NewTaskForm>
                }
            </main>
        </>
    )
}