import "./App.css";
import { Layout } from "./pages";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
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
