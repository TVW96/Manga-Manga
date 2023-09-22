import React from "react";
import Filter from "../Components/Filter";
import SideNav from "../Components/SideNav";
import { PRODUCTS } from "../Utilities/PRODUCTS";

const Developer = () => {
	return (
		<div>
			<SideNav data={PRODUCTS} />
			<Filter />
		</div>
	);
};

export default Developer;
