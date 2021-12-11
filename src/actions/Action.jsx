export const addTodo = (data) => {
    return {
        type: "ADD_TO_LIST",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TO_LIST",
        id: id
    }
}

export const addOtherBoxTodo = (id) => {
    return {
        type: "ADD_OTHER_BOX",
        id: id
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVE_ALL"
    }
}