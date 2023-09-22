import React, { useContext } from "react";
import { PRODUCTS } from "../../Utilities/PRODUCTS";
import { ShopContext } from "../../Context/shop-context";
import { CartItem } from "./CartItem";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();

	const navigate = useNavigate();

	return (
		<div className="cart">
			<h1>Your Cart Items</h1>
			<div className="cart">
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return (
							<>
								<CartItem data={product} key={product.id} />
							</>
						);
					} else {
						return null;
					}
				})}
			</div>

			{totalAmount > 0 ? (
				<div className="checkout">
					<p> Subtotal: ${totalAmount} </p>
					<button onClick={() => navigate("/")}> Continue Shopping </button>
					<button
						onClick={() => {
							checkout();
							navigate("/checkout");
						}}
					>
						{" "}
						Checkout{" "}
					</button>
				</div>
			) : (
				<h1> Your Shopping Cart is Empty</h1>
			)}
		</div>
	);
};

export default Cart;
