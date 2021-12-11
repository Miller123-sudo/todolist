import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addTodo, deleteTodo, removeTodo } from './../actions/Action';
import todoReducer from './../reducers/TodoReducer';
import Additem from './Additem';
import Otherbox from './Otherbox';


import './todo.css';

export const Todo = () => {
    const [inputData, setinputData] = useState('');

    const list = useSelector((state) => state.todoReducer.list);
    // const click = useSelector((state) => state.todoReducer.click);
    const list1 = useSelector((state) => state.todoReducer.list1);

    const dispatch = useDispatch();

    return (
        <div>
            <div className="main_div">
                <div className="child_div">
                    <figure style={{ display: "flex", justifyContent: "center" }}>
                        <figcaption><b style={{ fontSize: 20, fontWeight: 'bolder' }}>Todo List</b></figcaption>
                    </figure>
                    <figure style={{ display: "flex", justifyContent: "center" }}>
                        <figcaption>Add your list here 👇</figcaption>
                    </figure>
                    <div className="add_items" style={{ display: "flex", justifyContent: "center" }}>
                        <input type="text" placeholder="✍️ Add items...."
                            value={inputData}
                            onChange={(e) => { setinputData(e.target.value) }}
                        />
                        <button className="add_btn" onClick={() => dispatch(addTodo(inputData), setinputData(''))
                        }>Add</button>
                    </div>
                    {/* {
                        list.map((el) => {
                            return (
                                <div key={el.id} style={{ border: "1px solid black" }}>
                                    <h3>{el.data}</h3>
                                    <div className="delete_btn_container">
                                        <button className="delete_btn" onClick={() => dispatch(deleteTodo(el.id))}>delete</button>
                                    </div>
                                </div>
                            )
                        })
                    } */}
                    <div style={{ display: "flex", justifyContent: "center", margin: 3 }}><Additem /></div>

                </div>
            </div>
            {/* <Otherbox /> */}
        </div >
    )
}

export default Todo;
