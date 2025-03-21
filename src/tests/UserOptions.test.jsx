import { fireEvent, render, screen } from "@testing-library/react";
import { UserOptions } from "../components";
import { MemoryRouter } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../store/reducers/currentUserReducer";
import cartReducer from "../store/reducers/cartReducer";
import { Provider } from "react-redux";
import { expect } from "vitest";
import { act } from "react";

describe("UserOptions", () => {
  const setup = () => {
    // Mock store
    const store = configureStore({
      reducer: {
        currentUserReducer: currentUserReducer,
        cartReducer: cartReducer,
      },
      // preloadedState to set isLoggedIn to true
      preloadedState: {
        currentUserReducer: {
          isLoggedIn: true,
          user: { email: "email@email.com", password: "Password1!" },
        },
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserOptions />
        </MemoryRouter>
      </Provider>
    );

    const logOutButton = screen.getByText("Log out");

    return { store, logOutButton };
  };

  it("should log the user out when logOutButton is clicked", async () => {
    const { store, logOutButton } = setup();

    await act(() => {
      fireEvent.click(logOutButton);
    });
    const isLoggedIn = store.getState().currentUserReducer.isLoggedIn;

    expect(isLoggedIn).toBe(false);
  });
});
