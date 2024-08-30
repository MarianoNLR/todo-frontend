import './SubtaskCard.css'
import PropTypes from 'prop-types'

export function SubtaskCard ({subtask}) {
    return (
            <div className='subtask-card-wrapper'>
                <div className='subtask-description-wrapper'>
                    <p>{subtask.description}</p>
                </div>
                <div className='subtask-status-wrapper'>
                    {subtask.status ? <p>Completado</p>: <p>No Completado</p>}
                </div>
            </div>
    )
}

SubtaskCard.propTypes = {
    subtask: PropTypes.object
}