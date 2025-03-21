import { useSelector } from "react-redux";
import { ProductCategoryCard } from "../../components";
import { storeInventory } from "../../utils/storeInventory";
import { useRef } from "react";
import "./Landing.css";

export default function Landing() {
  const containerRef = useRef(null);

  // functions to scroll container on button click
  const scrollLeft = () => {
    containerRef.current.scrollLeft = 0;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft = 1000000;
  };

  return (
    <div className="Landing">
      <div className="landing-header">
        <h1>Welcome to Saunders' superstore!</h1>
      </div>

      <div className="product-categories">
        <h2>Browse by category</h2>
        <button className="left-arrow" onClick={scrollLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#000">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        </button>
        <div className="category-carousel" ref={containerRef}>
          {/* Using Object.entries.map to render a category card with all associated products */}
          {Object.entries(storeInventory.categories).map((category) => {
            return <ProductCategoryCard type={category[0]} key={category[0]} />;
          })}
        </div>
        <button className="right-arrow" onClick={scrollRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#000">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
