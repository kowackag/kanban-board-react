import React, {useState} from 'react';
import Board from './Board';
import Footer from './Footer';
import {ItemContext, UpdateContext} from './context';
import {useStorage} from './Hooks';
import '../styles/main.css';

const App = () => {

    const init = {
        columns: [
            {id: 1, name: 'Do zrobienia', limit: 5},
            {id: 2, name: 'Analiza', limit: 5},
            {id: 3, name: 'Development', limit: 5},
            {id: 4, name: 'Testowanie', limit: 5},
            {id: 5, name: 'Zakończone', limit: 1000},
        ],    
        tasks: []
    }

    const [getItem, setItem] = useStorage();

    let fromLocalStorage = getItem('data');
    if (fromLocalStorage === null) {
        fromLocalStorage = init; 
    }

    const [data, setData]= useState(fromLocalStorage)
    const {columns, tasks} = data;

    const updateData = (newTask, action) => {
        if (action == 'add') {
                let updatedData = {
                    columns: columns,
                    tasks: [...tasks, newTask]
                }
                setData(updatedData);
                setItem(updatedData, "data");
            } else if (action == 'remove') {
                let updatedData = {
                    columns: columns,
                    tasks: tasks.filter(item=>item.id !== newTask.id)
                }
                setData(updatedData);
                setItem(updatedData, "data"); 
            } 
            else if (action == 'moveRight') {
                console.log(newTask)
                const copyTask = {...newTask, idColumn: Number(newTask.idColumn) + 1}
                console.log('copyTask', copyTask)
                let updatedData = {
                    columns: columns,
                    tasks: tasks.map(item=> {
                        if (item.id == newTask.id)  {
                            return copyTask
                        } else {return item}
                    })
                }
                console.log(updatedData)
                setData(updatedData);
                setItem(updatedData, "data");      
            }  
    }
    
    return (
       <ItemContext.Provider value ={data}>
           <UpdateContext.Provider value ={updateData}>
                <Board/>
                <Footer/>
            </UpdateContext.Provider>
        </ItemContext.Provider>
    )
}

export default App;