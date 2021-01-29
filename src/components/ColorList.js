import React, { useState } from "react";
import EditMenu from './EditMenu';
import axios from "axios";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        // console.log("Success Put ColorList:", res);
        updateColors(colorToEdit);
      })
      .catch((err) => {
        console.log("Error Put ColorList:", err.message);
      });
  };

  const deleteColor = color => {
    axios
      .delete(`http://localhost:5000/api/colors/${colorToEdit.id}`)
        .then((res) => {
          console.log("Success Delete ColorList:", res);
          updateColors(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.log("Error Delete ColorList:", err.message);
        })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.