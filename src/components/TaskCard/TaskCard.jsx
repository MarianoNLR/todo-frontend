import PropTypes from 'prop-types'
import './TaskCard.css'
import { useNavigate } from 'react-router-dom'

export function TaskCard (props) {
    const navigate = useNavigate()
    const BG = [
        "linear-gradient(to right bottom, #7201dc, #954ce7, #b47bf0, #d0a8f8, #ead5ff)",
        "linear-gradient(to right bottom, #7201dc, #8836e2, #9b55e8, #ad70ed, #be8bf2)",
        "linear-gradient(to right bottom, #6200be, #7730c5, #894dcb, #9b67d1, #ab81d6)", 
        ]
    const getBackground = () => {
        const bgIndex = Math.floor(Math.random() * BG.length)
        return BG[bgIndex]
    }

    const handleClickTask = (e) => {
        e.preventDefault()
        navigate(`/task/${props.id}`)
    }
    return (
        <>
            <div style={{backgroundImage: getBackground()}} className={`task-card-wrapper`} onClick={(e) => handleClickTask(e)}>
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