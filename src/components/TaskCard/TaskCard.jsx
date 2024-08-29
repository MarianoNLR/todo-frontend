import PropTypes from 'prop-types'
import './TaskCard.css'

export function TaskCard (props) {
    return (
        <>
            <div className="task-card-wrapper">
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
    title: PropTypes.string,
    description: PropTypes.string,
    deadline: PropTypes.string,
    subtasks: PropTypes.array
}