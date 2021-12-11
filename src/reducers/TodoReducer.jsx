const initialData = {
    list: [],
    list1: [],
    click: false
}

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TO_LIST": {
            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        }
        case "DELETE_TO_LIST": {
            // const { id, data } = action.payload;
            const newlist = state.list.filter((el) =>
                el.id !== action.id
            )

            return {
                ...state,
                list: newlist
            }
        }
        case "ADD_OTHER_BOX": {

            const newlist1 = state.list.filter((el) =>
                el.id === action.id
            )
            console.log(...newlist1);

            return {
                ...state,
                list1: [...state.list1, ...newlist1]
            }

        }

        default: return state;
    }
}

export default todoReducer;