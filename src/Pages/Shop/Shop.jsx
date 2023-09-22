import React from "react";
import { PRODUCTS } from "../../Utilities/PRODUCTS";
import Product from "../../Utilities/Product";
import "./shopCss.scss";

const Shop = () => {
	return (
		<div className="shop">
			<div className="hero">MANGA MANGA MANGA</div>
			<div className="shopTitle">
				<p> All Products </p>
			</div>
			<div className="products">
				{" "}
				{PRODUCTS.map((product) => (
					<Product data={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Shop;
