
const ProductsItems = ({ product, AddToCart}) => {
  const { price, title, image } = product;
  return (
    <div className="product-card">
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          ₹{price} <span className="product-offer-price">₹{price + 39.01}</span>
        </p>
      </div>
      <button className="btn" onClick={()=>AddToCart(product)}>
        Add Cart
      </button>
    </div>
  );
};

export default ProductsItems;