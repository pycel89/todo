import "./style.css"
import React, { useState } from "react";
import status from "../../utils/const"
import InputTodo from "../inputToDo/InputToDo"


const Todo = (props) => {
    const [visibleForm, setVisibleForm] = useState(false);
    
    const handleClickDel = () => {
        props.funDel(props.children._id)
    }
    const handleClickEdit = () =>
    {
        props.funCloseNew(false)
        
        setVisibleForm(true)
    }
    const handleSave = (temp) =>
    {
        props.funEdit({_id:props.children._id,...temp})
        setVisibleForm(false)

    }

    return(
        <>
                {visibleForm ? (
            <InputTodo funSave={handleSave} funVisible={setVisibleForm}>{{title:props.children.title,description:props.children.description,status:props.children.status,h2:"Редактирование записи"}}</InputTodo>
          ) : (
        <div className={"card "+status[props.children.status].background}>
            <h2>{props.children.title}</h2>
            <p>{props.children.description}</p>
            <p>{status[props.children.status].stat}</p>
            <div className="blockbutton">
            <button className="test" onClick={handleClickEdit}>Редкактировать</button>
            <button className="test" onClick={handleClickDel}>Удалить</button>
            </div>
        </div>
          )
        }
        </>

    )
}


export default Todo;