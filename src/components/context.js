import React from 'react';

const init = {
    columns: [
        {id: 1, name: 'Do zrobienia', limit: 5},
        {id: 2, name: 'Analiza', limit: 5},
        {id: 3, name: 'Development', limit: 5},
        {id: 4, name: 'Testowanie', limit: 5},
        {id: 5, name: 'Zakończone', limit: 1000},
    ],   
    tasks: []
}

const ItemContext = React.createContext();
const UpdateContext = React.createContext();

export {ItemContext, UpdateContext};