import React from "react";
import { render, screen } from "../../../Utils/test-utils";
import BooksList from "../index";

it("renders without crashing", () => {
  render(<BooksList />);

  expect(
    screen.getByText(/Start typing to search for books/i)
  ).toBeInTheDocument();
});
