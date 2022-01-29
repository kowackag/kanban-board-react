import React, {useContext} from 'react';
import {ItemContext, UpdateContext} from './context';

const Task = (props) => {
    const {tasks, columns} = useContext(ItemContext);
    const updateTask = useContext(UpdateContext);
    const removeTask = (item) => {
        const confirmDelete = window.confirm('Czy napewno chcesz usunąć zadanie ?')
        if (confirmDelete === true){
            updateTask(item, 'remove')
        } 
    }

    const moveRight = (item) => {
        const numInNextColumn = countTasksInColumn(Number(item.idColumn)+1);
        const limitInNextColumn = countLimitInColumn(Number(item.idColumn)+1);
        if (numInNextColumn < limitInNextColumn ) {
            updateTask(item, 'moveRight');
        } else(alert('Zbyt duże obciążenie zadań'))
    }

    const countTasksInColumn = (id) => {
        const numberTasksInColumn = tasks.filter(item => Number(item.idColumn)=== Number(id)).length;
        return numberTasksInColumn;
    }

    const countLimitInColumn = (id) => {
        const limitTasksInColumn = columns.find(item => item.id==Number(id)).limit;
        return limitTasksInColumn;
    }

    return(
        <ul className="column__tasks">{props.tasks.map((el) =>
            <li className = "task" key = {el.id}>
                <h4 className = "task__title">{el.name}</h4>
                <p className="task__user">{el.user}</p>
                <p className="task__date"> {el.deadline}</p>
                {el.idColumn < columns.length && <button className = "task__done btn" onClick = {() => moveRight(el)}><i className="fas fa-check"></i></button>}
                <button className = "task__remove btn" onClick = {() => removeTask(el)}><i className="far fa-trash-alt"></i></button>
            </li>
        )}</ul>
    )
}

export default Task;