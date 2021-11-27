import React, {useContext} from 'react';
import {ItemContext, UpdateContext} from './context';
import {v4 as uuid} from 'uuid';

const Task = (props) => {
    const {tasks, columns} = useContext(ItemContext);
    const updateData = useContext(UpdateContext);
    const removeTask = (item) => {
        updateData(item, 'remove')
    }

    const moveRight = (item) => {
        const numInNextColumn = countTasksInColumn(Number(item.idColumn)+1);
        const limitInNextColumn = countLimitInColumn(Number(item.idColumn)+1);
        if (numInNextColumn < limitInNextColumn ) {
            updateData(item, 'moveRight');
        } else(alert('Zbyt duże obciążenie zadań'))
    }

    const countTasksInColumn = (id) => {
        const numberTasksInColumn = tasks.filter(item => Number(item.idColumn) === Number(id)).length;
        return numberTasksInColumn;
    }

    const countLimitInColumn = (id) => {
        const limitTasksInColumn = columns.find(item => item.id === Number(id)).limit;
        return limitTasksInColumn;
    }

    return(
        <ul>{props.tasks.map((el) =>
            <li key = {uuid()}>
                <h4>{el.name}</h4>
                <button onClick = {() => moveRight(el)}>move</button>
                <button onClick = {() => removeTask(el)}>Usuń</button>
                <p>{el.user}</p>
                <p>{el.deadline}</p>
            </li>
        )}</ul>
    )
}

export default Task;
