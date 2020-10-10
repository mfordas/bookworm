import React from "react";
import { render, screen } from "../../../Utils/test-utils";

import Footer from "../index";

it("renders without crashing", () => {
  render(<Footer />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  expect(screen.getByText(/Mateusz Fordas/i)).toBeInTheDocument();
  expect(screen.getByText(/Smashicons/i)).toBeInTheDocument();
});
