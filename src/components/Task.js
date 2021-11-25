import React from 'react';

const Task = (props) => {
    const {tasks} = props;
    return(
        <ul>{tasks.map((el) =>
            <li>
                <h4>{el.name}</h4>
                <p>{el.user}</p>
                <p>{el.deadline}</p>
            </li>
        )}</ul>
    )
}

export default Task;
