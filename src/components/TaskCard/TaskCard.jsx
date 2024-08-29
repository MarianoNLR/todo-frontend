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
                
            </div>
        </>
    )
}

TaskCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}