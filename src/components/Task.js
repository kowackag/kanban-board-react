import React, {useContext} from 'react';
import {UpdateContext} from './context';
import {v4 as uuid} from 'uuid';

const Task = (props) => {
    const updateData = useContext(UpdateContext);
    const removeTask = (item) => {
        updateData(item, 'remove')
    }

    const moveRight = (item) => {
        const copyTask = {...item, idColumn: item.idColumn + 1 }
        updateData(copyTask, 'add')
        updateData(item, 'remove');
    }

    return(
        <ul>{props.tasks.map((el) =>
            <li key = {uuid()}>
                <h4>{el.name}</h4>
                <button onClick = {() => moveRight(el)}>move</button>
                <button onClick = {() => removeTask(el)}>Usuń</button>
                <p>{el.user}</p>
                <p>{el.id}</p>
            </li>
        )}</ul>
    )
}

export default Task;
