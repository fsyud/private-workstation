import React, { useState } from "react";
import note_icon from "@assets/note.svg";

import "./../NewTab.css";

const TodoList = React.memo(function StatementElement() {
  const [contentVisible, setContentVisible] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleBtnClick = () => {
    setContentVisible(!contentVisible);
  };

  const handleAdd = () => {
    setInputValue("");
    setTodoList([
      ...todoList,
      ...[{ key: todoList.length - 1, value: inputValue }],
    ]);
  };

  const handleDelete = (value: number) => {
    const currentList = todoList.filter((s) => s.key !== value);
    setTodoList(currentList);
  };

  return (
    <div className="todo_list">
      {contentVisible && (
        <div className="todo_content">
          <div className="todo_main">
            <ul>
              {todoList.map((s) => {
                return (
                  <li key={s.key}>
                    <span>
                      <img src={note_icon} alt="error" />
                      {s.value}
                    </span>
                    <div
                      className="single_btn"
                      onClick={() => handleDelete(s.key)}
                    >
                      delete
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="todo_footer">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="todo_add" onClick={handleAdd}>
              Add
            </div>
          </div>
        </div>
      )}

      <div className="todo_btn" onClick={handleBtnClick}>
        Todo
      </div>
    </div>
  );
});

export default TodoList;
