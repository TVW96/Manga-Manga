import React, { useState } from "react";
import { PRODUCTS } from "../Utilities/PRODUCTS";
import "./SideNav.scss";

const SideNav = (props) => {
	const [openCategory, setOpenCategory] = useState(null);

	return (
		<div className="grid-container">
			<div className="sideNav-container">
				<h1>Products</h1>
				<div className="sideNav-title">Manga List</div>
				<ul>
					{Object.entries(
						PRODUCTS.reduce((productsByTitle, product) => {
							const category = product.name.split(",", 1)[0];
							return {
								...productsByTitle,
								[category]: [...(productsByTitle?.[category] ?? []), product],
							};
						}, {})
					).map(([categoryName, categoryProducts]) => (
						<li key={categoryName}>
							<span
								style={{ cursor: "pointer" }}
								onClick={() =>
									setOpenCategory((prevOpenCategory) =>
										prevOpenCategory === categoryName ? null : categoryName
									)
								}
							>
								{categoryName}
							</span>
							<ul
								style={openCategory !== categoryName ? { display: "none" } : {}}
							>
								{categoryProducts.map(({ id, name }) => (
									<li key={id}>{name}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SideNav;
