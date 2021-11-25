import React from 'react';
import Column from './Column';
import Form from './Form'

const Board = (props)=>{
    const {updateData} = props
    return (
        <>
            <h1>Terminarz zadań</h1>
            <Form updateData={updateData}/>
            <Column/>  
        </>
    )


}


export default Board;