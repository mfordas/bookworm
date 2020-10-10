import React from "react";
import { render, screen } from '../../../Utils/test-utils';
import SearchBar from '../index';

it("renders without crashing", () => {
  render(<SearchBar />)
  expect(screen.getByText(/Open Search Filters/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset/i)).toBeInTheDocument();
});