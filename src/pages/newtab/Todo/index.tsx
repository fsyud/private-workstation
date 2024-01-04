import React, { useState, useCallback } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import _cloneDeep from "lodash/cloneDeep";
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
      ...[{ key: todoList.length, value: inputValue, checked: false }],
    ];

    setTodoList(listData);

    storage.set("TODO_LIST", listData);
  };

  const handleDelete = (value: number) => {
    const currentList = todoList.filter((s) => s.key !== value);
    setTodoList(currentList);
    storage.set("TODO_LIST", currentList);
  };

  const handleChangeChecked = useCallback(
    (value: boolean, key: number) => {
      const currentTodoList = _cloneDeep(todoList);

      currentTodoList.forEach((s) => {
        if (s.key === key) {
          s.checked = value;
        }
      });
      setTodoList(currentTodoList);
      storage.set("TODO_LIST", currentTodoList);
    },
    [todoList]
  );

  return (
    <div className="todo_list">
      {contentVisible && (
        <div className="todo_content">
          <img className="todo_head_img" src={note_icon} alt="error" />
          <div className="todo_main">
            <ul>
              {todoList.map((s) => {
                return (
                  <li key={s.key}>
                    <TodoListLine
                      value={s.value}
                      checked={s.checked}
                      handleChangeChecked={(value) =>
                        handleChangeChecked(value, s.key)
                      }
                    />
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
              style={{ width: "76%" }}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={handleAdd}
            >
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

const TodoListLine = React.memo(function TodoListLine({
  value,
  checked,
  handleChangeChecked,
}: {
  value: string;
  checked: boolean;
  handleChangeChecked: (params: boolean) => void;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Checkbox
        color="default"
        value={checked}
        onChange={() => {
          handleChangeChecked && handleChangeChecked(!checked);
        }}
        inputProps={{
          "aria-label": "checkbox with default color",
        }}
      />
      <span className={`text_normal ${checked && "have_line"}`}>{value}</span>
    </div>
  );
});

export default TodoList;
