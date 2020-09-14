import React from 'react';
import {connect} from 'react-redux';
import {removeToDo} from '../actions/todos';

function ToDoList (props)
{
    return(
        <>
        <h2>To-Do List</h2>
        <ul>
    {props.toDos.map( (toDo, index) => <li key={index}> {toDo.task} 
    <button onClick={event => {props.dispatch(removeToDo(toDo.id))}}>Complete-To-Do</button>
    </li> )}
        </ul>
        </>
    );
}

//Use connect to make our "ToDoList" available via props.toDos

export default connect(state => ({toDos: state})) (ToDoList); //(mapping to props) (component)