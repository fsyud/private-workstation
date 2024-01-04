import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import note_icon from "@assets/note.svg";
import delete_icon from "@assets/delete.svg";
import storage from "@utils/tools/storage";

import "./../NewTab.css";

const TodoList = React.memo(function StatementElement() {
  const [contentVisible, setContentVisible] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<any[]>(
    storage.get("TODO_LIST") || []
  );
  const [inputValue, setInputValue] = useState<string>("");

  const handleBtnClick = () => {
    setContentVisible(!contentVisible);
  };

  const handleAdd = () => {
    setInputValue("");

    const listData = [
      ...todoList,
      ...[{ key: todoList.length - 1, value: inputValue }],
    ];

    setTodoList(listData);

    storage.set("TODO_LIST", listData);
  };

  const handleDelete = (value: number) => {
    const currentList = todoList.filter((s) => s.key !== value);
    setTodoList(currentList);
    storage.set("TODO_LIST", currentList);
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
                      <Checkbox
                        color="default"
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                      />
                      {s.value}
                    </span>
                    <div
                      className="single_btn"
                      onClick={() => handleDelete(s.key)}
                    >
                      <img src={delete_icon} alt="error" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="todo_footer">
            <TextField
              id="standard-basic"
              value={inputValue}
              style={{ width: '90%' }}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Button variant="contained" onClick={handleAdd}>
              Add
            </Button>
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
