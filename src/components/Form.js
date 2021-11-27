import React, {useReducer, useContext, useState} from 'react';
import {ItemContext, UpdateContext} from './context';
import {validateData} from './validateData';
import {v4 as uuid} from 'uuid';

const Form = () => {

     const init ={
        id: uuid(),
        name: '',
        user: '',
        deadline: '',
        idColumn: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
        case 'reset':
            return init;
        case 'change':
            const {name, value} = action.element;
            return {...state, [name]:value};
        default:
            return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, init);
    const {name, user, deadline, idColumn} = state;
    const [err, setErr] = useState([])
    const {tasks, columns} = useContext(ItemContext);
    const updateData = useContext(UpdateContext);

    const countTasksInColumn = (tasks, idColumn) => {
        const numberTasksInColumn = tasks.filter(item => Number(item.idColumn) === idColumn).length;
        return numberTasksInColumn;
    }

    const checkIfIsUnderLimit = (tasks, newTask, columns) => {
        const {idColumn} = newTask;
        const thatColumn = columns.find((item) => Number(idColumn) === Number(item.id));
        const {id, limit} = thatColumn;
        const tasksInColumn = countTasksInColumn(tasks, Number(id))
        if (tasksInColumn<limit) {
            return true;
        } else return false
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(state)
        const errors = validateData(state);
        if (errors.length === 0){
            if (checkIfIsUnderLimit(tasks, state, columns)) {
                updateData(state, 'add')
                dispatch({type: 'reset'});
            } else alert('Przekroczono limit zadań w danej Fazie realizacji')
        }
        const copyErrors = errors.map(error=>{
            return {text: error, id: uuid()}});
        setErr(copyErrors);
    }

    return (
        <>
            <h2>Dodaj zadanie</h2>
            <form onSubmit={(e)=> handleForm(e)}>
                <label htmlFor="name">Nazwa zadania<input name="name" value={name} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <label htmlFor="user">Wykonawca<input name="user" value={user} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <label htmlFor="idColumn">Faza realizacji
                <select name="idColumn" value={idColumn} onChange={(e)=>dispatch({type:'change', element: e.target })}>
                    <option name="idColumn" value='0' onChange={e=>dispatch({type:'change', element: e.target })}></option>
                    <option name="idColumn" value='1'onSelect={e=>dispatch({type:'change', element: e.target })}>Do zrobienia</option>
                    <option name="idColumn" value='2' onClick={e=>dispatch({type:'change', element: e.target })}>Analiza - W trakcie</option>
                    <option name="idColumn" value='3' onChange={e=>dispatch({type:'change', element: value })}>Analiza - Gotowe</option>
                    <option name="idColumn" value='4' onChange={e=>dispatch({type:'change', element: value })}>Development - W trakcie</option>
                    <option name="idColumn" value='5'onChange={e=>dispatch({type:'change', element: value })}>Development - Gotowe</option>
                    <option name="idColumn" value='6'onChange={e=>dispatch({type:'change', element: value })}>Testowanie</option>
                    <option name="idColumn" value='7' onChange={e=>dispatch({type:'change', element: value })}>Zakończone</option>
                </select>
                </label>
                <label htmlFor="deadline">Termin realizacji<input name="deadline" value={deadline} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <input value= 'Dodaj' type="submit"/>    
            </form>
            <section>
                <p>Wprowadzono błędne dane:</p>
                {err.length > 0 && <ul>{err.map(({text, id})=><li key={id}>{text}</li>)}</ul>}
            </section>
        </>
    )
}

export default Form;
