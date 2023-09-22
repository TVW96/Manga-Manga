import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart.jsx";
import { ShopContextProvider } from "./Context/shop-context.jsx";
import Developer from "./Pages/Developer";

function App() {
	return (
		<div className="main">
			<ShopContextProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Shop />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/development" element={<Developer />} />
					</Routes>
				</BrowserRouter>
			</ShopContextProvider>
		</div>
	);
}

export default App;
