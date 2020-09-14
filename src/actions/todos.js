const addNewToDo = toDoContent => {
    return{
        type: 'ADD_NEW_TO_DO', //this is the name of the ACTION
        payload: toDoContent // this is the DATA we are passing through to the reducer
    };
}

const removeToDo = id => {
    return {
        type: 'REMOVE TO DO',
        payload: id
    };

}

export {addNewToDo, removeToDo};