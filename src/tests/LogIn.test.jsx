import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { LogIn } from "../pages";
import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer, { logIn } from "../store/reducers/loggedInReducer";
import { Provider } from "react-redux";
import { act } from "react";

describe("LogIn tests", () => {
  const setup = () => {
    // creating a mock store
    const store = configureStore({
      reducer: {
        loggedInReducer: loggedInReducer,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LogIn />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const logInButton = screen.getByTestId("login-button");

    return {
      store,
      emailInput,
      passwordInput,
      logInButton,
    };
  };

  it("should return false when user logs in with invalid credentials", () => {
    const { store, emailInput, passwordInput, logInButton } = setup();

    // clear storage so there's no user in it
    localStorage.clear();

    // fill in the form
    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password1!" } });
    fireEvent.click(logInButton);

    // get state from mock store
    const isLoggedIn = store.getState().loggedInReducer.isLoggedIn;
    expect(isLoggedIn).toBe(false);
  });

  it("should return true if user logs in with valid account credentials", async () => {
    const { store, emailInput, passwordInput, logInButton } = setup();

    // clear storage
    localStorage.clear();
    // set a user
    localStorage.setItem(
      "users",
      JSON.stringify([{ email: "email@email.com", password: "Password1!" }])
    );

    // fill in the form
    await act(() => {
      fireEvent.change(emailInput, { target: { value: "email@email.com" } });
      fireEvent.change(passwordInput, { target: { value: "Password1!" } });
      fireEvent.click(logInButton);
    });

    // get state from mock store
    const isLoggedIn = store.getState().loggedInReducer.isLoggedIn;
    expect(isLoggedIn).toBe(true);
  });
});
