import { toggleTheme } from "../../store/reducers/themeReducer";
import "./ThemeSwitch.css";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  // using selector to access the theme state
  const themeState = useSelector((state) => state.theme.theme);

  const handleChange = (e) => {
    // passing in th
    dispatch(toggleTheme(e.target.checked));
  };

  return (
    //
    <div className="ThemeSwitch">
      <button className="toggle-theme">
        <input role="theme-switch" type="checkbox" onChange={handleChange} />
      </button>
    </div>
  );
}
