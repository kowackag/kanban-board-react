import React, {useContext} from 'react';
import {ItemContext} from './context';
import Task from './Task';
import {v4 as uuid} from 'uuid';
// import '../styles/Column.css';

const Column = () => {
    const {tasks, columns} = useContext(ItemContext);
    return (
        <section className ="kanban-board">
            <h2 className ="kanban-board__title">Kanban</h2>
            <div> </div>
            <ul className ="kanban-board__column">
                {columns.map(el=>
            
                <li className ="column" key ={uuid()}>
                <h3 className ="column__title">{`${el.name}`}</h3>
                <Task tasks = {tasks.filter(task => task.idColumn == el.id)}/>
                </li>
            )} 
        
        </ul>
        </section>
    )
}

export default Column;