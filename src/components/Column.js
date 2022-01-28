import React, {useContext} from 'react';
import {ItemContext} from './context';
import Task from './Task';

const Column = () => {
    const {tasks, columns} = useContext(ItemContext);
    return (
        <section className ="kanban-board">
            <h2 className ="kanban-board__title">Kanban</h2>
            <div> 
            <ul className ="kanban-board__column">
                {columns.map(({id,name})=>
                <li className ="column" key = {id} >
                <h3 className ="column__title">{`${name}`}</h3>
                <Task tasks = {tasks.filter(task => Number(task.idColumn)===Number(id))}/>
                </li>)} 
            </ul>
            </div>
        </section>
    )
}

export default Column;