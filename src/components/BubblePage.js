import React, { useEffect, useState } from "react";
import axiosWithAuth from './../helpers/axiosWithAuth';
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
        .then((res) => {
          console.log("Success Get BubblesPage:", res);
          // setColorList(res.data);
        })
        .catch((err) => {
          console.log("Error Get BubblesPage:", err.message);
        })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
// [] - 1. Make an axios call to retrieve all color data and push to state on mounting.
