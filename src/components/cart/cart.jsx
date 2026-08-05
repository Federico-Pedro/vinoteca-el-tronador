import { useCart } from "../../context/CartContext.jsx";
import styles from './cart.module.css'

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, closeCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const generarMensajeWhatsapp = () => {
    let mensaje = "Hola! Quiero hacer el siguiente pedido:%0A%0A";

    cart.forEach((item) => {
      mensaje += `• ${item.nombre} (${item.bodega}) x ${item.cantidad} - $${item.precio * item.cantidad}%0A`;
    });

    mensaje += `%0ATotal: $${total}`;

    return mensaje;
  };

  const numeroWhatsapp = "542494603740"; // código país + área sin el 0 ni el 15

  return (
    <div className={styles.overlay}>

      <div className={styles.cart}>
        <div className={styles.closeIconContainer}>
          <h1 className={styles.modalTitle}>Tus productos:</h1>
          <i className="bi bi-x-circle" onClick={closeCart}></i>
        </div>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <table>
              <thead className={styles.tableHead}>
                <tr>
                  <th className={styles.th}>Producto</th>
                  <th className={styles.th}>Cantidad</th>
                  <th className={styles.th}>Precio</th>
                  <th className={styles.th}>Acciones</th>

                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {cart.map((item) => (

                  <tr key={item.id}>
                    <td className={styles.cell1}>{item.nombre} ({item.bodega})</td>
                    <td className={styles.cell2}><input
                      type="number"
                      min="1"
                      value={item.cantidad}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                      <i className="bi bi-arrow-down-circle" onClick={() => updateQuantity(item.id, item.cantidad - 1)}></i>
                      <i className="bi bi-arrow-up-circle" onClick={() => updateQuantity(item.id, item.cantidad + 1)}></i>
                    </td>
                    <td className={styles.cell}>${item.precio * item.cantidad}</td>
                    <td className={styles.cell4}><button onClick={() => removeFromCart(item.id)}>Quitar</button></td>

                  </tr>
                ))}
              </tbody>
            </table>


            <h3 className={styles.price}>Total: ${total}</h3>


            <p className={styles.disclaimer}>Los productos están sujetos a disponibilidad</p>
            <div className={styles.lastContainer}>

              <button className={styles.emptyButton} onClick={clearCart}>
                <i class="bi bi-cart-x"></i>Vaciar carrito
              </button>
              <a href={`https://wa.me/${numeroWhatsapp}?text=${generarMensajeWhatsapp()}`}
                target="_blank"
                rel="noopener noreferrer">
                <i class="bi bi-whatsapp"></i>
                Enviar pedido por WhatsApp
              </a>

            </div>
          </>
        )}
      </div>
    </div >
  );
}

export default Cart;