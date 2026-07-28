import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("carrito");
    if (!saved){return []}
    const parsed = JSON.parse(saved);
    if ((Date.now() - parsed.timestamp) > 60 *60 *1000){
      return []
    } else {
      return parsed.cart
    }
  });


  // Cada vez que cambia el carrito, lo guarda en localStorage
  useEffect(() => {
    const dataParaGuardar = {
      cart: cart,
      timestamp: Date.now(),
    };
    localStorage.setItem("carrito", JSON.stringify(dataParaGuardar));
  }, [cart]);

  const addToCart = (producto) => {
    setCart((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad } : item))
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, openCart, closeCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook custom para no tener que importar useContext + CartContext cada vez
export function useCart() {
  return useContext(CartContext);
}