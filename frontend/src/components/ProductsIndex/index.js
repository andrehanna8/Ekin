import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "../ProductsIndexItem";
import BlockProductIndexItem from "../BlockProductIndexItem";
import SearchResultIndexItem from "../SearchResultIndexItem";
import "./ProductsIndex.css";

export default function Products({ searchTerm }) {
  const products = useSelector((state) => Object.values(state.products));
  const dispatch = useDispatch();

  const doubleBlocks = products.slice(0, 2);
  const scrollerBlocks = products.slice(2, 10);
  const bottomDoubleBlocks = products.slice(2, 4);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <>
      {searchTerm ? (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <a key={product.id}>
              <SearchResultIndexItem product={product} />
            </a>
          ))}
        </div>
      ) : (
        <>
          <div className="double-blocks">
            {doubleBlocks.map((product) => (
              <a key={product.id}>
                <BlockProductIndexItem id="prod-ind-pic" product={product} />
              </a>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="product-scroller">
            {scrollerBlocks.map((product) => (
              <a key={product.id}>
                <ProductsIndexItem product={product} />
              </a>
            ))}
          </div>
          <br></br>
          <br></br>
          <div className="double-blocks">
            {bottomDoubleBlocks.map((product) => (
              <a key={product.id}>
                <BlockProductIndexItem product={product} />
              </a>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="bottom-banner">
            <a id="github" href="https://github.com/andrehanna8">
              Github
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/andre-hanna-8b1b1b1b1/">
              LinkedIn
            </a>
          </div>
          <br></br>
          <br></br>
        </>
      )}
    </>
  );
}
