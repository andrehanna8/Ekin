import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products";
import ProductsIndexItem from "../ProductsIndexItem";
import BlockProductIndexItem from "../BlockProductIndexItem";
import SearchResultIndexItem from "../SearchResultIndexItem";
import "./ProductsIndex.css";
import { Link } from "react-router-dom";

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
         
        <div className="spring-banner">
              <h1>Introducting Nike Pegasus 40</h1>
              {/* <br></br> */}
              <h2>A SPRINGY RIDE FOR EVERY RUN</h2>
              <br></br>
              <h3>Back in its fourth decade, the Nike Pegasus 40 is springier than ever and offers runners of all kinds a perfect fit.</h3>
              <Link to="/search?q=Pegasus">
              <button>Shop</button>

              </Link>
            </div>  
        
            <div className="always-iconic">
            <h1>Always Iconic</h1>
            <div className="alwaysiconic-images">
                  <div className="alwaysiconic-jordan">
                  <Link to="/search?q=jordan">
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.6,cs_srgb/h_600,c_limit/c57c85fd-5b12-4a69-92fb-7b2b84680f27/nike-just-do-it.jpg" alt="aj1" />
                  </Link>

                  <h2>Jordan</h2>
                  </div>
                  <div className="alwaysiconic-cortez">
                <Link to="/search?q=cortez">
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.6,cs_srgb/w_592,c_limit/01ee9453-ef32-4ddf-846e-47c72b921c06/nike-just-do-it.jpg" alt="cortez" />
                </Link>
                <h2>Cortez</h2>
                  </div>

                  <div className="alwaysiconic-airmax">
                <Link to="/search?q=air%20max">
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.6,cs_srgb/h_600,c_limit/d5f1cb21-4546-411a-b6f5-9343d0d995e9/nike-just-do-it.jpg" alt="am1" />
                </Link>
                <h2>Air Max</h2>
                  </div>  

                  </div>
          </div>

          <div className="product-scroller">
            <h1>New Arrivals</h1>
            {scrollerBlocks.map((product) => (
              <a key={product.id}>
                <ProductsIndexItem product={product} />
              </a>
            ))}
          </div>
          <br></br>
          <br></br>

          <h1 className="BTC">Back To The Classics</h1>
          <div className="double-blocks">
            <br></br>
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
