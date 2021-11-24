import React, {useState, useEffect} from 'react';
import Board from './Board'
import Footer from './Footer'
import ItemContext from './context'
import {useStorage} from './Hooks'
const App = () => {

const init = {
    columns: [
        {id: 1, name: 'To do', limit: 5},
        {id: 2, name: 'Analysis - Doing', limit: 5},
        {id: 3, name: 'Analysis - Done', limit: 5},
        {id: 4, name: 'Development - Doing', limit: 5},
        {id: 5, name: 'Development - Done', limit: 5},
        {id: 6, name: 'Test', limit: 5},
        {id: 7, name: 'Complete', limit: 1000},
    ],   
    tasks: []
}
const [getItem, setItem] = useStorage();
// useEffect ( () => {
//     setItem(init, 'data')
// }, [])
const [data, setData]= useState(getItem('data'));
console.log(data)
const {columns, tasks} =data;

    return (
    
       <ItemContext.Provider value ={data}>
            <Board/>
            <Footer/>
        </ItemContext.Provider>
    )
}

export default App;