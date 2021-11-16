import React, {useReducer} from 'react';

const Form = () => {

    const init ={
        name: '',
        user: '',
        deadline: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
        // case 'reset':
        //     return init;
        case 'change':
            const {name, value} = action.element;
            return {...state, [name]:value};
        default:
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const {name, user, deadline} = state;

    return (
        <>
            <h2>Dodaj zadanie</h2>
                <form >
                    <label htmlFor="name">Nazwa zadania<input name="name" value={name}onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                    <label htmlFor="user">Wykonawca<input name="user" value={user}/></label>
                    <label htmlFor="deadline">Termin realizacji<input name="deadline" value={deadline}/></label>
                    <input value= 'Dodaj' type="submit"/>    
                </form>
        </>
    )
}

export default Form;
