const CartItems = ({product, RemoveCartItem}) => {
    const { price, title, image,quantity} = product;
    return ( 
        <div className="cart-card">
        <img src={image} alt="" />
        <div className="cart-info">
          <p className="cart-title">{title}</p>
          <p className="cart-quantity">Quantity: {quantity}</p>
          <p className="cart-price">
            ₹{price} <span className="product-offer-price">₹{price + 39.01}</span>
          </p>
        </div>
        <button className="btn" onClick={()=>RemoveCartItem(product.id)} >
          Remove
        </button>
      </div>
     );
}
 
export default CartItems;