import React from "react";

import Product from './components/Product/Product';
import Navbar from './components/Navbar/Navbar';

const App = () => {

	// const products=[
	// 	{id:1, name:"anas", description: "This is mu Name", image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
	// 	{id:2, name:"MAcBook", description: "This is product of apple"}
	//   ]
	return (
		<div className="App">
		
			<div className="container">
			<Navbar /><br/>
			<Product />
			</div>
		</div>
	);
};

export default App;
