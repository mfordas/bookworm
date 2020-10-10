import React from "react";
import { render, screen } from '../../../Utils/test-utils';
import Header from '../index';

it("renders without crashing", () => {
  render(<Header />)
  expect(screen.getByText(/Bookworm/i)).toBeInTheDocument();
});
