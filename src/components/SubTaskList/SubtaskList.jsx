import { useEffect, useState } from 'react'
import './SubtaskList.css'
import PropTypes from 'prop-types'

export function SubtaskList (props) {
    return (
        <>
            <div>
                {props.subtasks.map((item, index) => (
                    <div key={index}>
                        {item.description}
                    </div>
                ))}
            </div>
        </>
    )
}

SubtaskList.propTypes = {
    subtasks: PropTypes.array
}