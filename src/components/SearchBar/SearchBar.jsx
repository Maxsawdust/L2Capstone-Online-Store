import { useState } from "react";
import "./SearchBar.css";
import { storeInventory } from "../../utils/storeInventory";
import { Link, useNavigate } from "react-router";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [matchingProducts, setMatchingProducts] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    // update state
    setSearchInput(e.target.value);

    // create variable using event to avoid state's asynchronocity
    const input = e.target.value;
    // search storeInventory against state
    const matchingArr = [];

    if (input !== "") {
      storeInventory.allProducts.filter((product) => {
        product.name.toLowerCase().includes(input.toLowerCase())
          ? matchingArr.push({ name: product.name, category: product.category })
          : null;
      });
    }

    matchingArr.length >= 1
      ? setMatchingProducts(matchingArr)
      : setMatchingProducts([]);
  };

  const handleEnter = (e) => {
    // making sure the key pressed is enter
    if (e.key === "Enter") {
      // making sure there are search results
      if (matchingProducts.length > 0) {
        console.log("navigating");
        navigate(`/products/${matchingProducts[0].category}`);
      }
    } else {
      return;
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="search-input"
        placeholder=""
        onChange={handleSearch}
        onBlur={() =>
          setTimeout(() => {
            setMatchingProducts([]);
          }, 100)
        }
        onKeyDown={handleEnter}
        value={searchInput}
        data-testid="search-bar"
      />
      <span className="search-input-label">Search for a product</span>

      {matchingProducts.length > 0 ? (
        <div className="search-results" data-testid="search-results">
          {matchingProducts.map((product) => {
            return (
              <Link
                className="search-product"
                key={`${product.name}-search`}
                to={`/products/${product.category}`}
                data-testid={`${product.name}-search`}>
                {product.name}
              </Link>
            );
          })}{" "}
        </div>
      ) : null}
    </div>
  );
}
