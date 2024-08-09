import { useContext, useEffect } from "react";
import { ResponseContext } from "../App";
import ProductsItems from "./ProductsItems";

const Products = () => {
  const { response, cartData, setCartData } = useContext(ResponseContext);
  console.log(response);

  const AddTOCart = (product) => {
    const existingInCart = cartData.find((index) => index.id === product.id);
    console.log(existingInCart);
    if (existingInCart) {
      const updateCart = cartData.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              TotalCost: Math.round(item.price) * (item.quantity + 1),
            }
          : item
      );
      setCartData(updateCart);
    } else {
      setCartData([
        ...cartData,
        { ...product, quantity: 1, TotalCost: Math.round(product.price) },
      ]);
    }
  };
  useEffect(() => {
    // console.log(cart);
    localStorage.setItem("product", JSON.stringify(cartData));
  }, [cartData]);
  return (
    <div className="products-ctn">
      {response.map((product, key) => (
        <ProductsItems product={product} key={key} AddToCart={AddTOCart} />
      ))}
    </div>
  );
};

export default Products;
