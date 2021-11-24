import React, {useContext} from 'react';
import ItemContext from './context';
import Task from './Task';

const Column = () => {
    const {tasks, columns} = useContext(ItemContext);
    return (
        <ul>
            {columns.map(el=>
            <li>
                <h3>{`${el.name}`}</h3>
                <Task tasks = {tasks.filter(task => task.idColumn === el.id)}/>
            </li>)} 
        </ul>
    )
}

export default Column;