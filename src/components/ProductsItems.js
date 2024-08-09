import { useNavigate } from "react-router-dom";
const ProductsItems = ({ product, AddToCart}) => {
  const { price, title, image } = product;
  const NavigateTo = useNavigate();
  const handleClick=(product)=>{
        NavigateTo(`/ProductDetails/${product.id}`);
  }
  return (
    <div className="product-card">
      <div className="product-image-ctn">
      <img src={image} alt="" onClick={()=>handleClick(product)}/>
      </div>
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          ₹{Math.round(price)} <span className="product-offer-price">₹{Math.round(price + 38)}</span>
        </p>
      </div>
      <button className="btn" onClick={()=>AddToCart(product)}>
        Add to cart
      </button>
      {/* <button className="btn" onClick={()=>AddToCart(product)}>
        Go to Cart
      </button> */}

    </div>
  );
};

export default ProductsItems;