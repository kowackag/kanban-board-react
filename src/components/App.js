import React, {useState} from 'react';
import Board from './Board'
import Footer from './Footer'
// const [getItem, setItem] = useStorage()

const App = () => {

const init = {
    column: [
        {id: 1, name: 'To do', limit: 5},
        {id: 2, name: 'Analysis - Doing', limit: 5},
        {id: 3, name: 'Analysis - Done', limit: 5},
        {id: 4, name: 'Development - Doing', limit: 5},
        {id: 5, name: 'Development - Done', limit: 5},
        {id: 6, name: 'Test', limit: 5},
        {id: 7, name: 'Complete', limit: 1000},
    ], 
    
    tasks: [
        {id: 1, 
        name:'kanban',
        idColumn: 1,
        user: 'Ania'},
        {id: 2, 
        name:'kanban2',
        idColumn: 3,
        user: 'Tomek'},
        {id: 3, 
        name:'kanban',
        idColumn: 5,
        user: 'Gosia'}
    ]
}

const [state, setState] = useState(init);
console.log(state.column)

localStorage.setItem("tasksList", JSON.stringify(state.tasks))
localStorage.setItem("columnsList", JSON.stringify(state.column))
// const [state, dispatch] = useReducer (reducer, init)

    return (
        <> 
            <Board/>
            <Footer/>
        </>
    )
}

export default App;