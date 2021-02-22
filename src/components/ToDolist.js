import React from "react";
import { useState } from "react";
import "./../styles/App.css";

const ToDoLists = (props) => {
  const [editInput, setEditInput] = useState("");
  const [addInEdit, setAddInEdit] = useState({
    show: false,
  });

  const EditItem = () => {
    console.log("edit");
    setAddInEdit({ show: true });
  };
  const funEditUpdate = (event) => {
    setEditInput(event.target.value.trim());
  };
  return (
    <>
      <div className="todo_style">
        <button
          className={props.classNameDelete}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li className={props.className}>{props.text}</li>
        {addInEdit.show ? (
          <>
            <br />
            <input type="text" placeholder="Edit" onChange={funEditUpdate} />
            <button
              onClick={() => {
                props.onEdit(props.id, editInput);
                setAddInEdit({ show: false });
              }}
            >
              +
            </button>
          </>
        ) : (
          <button className={props.classNameEdit} onClick={EditItem}>
            e+
          </button>
        )}
      </div>
    </>
  );
};

export default ToDoLists;
