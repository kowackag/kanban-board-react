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

    const countTasksInColumn = (id) => {
        const numberTasksInColumn = tasks.filter(item => Number(item.idColumn) === Number(id)).length;
        return numberTasksInColumn;
    }

    const checkIfIsUnderLimit = (newTask, columns) => {
        const {idColumn} = newTask;
        const thatColumn = columns.find((item) => Number(idColumn) === Number(item.id));
        const {id, limit} = thatColumn;
        const tasksInColumn = countTasksInColumn(Number(id))
        return (tasksInColumn<limit) ? true : false
    }

    const handleForm = (e) => {
        e.preventDefault();
        const errors = validateData(state);
        if (errors.length === 0){
            if (checkIfIsUnderLimit(state, columns)) {
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
            <section className='section-form'>
                <h3 className='section-form__title'>Dodaj zadanie</h3>
                <form onSubmit={(e)=> handleForm(e)}>
                    <label htmlFor="name">Nazwa zadania<input className ="form__input" name="name" value={name} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                    <label htmlFor="user">Wykonawca<input className ="form__input" name="user" value={user} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                    <label htmlFor="idColumn">Faza realizacji
                        <select className ="form__input" name="idColumn" value={idColumn} onChange={(e)=>dispatch({type:'change', element: e.target })}>
                            <option name="idColumn" value={0} onChange={e=>dispatch({type:'change', element: e.target })}></option>
                            <option name="idColumn" value={1} onSelect={e=>dispatch({type:'change', element: e.target })}>Do zrobienia</option>
                            <option name="idColumn" value={2} onClick={e=>dispatch({type:'change', element: e.target })}>Analiza</option>
                            <option name="idColumn" value={3} onChange={e=>dispatch({type:'change', element: value })}>Development</option>
                            <option name="idColumn" value={4} onChange={e=>dispatch({type:'change', element: value })}>Testowanie</option>
                            <option name="idColumn" value={5} onChange={e=>dispatch({type:'change', element: value })}>Zakończone</option>
                        </select>
                    </label>
                    <label htmlFor="deadline">Termin realizacji<input className ="form__input" name="deadline" placeholder="RRRR-MM-DD" value={deadline} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                    <input className= "btn" value= 'Dodaj' type="submit"/>    
                </form>
            </section >{
                err.length > 0 && <> 
                <section className="errors">
                <h3 className="errors__title">Wprowadzono błędne dane:</h3>
                <ul>{err.map(({text, id})=><li className="errors__item" key={id}>{text}</li>)}</ul> </section></>
            }
        </>
    )
}

export default Form;
