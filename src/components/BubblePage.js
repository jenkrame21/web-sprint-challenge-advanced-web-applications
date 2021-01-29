import React, { useEffect, useState } from "react";
import axiosWithAuth from './../helpers/axiosWithAuth';
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // Summon bubbles to appear
  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
        .then((res) => {
          // Bubble data appears on server side
          // console.log("Success Get BubblesPage:", res.data);
          // Bubble data appears on client side
          setColorList(res.data);
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
