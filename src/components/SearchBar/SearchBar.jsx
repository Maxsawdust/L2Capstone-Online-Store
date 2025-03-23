import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" className="search-input" placeholder="" />
      <span className="search-input-label">
        Search for a product or product type
      </span>
    </div>
  );
}
