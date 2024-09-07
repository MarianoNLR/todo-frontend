import './TaskList.css'
import PropTypes from 'prop-types'
import { TaskCard } from '../TaskCard/TaskCard.jsx'
import { useEffect, useState } from 'react'
import api
 from '../../../api.js'
export function TaskList (props) {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const [taskList, setTaskList] = useState(null)

    useEffect(() => {
        api.get('task/', {
            params: {
                orderBy: props.orderBy,
            },
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then(res => {
            setTaskList(res.data.taskList)
            props.setLoadingTaskList(false)
        }) 
    }, [props, user.token])

    if (props.loadingTaskList) {
        return <></>
    }
    
    return (
        <>
         
            {taskList.length > 0 ? (
                <div className="task-list-container">
                    {taskList.map((item, index) => (
                        <TaskCard key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        priority={item.priority}
                        subtasks={item.subtasks}
                        ></TaskCard>
                    ))}
                </div>
            ):(
            <h3>No Hay Tareas</h3>
            )}
        
        </>
    )
}

TaskList.propTypes = {
    loadingTaskList: PropTypes.bool,
    setLoadingTaskList: PropTypes.func,
    orderBy: PropTypes.string
}