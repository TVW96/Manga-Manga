import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/shop-context";
import { PRODUCTS } from "../Utilities/PRODUCTS";
import "./SideNav.scss";

const SideNav = (props) => {
	const { name, id } = props.data;
	const [state, setState] = useState("");
	const { title } = useContext(ShopContext);
	// console.log("title: " + state);
	// console.log(`${name}`);

	// function handleSplit() {
	// 	setState(`${name}`.split(",", 1));
	// }

	return (
		<div className="sideNav-container">
			<div className="sideNav-title"></div>
			<ul>
				{PRODUCTS.map((product) => {
					// loop the 15 product's data

					let arr = [];

					// loop products data again while carrying a singular products 'name'
					for (let i = 0; Object.keys(PRODUCTS).length > i; i++) {
						// add singular product name to array list
						arr.push(product.name.split(",", 1));
						console.log("products length: " + Object.keys(PRODUCTS).length);

						// if array greater than 1 item
						if (arr.length > 3) {
							console.log(arr.length);
							// loop the length of that array
							for (let j = 0; j < arr.length; j++) {
								// if array[j] not equal to previous array item return name
								if (arr[i] !== arr[j]) {
									let title = `${product.name}`.split(",", 1);
									return <li key={[product.id]}>{title}</li>;
								} else return null;
							}
						}
					}
				})}
			</ul>
		</div>
	);
};

export default SideNav;
