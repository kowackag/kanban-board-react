import React from 'react';

const init = {
    columns: [
        {id: 1, name: 'Do zrobienia', limit: 5},
        {id: 2, name: 'Analiza - W trakcie', limit: 5},
        {id: 3, name: 'Analiza - Gotowe', limit: 5},
        {id: 4, name: 'Development - W trakcie', limit: 5},
        {id: 5, name: 'Development - Gotowe', limit: 5},
        {id: 6, name: 'Testowanie', limit: 5},
        {id: 7, name: 'Zakończone', limit: 1000},
    ],   
    tasks: []
}

const ItemContext = React.createContext(init);

export default ItemContext;