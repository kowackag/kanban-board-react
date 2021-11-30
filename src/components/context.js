import React from 'react';

const init = {
    columns: [
        {id: 1, name: 'Do zrobienia', limit: 5},
        {id: 2, name: 'Analiza', limit: 3},
        {id: 3, name: 'Development', limit: 5},
        {id: 4, name: 'Testowanie', limit: 3},
        {id: 5, name: 'Zakończone', limit: 10},
    ],   
    tasks: []
}

const ItemContext = React.createContext();
const UpdateContext = React.createContext();

export {ItemContext, UpdateContext};