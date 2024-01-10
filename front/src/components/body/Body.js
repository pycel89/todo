import "./style.css";
import React, { useEffect, useState } from "react";
import InputTodo from "../inputToDo/InputToDo";
import { newToDo, getToDo,delToDo,pathToDo } from "../../http/Api";
import Todo from "../todo/Todo";

const Body = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [toDoInfo, setToDoInfo] = useState([]);

  const getInfo = () => {
     getToDo().then((data) => {
      setToDoInfo(data);
    });
  };

  const addToDo = async (temp) => {
    const data = await newToDo(temp);
    setToDoInfo([...toDoInfo,data])
  };

  const deleteToDo= async (temp) => {
    const data = await delToDo(temp)

    setToDoInfo([...toDoInfo.filter((el)=>el._id!==data._id)])

  };
  const editToDo= async (temp) => {
    await pathToDo(temp)
    setToDoInfo([...toDoInfo.map((el)=>(el._id===temp._id)?temp:el)])
  };
  

  const handleClickAdd = () => {
    setVisibleForm(true);
  };

  useEffect(getInfo, []);

  return (
    <main>
      {visibleForm ? (
        <InputTodo funSave={addToDo} funVisible={setVisibleForm}>{{title:"",description:"",status:0,h2:"Новая запись"}}</InputTodo>
      ) : (
        <button onClick={handleClickAdd}>Добавить</button>
      )}
      <div className="list">
        {toDoInfo.map((el) => (
          <Todo key={el._id} funDel={deleteToDo} funEdit={editToDo} funCloseNew={setVisibleForm}>{el}</Todo>
        ))}
      </div>
    </main>
  );
};

export default Body;
