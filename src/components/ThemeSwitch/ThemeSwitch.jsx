import { toggleTheme } from "../../store/reducers/themeReducer";
import "./ThemeSwitch.css";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  // using selector to access the theme state
  const themeState = useSelector((state) => state.theme.theme);

  const handleChange = (e) => {
    // passing in the checked property as a boolean
    dispatch(toggleTheme(e.target.checked));
  };

  return (
    //
    <div className="ThemeSwitch">
      <input
        type="checkbox"
        className="toggle-theme"
        role="theme-switch"
        onChange={handleChange}
        checked={themeState === "dark"}
      />
    </div>
  );
}
