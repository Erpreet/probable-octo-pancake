const toDosReducer = (state = [], action ) => {
    switch(action.type){
        case 'ADD NEW TO DO':
            const newTask = {
                task: action.payload

            }
            const newToDoList = [...state];
            newToDoList.push(newTask);
            return newToDoList;
            default:
                return state;
    }

}

export default toDosReducer;