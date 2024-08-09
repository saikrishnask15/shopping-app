import { useContext } from "react";
import { ResponseContext } from "../App";
import CartItems from "./CartItems";

const Cart = () => {
  const { cartData, setCartData } = useContext(ResponseContext);
  const RemoveCartItem = (idToRemove) => {
    const newCartData = cartData.filter((product, key) => key !== idToRemove);
    setCartData(newCartData);
    localStorage.setItem("product", JSON.stringify(newCartData));
  };
  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      const newCartData = cartData.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
              TotalCost: (item.TotalCost - Math.round(item.price)),
            }
          : item
      );
      setCartData(newCartData);
      localStorage.setItem("product", JSON.stringify(newCartData));
    }
  };
  const increaseQuantity = (product) => {
    const newCartData = cartData.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            TotalCost: (item.TotalCost + Math.round(item.price)),
          }
        : item
    );
    setCartData(newCartData);
    localStorage.setItem("product", JSON.stringify(newCartData));
    // alert(product.quantity);
  };
  return (
    <>
      {cartData.length > 0 ? (
        <div>
          <div className="section">Cart Items</div>
          <div className="section cart-ctn">
            {cartData.map((product, key) => (
              <CartItems
                product={product}
                key={key}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                RemoveCartItem={() => RemoveCartItem(key)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Cart Empty</div>
      )}
    </>
  );
};

export default Cart;
