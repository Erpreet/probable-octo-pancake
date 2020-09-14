import React, { useState } from 'react';
import {connect} from 'react-redux';

function ToDos (props)
{
    const [newTask, setnewTask] = useState('');

    const submitToDo = event => {
        event.preventDefault();
    }

    return(
        <>
        <h2>To-Do Form</h2>
        <form onSubmit = {submitToDo}>
            <label htmlFor="task"> Enter new task:</label>
            <input id="task" type="text"  value={newTask} onChange={event => {setnewTask(event.target.value ); } } />
            <input type="submit" value="Add New To-Do" />
        </form>
        <ul></ul>
        </>
    );
}

export default connect(
    state => { return {toDos: state}}
) (ToDos);
