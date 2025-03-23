import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";
import { MemoryRouter, useNavigate } from "react-router";
import { expect, vi } from "vitest";

describe("SearchBar functionality", () => {
  // Mocking useNavigate
  vi.mock("react-router", async () => {
    // getting the methods from react-router-dom
    const actual = await vi.importActual("react-router");
    // keeping the original implementation of all exports besides useNavigate
    return {
      ...actual,
      // replacing useNavigate with a "spy" that records when it's called
      useNavigate: vi.fn(),
    };
  });

  const setup = () => {
    // mocking the return value of useNavigate
    const mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const searchBar = screen.getByTestId("search-bar");

    return { searchBar, mockNavigate };
  };

  it("should display search results when the user inputs something", () => {
    const { searchBar } = setup();

    // typing "toast" into the bar
    fireEvent.change(searchBar, { target: { value: "toast" } });

    // the related link for "toaster" should appear
    expect(screen.getByTestId("Toaster-search")).toBeInTheDocument();
  });

  it("should display nothing when the user types something and then removes it", () => {
    const { searchBar } = setup();

    // typing toast again and seeing that it appears
    fireEvent.change(searchBar, { target: { value: "toast" } });
    // need to assign to variable to test if it's not there
    const searchResults = screen.getByTestId("search-results");
    expect(searchResults).toBeInTheDocument();

    // removing input
    fireEvent.change(searchBar, { target: { value: "" } });
    // testing if searchResults is gone
    expect(searchResults).not.toBeInTheDocument();
  });

  it("should navigate to the correct page when the user presses enter", () => {
    const { searchBar, mockNavigate } = setup();

    // pressing "enter" on the searchBar
    fireEvent.keyDown(searchBar, { key: "Enter" });
    // making sure that at first, the URL doesn't change
    expect(mockNavigate).not.toHaveBeenCalled();

    // entering an invalid product name
    fireEvent.change(searchBar, { target: { value: "mndsanbjidbsahvb" } });
    fireEvent.keyDown(searchBar, { key: "Enter" });
    // making sure the URL still doesn't change
    expect(mockNavigate).not.toHaveBeenCalled();

    // enter a valid search
    fireEvent.change(searchBar, { target: { value: "toast" } });
    fireEvent.keyDown(searchBar, { key: "Enter" });

    // making sure the URL changes to "/products/kitchen" - where toaster is
    expect(mockNavigate).toHaveBeenCalledWith("/products/kitchen");
  });
});
