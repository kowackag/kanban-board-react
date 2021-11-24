import React from 'react';

const init = {
    columns: [
        {id: 1, name: 'To do', limit: 5},
        {id: 2, name: 'Analysis - Doing', limit: 5},
        {id: 3, name: 'Analysis - Done', limit: 5},
        {id: 4, name: 'Development - Doing', limit: 5},
        {id: 5, name: 'Development - Done', limit: 5},
        {id: 6, name: 'Test', limit: 5},
        {id: 7, name: 'Complete', limit: 1000},
    ], 
    
    tasks: [
       
    ]
}

const ItemContext = React.createContext(init);

export default ItemContext;