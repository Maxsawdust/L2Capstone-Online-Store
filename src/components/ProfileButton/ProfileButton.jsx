import { useSelector } from "react-redux";
import { useState } from "react";
import "./ProfileButton.css";
import { UserOptions } from "..";

export default function ProfileButton() {
  // local state to control display of UserOptions
  const [optionsAreDisplayed, setOptionsAreDisplayed] = useState(false);

  // getting the user from state
  const currentUser = useSelector((state) => state.currentUserReducer.user);
  const currentName = currentUser.name;
  // using the name property to derrive the first letter
  const userFirstLetter = currentName[0].toUpperCase();

  const handleClick = () => {
    setOptionsAreDisplayed(!optionsAreDisplayed);
  };

  const handleBlur = () => {
    setOptionsAreDisplayed(false);
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
