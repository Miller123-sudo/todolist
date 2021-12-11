import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import todoReducer from './../reducers/TodoReducer';

import { addTodo, deleteTodo, removeTodo, addOtherBoxTodo } from './../actions/Action';

export const Additem = () => {

    const list = useSelector((state) => state.todoReducer.list);
    // const list1 = useSelector((state) => state.todoReducer.list1);
    console.log(list);
    const dispatch = useDispatch();

    return (
        <div style={{ width: "30%", height: "20%" }}>
            {
                list.map((el) => {
                    return (
                        <div key={el.id} style={{ border: "1px solid black", display: "flex", justifyContent: "space-between", marginTop: 3 }}>
                            <h3>{el.data}</h3>
                            <div className="delete_btn_container">
                                <button className="delete_btn" style={{ marginTop: "20px" }}
                                    onClick={() => dispatch(deleteTodo(el.id))}>delete</button>
                                {/* <button className="delete_btn" style={{ marginTop: "20px" }}
                                    onClick={() => dispatch(addOtherBoxTodo(el.id))}>Add in other box</button> */}
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Additem;