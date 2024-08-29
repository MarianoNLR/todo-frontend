import PropTypes from 'prop-types'
import './TaskCard.css'
import { differenceInDays } from 'date-fns'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function TaskCard (props) {
    const navigate = useNavigate()
    const getDifferenceDays = () => {
        const difference = differenceInDays(new Date(props.deadline), new Date())
        
        if (difference >= 7) {
            return "green"
        }
        else if (difference >= 3) {
            return "yellow"
        }
        else {
            return "red"
        }
    }

    const handleClickTask = (e) => {
        e.preventDefault()
        navigate(`/task/${props.id}`)
    }
    return (
        <>
            <div className={`task-card-wrapper ${getDifferenceDays()}`} onClick={(e) => handleClickTask(e)}>
                <div className="card-title-wrapper">{props.title}</div>
                <div className="card-description-wrapper">
                    {props.description}
                </div>
                <div className='card-deadline-wrapper'>
                    {props.deadline.split("T")[0]}
                </div>
                <div className='card-footer-wrapper'>
                    Subtareas: {props.subtasks.length}
                </div>
            </div>
        </>
    )
}

TaskCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    deadline: PropTypes.string,
    subtasks: PropTypes.array
}