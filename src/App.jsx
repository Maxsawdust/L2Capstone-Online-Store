import { useSelector } from "react-redux";
import "./App.css";
import { Layout } from "./pages";
import { Routes, Route } from "react-router";

function App() {
  // getting theme from redux store
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* logo */}
          {/* SearchBar */}
          {/* NavBar */}
          {/* Profile */}
          {/* LandingPage */}
          {/* ProductPage */}
          {/* CartPage */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
