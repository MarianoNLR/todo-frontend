import { useEffect, useState } from 'react'
import './SubtaskList.css'
import PropTypes from 'prop-types'
import { SubtaskCard } from '../SubtaskCard/SubtaskCard'

export function SubtaskList (props) {
    return (
        <>
            <div className='subtask-list-container'>
                {props.subtasks.map((item, index) => (
                    <SubtaskCard key={index} subtask={item}></SubtaskCard>
                ))}
            </div>
        </>
    )
}

SubtaskList.propTypes = {
    subtasks: PropTypes.array
}