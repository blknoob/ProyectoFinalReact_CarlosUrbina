import { useState } from "react";

function ItemCount({ stock, aggregateCart }) {
  const [count, setCount] = useState(1);

  const amountProduct = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const sustrabProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => aggregateCart(count)}>Agregar al carrito</button>
      <button onClick={sustrabProduct}>Decrementar</button>
      <button onClick={amountProduct}>Incrementar</button>
    </>
  );
}

export default ItemCount;
