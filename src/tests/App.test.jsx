import { getByRole, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App";
import { expect } from "vitest";

// This is a basic test to check if 1 is truthy
// I'm using it to make sure my testing environment is working
describe("test suite test", () => {
  it("should be truthy", () => {
    expect(1).toBeTruthy();
  });
});
