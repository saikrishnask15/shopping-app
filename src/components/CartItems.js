const CartItems = ({
  product,
  decreaseQuantity,
  increaseQuantity,
  RemoveCartItem,
}) => {
  const { TotalCost, title, image, quantity } = product;
  return (
    <div className="cart-card">
      <div className="cart-image-ctn">
      <img src={image} alt="" />
      </div>
      <div className="cart-info">
        <p className="cart-title">{title}</p>
        <p className="cart-quantity">
          Quantity: <button onClick={() => decreaseQuantity(product)}>-</button>{" "}
          {quantity}{" "}
          <button onClick={() => increaseQuantity(product)}>+</button>
        </p>
        <p className="cart-price">
          ₹{TotalCost}{" "}
          <span className="product-offer-price">
            ₹{Math.round(TotalCost + 38)}
          </span>
        </p>
      </div>
      <button
        className="btn"
        onClick={() => RemoveCartItem(Math.round(product.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItems;
