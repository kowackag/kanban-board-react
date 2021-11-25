import React, {useReducer, useContext} from 'react';

const Form = (props) => {
    const {updateData}= props;
     const init ={
        name: '',
        user: '',
        deadline: '',
        idColumn: 1
    }

    const reducer = (state, action) => {
        switch (action.type) {
        case 'reset':
            return init;
        case 'change':
            const {name, value, idColumn} = action.element;
            return {...state, [name]:value};
        default:
            return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, init);
    const {name, user, deadline, idColumn} = state;
    const handleForm = (e) => {
        e.preventDefault();
        updateData(state)
        dispatch({type: 'reset'});
    }
    return (
        <>
            <h2>Dodaj zadanie</h2>
            <form onSubmit={(e)=> handleForm(e)}>
                <label htmlFor="name">Nazwa zadania<input name="name" value={name} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <label htmlFor="user">Wykonawca<input name="user" value={user} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <label htmlFor="stage">Faza realizacji
                <select data-placeholder="Faza realizacji" name="stage">
                    <option name="idColumn" value="0"></option>
                    <option name="idColumn" value="2">Do zrobienia</option>
                    <option name="idColumn" value="3">Analiza zadania - W trakcie</option>
                    <option name="idColumn" value="4">Analiza zadania - Gotowe</option>
                    <option name="idColumn" value="5">Development - W trakcie</option>
                    <option name="idColumn" value="6">Development - Gotowe</option>
                    <option name="idColumn" value="7">Testowanie</option>
                    <option name="idColumn" value="8">Zakończone</option>
                </select>
                </label>
                <label htmlFor="deadline">Termin realizacji<input name="deadline" value={deadline} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <input value= 'Dodaj' type="submit"/>    
            </form>
        </>
    )
}

export default Form;
