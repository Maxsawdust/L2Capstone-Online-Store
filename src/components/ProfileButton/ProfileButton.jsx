import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./ProfileButton.css";
import { UserOptions } from "..";
import { showSidebar } from "../../store/reducers/cartReducer";

export default function ProfileButton() {
  // local state to control display of UserOptions
  const [optionsAreDisplayed, setOptionsAreDisplayed] = useState(false);

  // dispatch to effect the sidebar cart
  const dispatch = useDispatch();

  // getting the user from state
  const currentUser = useSelector((state) => state.currentUserReducer.user);
  const currentName = currentUser.name;
  // using the name property to derrive the first letter
  const userFirstLetter = currentName[0].toUpperCase();

  const handleClick = () => {
    // toggle the options window
    setOptionsAreDisplayed(!optionsAreDisplayed);

    // closing the sidebar in case it's open, as it will overlap
    dispatch(showSidebar(false));
  };

  const handleBlur = () => {
    // short timeout to allow the user to click buttons in the options menu
    setTimeout(() => setOptionsAreDisplayed(false), 150);
  };
  return (
    <div className="ProfileButton">
      <button onClick={handleClick} onBlur={handleBlur}>
        <span className="profile-image">{userFirstLetter}</span>
      </button>
      {optionsAreDisplayed ? <UserOptions /> : null}
    </div>
  );
}
