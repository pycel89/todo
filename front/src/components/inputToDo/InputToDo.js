import statusArr from "../../utils/const";
import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState(props.children.title);
  const [description, setDescription] = useState(props.children.description);
  const [status, setStatus] = useState(props.children.status);

  const handleClickOk = () => {
    props.funSave({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus(0);
    props.funVisible(false);
  };
  const handleClickCancel = () => {
    setTitle("");
    setDescription("");
    setStatus(0);
    props.funVisible(false);
  };
  return (
    <div className="card gray">
      <h2>{props.children.h2}</h2>
      <div>
        <label for="title">Заголовок:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label for="description">Описание:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label for="status">Статус:</label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusArr.map((el, index) => (
            <option key={index} value={index}>
              {el.stat}
            </option>
          ))}
        </select>
      </div>
      <div className="blockbutton">
        <button onClick={handleClickOk}>Сохранить</button>
        <button onClick={handleClickCancel}>Отменить</button>
      </div>
    </div>
  );

};

export default InputTodo;
