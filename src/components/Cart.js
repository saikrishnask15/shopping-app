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
  return (
    <>
      {cartData.length > 0 ? (
        <div className="cart-ctn">
          {cartData.map((product, key) => (
            <CartItems
              product={product}
              key={key}
              RemoveCartItem={() => RemoveCartItem(key)}
            />
          ))}{" "}
        </div>
      ) : (
        <div>cart empty</div>
      )}
    </>
  );
};

export default Cart;
