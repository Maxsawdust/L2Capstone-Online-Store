import { useSelector } from "react-redux";
import "./App.css";
import { Layout, SignUp, LogIn, Landing, Products, Cart, About } from "./pages";
import { Routes, Route } from "react-router";

function App() {
  // getting theme from redux store
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
