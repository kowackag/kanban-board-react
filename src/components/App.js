import React, { useState } from 'react';
import Board from './Board';
import Footer from './Footer';
import { ItemContext, UpdateContext } from './context';
import useStorage from './Hooks';
import '../styles/main.css';

const App = () => {
    const init = {
        columns: [
            { id: 1, name: 'Do zrobienia', limit: 5 },
            { id: 2, name: 'Analiza', limit: 3 },
            { id: 3, name: 'Development', limit: 5 },
            { id: 4, name: 'Testowanie', limit: 3 },
            { id: 5, name: 'Zakończone', limit: 10 },
        ],
        tasks: [],
    };

    const [getItem, setItem] = useStorage();

    const fromLocalStorage = getItem('data') || init;

    const [data, setData] = useState(fromLocalStorage);
    const { columns, tasks } = data;

    const updateData = item => {
        setData(item);
        setItem(item, 'data');
    };

    const updateTask = (newTask, action) => {
        if (action === 'add') {
            const updatedData = {
                columns,
                tasks: [...tasks, newTask],
            };
            updateData(updatedData);
        } else if (action === 'remove') {
            const updatedData = {
                columns,
                tasks: tasks.filter(item => item.id !== newTask.id),
            };
            updateData(updatedData);
        } else if (action === 'moveRight') {
            const copyTask = { ...newTask, idColumn: Number(newTask.idColumn) + 1 };
            const updatedData = {
                columns,
                tasks:
                    tasks &&
                    tasks.map(item => {
                        if (item.id === newTask.id) {
                            return copyTask;
                        } else {
                            return item;
                        }
                    }),
            };
            updateData(updatedData);
        }
    };

    return (
        <ItemContext.Provider value={data}>
            <UpdateContext.Provider value={updateTask}>
                <Board />
                <Footer />
            </UpdateContext.Provider>
        </ItemContext.Provider>
    );
};

export default App;
