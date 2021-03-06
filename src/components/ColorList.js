import React, { useState } from "react";
import EditMenu from './EditMenu';
import axiosWithAuth from './../helpers/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  // console.log("colors props:", colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        // console.log("Success Put ColorList:", res.data);
        updateColors(
          colors.map(color => {
            if (color.id === res.data.id) {
              return res.data;
            } else {
              return color;
            }
          })
        );
      })
      .catch((err) => {
        console.log("Error Put ColorList:", err.message);
      });
  };

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
        .then((res) => {
          // Delete on server end
          // console.log("Success Delete ColorList:", res);
          // Delete on client end
          updateColors(
            colors.filter(color => {
              return color.id !== Number(res.data)
            })
          );
        })
        .catch((err) => {
          console.log("Error Delete ColorList:", err.message);
        });
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
//[x] - 1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//[x] - 2. Complete the deleteColor functions by making a delete request for deleting colors.