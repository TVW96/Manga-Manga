import React, { useContext } from "react";
import { ShopContext } from "../Context/shop-context";

const Product = (props) => {
	const { id, name, price, image } = props.data;

	const { addToCart, cartItems } = useContext(ShopContext);

	const cartItemAmount = cartItems[id];

	return (
		<div className="product" key={id}>
			<h2 className="text-hover">Buy It!</h2>
			<img src={require(`${image}`)} alt={id} className="image" />

			<div className="description">
				<p>
					<b>{name}</b>
				</p>
				<p>${price}</p>
			</div>
			<button className="btn" onClick={() => addToCart(id)}>
				{" "}
				Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
			</button>
		</div>
	);
};

export default Product;
