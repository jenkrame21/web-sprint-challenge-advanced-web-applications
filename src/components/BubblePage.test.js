import React from "react";
import { render, screen } from "@testing-library/react";
import { BubblePage as mockFetchBubbles } from "./BubblePage";
jest.mock('./../api/fetchBubbles');

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<mockFetchBubbles />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValueOnce({
    data: [
      {color: "Red", code: { hex: "#FF0000" }, id: 20},
      {color: "Yellow", code: { hex: "#FFFF00" }, id: 25}
    ]
  });

  render(<mockFetchBubbles />);

  const deleteColorButton = screen.queryByText(/x/i);
  console.log(deleteColorButton);
});

//Task List
//[] - 1. Setup test for basic rendering of component
//[] - 2. Setup test for initial rendering of bubbles on loading