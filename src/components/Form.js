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

    const reducer = (state, {type, element}) => {
        switch (type) {
        case 'reset':
            return init;
        case 'change':
            const {name, value} = element;
            return {...state, [name]:value};
        default:
            return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, init);
    const {name, user, deadline, idColumn} = state;
    const [isActive, setIsActive] = useState(true);
    const [err, setErr] = useState([])
    const {tasks, columns} = useContext(ItemContext);
    const updateTask = useContext(UpdateContext);

    const countTasksInColumn = (id) => {
        const numberTasksInColumn = tasks && tasks.filter(item => Number(item.idColumn) == Number(id)).length;
        return numberTasksInColumn;
    }

    const checkIfIsUnderLimit = (newTask, columns) => {
        const {idColumn} = newTask;
        const thatColumn = columns.find((item) => Number(idColumn) == Number(item.id));
        const {id, limit} = thatColumn;
        const tasksInColumn = countTasksInColumn(Number(id))
        return (tasksInColumn<limit) ? true : false
    }

    const handleForm = (e) => {
        e.preventDefault();
        const errors = validateData(state);
        setIsActive(true);
        if (errors && errors.length === 0){
            if (checkIfIsUnderLimit(state, columns)) {
                updateTask(state, 'add')
                dispatch({type: 'reset'});
            } else alert('Przekroczono limit zadań w danej Fazie realizacji')
        }
        const copyErrors = errors.map(error=>{
            return {text: error, id: uuid()}});
        setErr(copyErrors);
    }
    
    const fields = [
        {name: 'name', value: name, desc: 'Nazwa zadania'},
        {name: 'user', value: user, desc: 'Wykonawca'},
        {name: 'deadline', value: deadline, desc: 'Termin realizacji', placeholder: 'RRRR-MM-DD'},
    ]

    const optionList = [
        {name: 'idColumn', value: 0, title: ''},
        {name: 'idColumn', value: 1, title: 'Do zrobienia'},
        {name: 'idColumn', value: 2, title: 'Analiza'},
        {name: 'idColumn', value: 3, title: 'Development'},
        {name: 'idColumn', value: 4, title: 'Testowanie'},
        {name: 'idColumn', value: 5, title: 'Zakończone'}
    ]
        
    return (
        <section className='section-form'>
            <h3 className='section-form__title'>Dodaj zadanie</h3>
            <form className ="form" onSubmit={(e)=> handleForm(e)}>
                {fields.map(({name, value, desc, placeholder})=><React.Fragment key={name}><label className="form__label">{desc}</label><input className ="form__input" name={name} value={value} placeholder={placeholder} onChange={e=>dispatch({type:'change', element: e.target })}/></React.Fragment> )}
                <label htmlFor="idColumn" className="form__label">Faza realizacji</label>
                <select className ="form__input" name="idColumn" value={idColumn} onChange={(e)=>dispatch({type:'change', element: e.target })}>
                {optionList.map(({name, value, title})=> <option name={name} value={value} key={value} onChange={e=>dispatch({type:'change', element: e.target})}>{title}</option>)}
                </select>
                <input className= "form__btn btn" value= 'Dodaj' type="submit"/> 
            </form>{ 
                (err.length > 0) && isActive && 
                <section className="errors">
                <h3 className="errors__title">Wprowadzono błędne dane:</h3>
                <ul>{err.map(({text, id})=><li className="errors__item" key={id}>{text}</li>)}</ul> <button onClick={()=>setIsActive(false)} className="errors__close">X</button></section>}
        </section >
    )
}

export default Form;
