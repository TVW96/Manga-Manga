import React from "react";
import { PRODUCTS } from "../../Utilities/PRODUCTS";
import Product from "../../Utilities/Product";
import "./shopCss.scss";
import SideNav from "../../Components/SideNav";

const Shop = () => {
	return (
		<div className="fullPage">
			<div className="hero"></div>
			<div className="menu">
				<SideNav width="auto" />
			</div>
			<div className="shop">
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
		</div>
	);
};

export default Shop;
