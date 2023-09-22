import React from "react";
import "./Filter.scss";
import { useState } from "react";
import "./Filter.scss";
import { PRODUCTS } from "../Utilities/PRODUCTS";

const Filter = () => {
	const [search, setSearch] = useState("");
	return (
		<div className="dev">
			<h1>Development Page</h1>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>

			{PRODUCTS.filter((val) => {
				if (search === "") {
					return val;
				} else if (val.name.toLowerCase().includes(search.toLowerCase())) {
					return val;
				}
			}).map((product, key) => {
				return (
					<div className="user" key={key}>
						<p>{product.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Filter;
