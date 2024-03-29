import React, { useState, useContext, useEffect } from 'react';
import { ItemContext } from './context';
import Task from './Task';

const Column = () => {
    const { tasks, columns } = useContext(ItemContext);
    const [columnList, setColumnList] = useState(columns);

    useEffect(() => {
        setColumnList(columns);
    }, [columns]);

    return (
        <section className="kanban-board">
            <h2 className="kanban-board__title">Kanban</h2>
            <ul className="kanban-board__column">
                {columnList &&
                    columnList.length &&
                    columnList.map(el => (
                        <li className="column" key={el.id}>
                            <h3 className="column__title">{`${el.name}`}</h3>
                            <Task tasks={tasks.filter(task => Number(task.idColumn) === Number(el.id))} />
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default Column;
