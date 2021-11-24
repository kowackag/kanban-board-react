import React, {useReducer, useContext} from 'react';
import ItemContext from './context';
import {useStorage} from './Hooks'

const Form = () => {

    const init ={
        name: '',
        user: '',
        deadline: ''
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
    const {name, user, deadline} = state;
    // const [task, setTask] = useState([])
    const {tasks} = useContext(ItemContext);
    console.log(state)
    const [getItem, setItem] = useStorage();
    const handleForm = (e) => {
        e.preventDefault();
        const copyTaskList = [...tasks, state];
        console.log("copyTaskList", copyTaskList);
        console.log('state', state)
            // setTask(state);
            // console.log(task)
            dispatch({type: 'reset'});
            // emailjs.sendForm(serviceID, templateID, e.target, userID) 
            //     .then((result) => {
            //         console.log('SUCCESS!', result);
            //     }, (error)=> {
            //         console.log('FAILED...', error.text);
            //     });
        // }
        // const copyErrors = errors.map(error=>{
        //     return {text: error, id: uuid()}});
        // setErr(copyErrors);
        // setTask(state);
    }
    // console.log(task)
    return (
        <>
            <h2>Dodaj zadanie</h2>
            <form onSubmit={(e)=> handleForm(e)}>
                <label htmlFor="name">Nazwa zadania<input name="name" value={name} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <label htmlFor="user">Wykonawca<input name="user" value={user} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <label htmlFor="deadline">Termin realizacji<input name="deadline" value={deadline} onChange={e=>dispatch({type:'change', element: e.target })}/></label>
                <input value= 'Dodaj' type="submit"/>    
            </form>
        </>
    )
}

export default Form;
