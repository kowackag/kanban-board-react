import React from 'react';
import Task from './Task';
const Column = () => {
    const tasks = JSON.parse(localStorage.getItem("tasksList"));
    const columns = JSON.parse(localStorage.getItem("columnsList"))
    return (
        <>
            <ul>
                {columns.map(el=>
                <li>
                    <h3>{`${el.name}`}</h3>
                    <Task tasks ={tasks.filter(task => task.idColumn === el.id)}/>
                </li>)} 
            </ul>
        </>
    )
}

export default Column;