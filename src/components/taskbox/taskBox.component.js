import React from 'react';

import './taskBox.styles.css';

export const TaskBox = (props) =>{
    return (
        <div className='task-box-list'>{props.children}</div>
    )
}

