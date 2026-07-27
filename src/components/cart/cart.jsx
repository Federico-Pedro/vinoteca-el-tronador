import { useCart } from "../../context/CartContext.jsx";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const generarMensajeWhatsapp = () => {
    let mensaje = "Hola! Quiero hacer el siguiente pedido:%0A%0A";

    cart.forEach((item) => {
      mensaje += `• ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}%0A`;
    });

    mensaje += `%0ATotal: $${total}`;

    return mensaje;
  };

  const numeroWhatsapp = "5492494XXXXXX"; // código país + área sin el 0 ni el 15

  return (
    <div>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <span>{item.nombre}</span>
              <input
                type="number"
                min="1"
                value={item.cantidad}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
              />
              <span>${item.precio * item.cantidad}</span>
              <button onClick={() => removeFromCart(item.id)}>Quitar</button>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          
            href={`https://wa.me/${numeroWhatsapp}?text=${generarMensajeWhatsapp()}`}
            target="_blank"
            rel="noopener noreferrer"
          <a>
            Enviar pedido por WhatsApp
          </a>

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default Cart;