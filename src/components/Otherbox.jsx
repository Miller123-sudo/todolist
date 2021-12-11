import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import todoReducer from './../reducers/TodoReducer';


const Otherbox = () => {
    const list1 = useSelector((state) => state.todoReducer.list1);
    const dispatch = useDispatch();
    console.log(list1);

    return (
        <div style={{ width: "30%", border: "1px solid black" }}>
            {
                list1.map((el) => {

                    return (
                        <div key={el.id}>
                            <h3>{el.data}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Otherbox;
