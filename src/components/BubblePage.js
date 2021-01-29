import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchBubblesData } from '../api/fetchBubblesData';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getColors = () => {
    fetchBubblesData()
      .then((res) => {
        // console.log("Success Get-Fetch Colors:", res.data);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log("Error Get-Fetch Colors:", err.message);
      })
  };

  // Summon bubbles to appear
  useEffect(() => {
    getColors()
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
// [x] - 1. Make an axios call to retrieve all color data and push to state on mounting.
