import React, {useReducer, useContext} from 'react';

const Form = (props) => {
    const {updateData}= props;
     const init ={
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
            console.log(action.element)
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
                <ul>
                    
                </ul>
            </section>
        </>
    )
}

export default Form;
