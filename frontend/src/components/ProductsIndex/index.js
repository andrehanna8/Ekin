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
  const currentUser = useSelector((state) => state.session.user);

  const doubleBlocks = products.slice(0, 2);
  const scrollerBlocks = products.slice(2, 15);
  const popNowBlocks = products.slice(16, 20);

  const clickSignUp = () => {
    const signUp = document.getElementById("sign-up");
    if (!currentUser) {
      signUp?.click();
    }
  }




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
          <div className="teeup-blocks">
            <br></br>
              <div className="first-teeup">
              <Link to="/products/1">
                <img src="https://ekin-seeds.s3.us-west-1.amazonaws.com/af1-scroller.webp" />
                </Link>
                  <div className=" first-teeup-text">
                    <br></br>
                    <Link to="/products/1">
                    <button>Shop</button>
                    </Link>
                  </div>
              </div>

              <div className="second-teeup">
              <Link to="/products/2">
                <img src="https://ekin-seeds.s3.us-west-1.amazonaws.com/dd27bfb2-7fce-45f9-af2d-bd409d8ca70b-top-block-1.webp" />
                </Link>
                  <div className=" second-teeup-text">
                    <br></br>
                    <Link to="/products/2">
                      <button>Shop</button>
                    </Link>
                  </div>
                </div>
            </div>

          <div className="hap-now">
            <h1>Happening Now</h1>
            <div className="hap-now-text">
            <h2>SAVE UP TO 50%</h2>
            <br></br>
            <h3>Save big on limited-time markdowns--no code required. Exclusions apply.</h3>
            <Link to="/search?q=">
              <button>Shop</button>
            </Link>
            </div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1423,c_limit/f816410e-64c6-43fc-9f7f-c0d1eb622cb1/nike-just-do-it.jpg" />
          </div>
          
          
          <h1 id="teeup">Tee Up</h1>
          <div className="teeup-blocks">
            <br></br>
              <div className="first-teeup">
              <Link to="/search?q=golf">
                <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_706,c_limit/66910ca7-1578-4e69-9c30-91e858a66c3a/nike-just-do-it.jpg" />
                </Link>
                  <div className=" first-teeup-text">
                    <h1>Nike Golf</h1>
                    <h2>Always Fresh Collection</h2>
                    <br></br>
                    <Link to="/search?q=golf%20shoes">
                    <button>Shop</button>
                    </Link>
                  </div>
              </div>

              <div className="second-teeup">
              <Link to="/search?q=golf">
                <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_706,c_limit/818383a5-01a9-4421-83b0-b239f063d6ae/nike-just-do-it.jpg" />
                </Link>
                  <div className=" second-teeup-text">
                    <h2>Tournament Looks</h2>
                    <br></br>
                    <Link to="/search?q=golf">
                      <button>Shop</button>
                    </Link>
                  </div>
                </div>
            </div>

            <div className="spring-banner">
              {/* <br></br> */}
              <h2>AIR IN THE FAMILY</h2>
              <br></br>
              <h3>Highlight the unique vibes of each member of the squad in the Air Max 90,
                Air Max TW, and other energetic styles.</h3>
                <div className="air-btns">
                  
              <Link to="/search?q=men%27s%20air%20max">
              <button>Shop Mens</button>
              </Link> &nbsp;
              
              <Link to="/search?q=women%27s%20air%20max">
              <button>Shop Women's</button>
              </Link> &nbsp;

              <Link to="/search?q=kid%27s%20air%20max">
              <button>Shop Kids'</button>
              </Link> &nbsp;

                </div>
      </div>  

      <div className="hap-now">
            <h1>Nike Membership</h1>
            <div className="hap-now-text">
            <h2>BECOME A MEMBER</h2>
            <br></br>
            <h3>Sign up for free. Join the Community.</h3>
            
              <button onClick={clickSignUp}>Join Us</button>
        
            </div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1423,c_limit/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d/nike-just-do-it.jpg" />
      </div>

      <div className="pop-now">
            <h1>Popular Now</h1>
            {popNowBlocks.map((product) => (
              <a key={product.id}>
                <ProductsIndexItem product={product} />
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
            <a id="github" target="_blank" href="https://github.com/andrehanna8">
              Github
            </a>
            <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/andre-hanna-8b1b1b1b1/">
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
