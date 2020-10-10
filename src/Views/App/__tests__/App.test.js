import React from "react";
import { render, screen } from "../../../Utils/test-utils";
import App from "../App";

it("renders without crashing", () => {
  render(<App />);

  expect(
    screen.getByText(
      /Welcome all bookworms! Here you will find books from all around the world! Hope you'll enjoy it/i
    )
  ).toBeInTheDocument();
  expect(screen.getByText(/Open Search Filters/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset/i)).toBeInTheDocument();
});
