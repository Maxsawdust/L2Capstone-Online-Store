import { useSelector } from "react-redux";
import "./App.css";
import { Layout, SignUp, LogIn } from "./pages";
import { Routes, Route } from "react-router";

function App() {
  // getting theme from redux store
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          {/* ProductPage */}
          {/* CartPage */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
