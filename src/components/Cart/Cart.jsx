import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Cart.css";
import {Item} from "../Item/Item";

export const Cart = () => {
    const {cart, clearCart, deleteItem, total, checkout} = useCartContext();
    return(
        <section className="item-list-container">

            <h2>Carrito de compra</h2>
            
            {cart.length ? (
                cart.map ((prod) => (
                    <div className="card-item">
                        <Item key= {prod.id} {...prod}>
                            <div className="card-info">
                                <span>Cantidad: {prod.quantity}</span>
                            </div>
                            <button className="btn btn danger" onClick={() => deleteItem(prod.id) }>
                                Eliminar
                            </button>
                        </Item>
                    </div>
                ))
            ):(
                <p>Tu carrito esta vacio</p>
            )}

            {cart.length ? (
                <div className="btn-container">
                    <div className="total-pagar">
                        <p>Total a pagar: ${total()}</p>
                    </div>
                    <button className="btn btn success" onClick={checkout}>
                        Finalizar compra
                    </button>
                    <button className="btn btn warning" onClick={clearCart}>
                        Vaciar carrito
                    </button>

                </div>
            ):(
                <Link className="btn btn secondary" to= "/">
                    Volver al inicio
                </Link>
            )}
        </section>
)}; 