import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ResponseContext } from "../App";
const ProductDetails = () => {
  const { id } = useParams();
  const { response } = useContext(ResponseContext);
  const productDetails =
    response && response.find((product) => product.id === parseInt(id, 10));
  console.log(productDetails);
  return (
    <div className="Product-details-ctn">
      <div className="product-details-image">
        <img src={productDetails.image} alt="" />
      </div>
      <div className="product-details-info">
        <p className="product-details-title ">{productDetails.title}</p>
        <p className="product-details-description">
          {productDetails.description}
        </p>
        <div className="product-price-rating-wrapper">
          <p className="product-details-price">
            ₹{Math.round(productDetails.price)}
          </p>
          {/* <div className="product-rating">
            <p>count:{productDetails.rating.count}</p>
            <p>rate:{productDetails.rating.rate}</p>
          </div> */}
        </div>

        <div>
          <button className="product-details-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
