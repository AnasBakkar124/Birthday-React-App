// // // import React from "react";
// // // import Register from "../src/Pro/Register";
// // // import Login from "../src/Pro/Login";
// // // import GetData from "../src/Pro/GetData";
// // // import { BrowserRouter } from "react-router-dom";
// // // import { Route, Routes } from "react-router-dom";

// // // // import Login from './Pro/Login'

// // // const App = () => {
// // // 	return (
// // // 		<>
// // // 			<BrowserRouter>
// // // 				<Routes>
// // // 					<Route path="/" element={<Register />}></Route>
// // // 					<Route path="/login" element={<Login />}></Route>
// // // 					<Route path="/dashboard" element={<GetData />}></Route>

// // // 					{/* <Route path="/clg" element={<Login />}></Route> */}
// // // 				</Routes>
// // // 			</BrowserRouter>
// // // 			,
// // // 		</>
// // // 	);
// // // };

// // // export default App;

// // import React, { useState, useEffect } from "react";
// // import "./Pro.css";
// // import Swal from "sweetalert2";

// // const getLocalItem = () => {
// // 	let list = localStorage.getItem("lists");
// // 	// console.log(list);
// // 	if (list !== "") {
// // 		return JSON.parse(list);
// // 	} else {
// // 		return [];
// // 	}
// // };

// // const getRandomBackgroudColor = () => {
// // 	let colors = ["#EBDEF0", "#F5CBA7", "#D7DBDD", "#F1C40F", "#A3E4D7"];
// // 	let color = colors[Math.floor(Math.random() * colors.length)];
// // 	// console.log({ color, val: Math.floor(Math.random() * colors.length) });
// // 	return color;
// // };

// // function App() {
// // 	const [text, setText] = useState("");
// // 	const [itmes, setitmes] = useState(getLocalItem());
// // 	// const [data, setData] = useState([]);
// // 	const [edit, setEdit] = useState([]);

// // 	const [bgColor, setBGColor] = useState("#ccc");

// // 	const changeText = (e) => {
// // 		setText(e.target.value);
// // 	};

// // 	const submitHandler = (e) => {
// // 		e.preventDefault();

// // 		// 	let copy = [...data, text];
// // 		// 	let item = {
// // 		// 		text: text,
// // 		// 		id: Math.floor(Math.random() * 500000)
// // 		// 	}
// // 		// 	copy.push(text);
// // 		setBGColor(getRandomBackgroudColor());
// // 		// if (text !== "" && itmes !== "") {
// // 		// 	Swal.fire("Your schedule is entered");
// // 		// 	let obj = [
// // 		// 		{
// // 		// 			id:
// // 		// 			name: itmes,
// // 		// 		},
// // 		// 	];

// // 		// 	setitmes([...itmes, obj]);
// // 		// 	console.log(obj, "onbjonj");
// // 		// } else {
// // 		// 	Swal.fire("You are not allowed to submit emty field");
// // 		// }
// // 		// // let obj = [{
// // 		// // id
// // 		// // }]
// // 		// setText("");
// // 	};

// // 	const addItem = () =>{
// // 		if(! itmes){

// // 		}else{
// // 			const obj = [{
// // 				id: new Date().getTime().toString(),
// // 				name: itmes,
// // 			}]
// // 			setitmes([...itmes, obj])

// // 	}
// // }

// // 	// const removeitmes = (a) => {
// // 	// 	const finalData = itmes.filter((curEle, index) => {
// // 	// 		return index !== a;
// // 	// 	});

// // 	// 	setitmes(finalData);
// // 	// };

// // 	const deleteItems = (id) =>{
// // 		console.log("id")
// // 		const updatedItems = itmes.filter((elem, ind)=>{
// // 			return id !== ind
// // 		})
// // 		setitmes(updatedItems)
// // 		}

// // 		const removeAll = () =>{
// // 			setitmes([])
// // 		}

// // 	// const edititmes = (index, val) => {
// // 	// 	setEdit([index]);
// // 	// 	const handleEdit = itmes.filter((elem, ind) => {
// // 	// 		for (let i = 0; i <= ind; i++) {
// // 	// 			if (ind === index) {
// // 	// 				console.log("ok");
// // 	// 				// console.log(handleEdit,"handleEdit")
// // 	// 				// setitmes(handleEdit)
// // 	// 			} else {
// // 	// 				console.log("no");
// // 	// 			}
// // 	// 		}
// // 	// 		// setText(handleEdit)
// // 	// 	});
// // 		// setData(handleEdit)
// // 		// console.log(handleEdit,"handleEdithandleEdit")

// // 	useEffect(() => {
// // 		localStorage.setItem("lists", JSON.stringify(itmes));
// // 	}, [itmes]);

// // 	// console.log(itmes, "itmesitmes");
// import React, { useState, useEffect } from "react";

// const getLocalItem = () => {
// 	let list = localStorage.getItem("todo");
// 	console.log(list);
// 	if (list !== "") {
// 		return JSON.parse(list);
// 	} else {
// 		return [];
// 	}
// };
// const App = () => {
// 	const [inputData, setInputData] = useState("");
// 	const [itmes, setItems] = useState(getLocalItem());

// 	const changeText = (e) => {
// 		setInputData(e.target.value);
// 	};

// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 	};

// 	const addItem = () => {
// 		if (!inputData) {
// 		} else {
// 			const allInputs = [{ id: new Date().getTime().toString(), name: inputData }];
// 			setItems([...itmes, allInputs]);
// 			setInputData("");
// 		}
// 	};

// 	const deleteItems = (id) => {
// 		const updatedItems = itmes.filter((elem, ind) => {
// 			return ind !== id;
// 		});
// 		setItems(updatedItems);
// 	};

// 	const removeAll = () => {
// 		setItems([]);
// 	};

// 	useEffect(() => {
// 		localStorage.setItem("todo", JSON.stringify(itmes));
// 	}, [itmes]);
// 	return (
// 		<>
// 			<div className="maindiv">
// 				<div>
// 					<h4 className="today">Today</h4>
// 				</div>
// 				<div>
// 					<ol>
// 						{itmes &&
// 							itmes?.map((val, index) => {
// 								return (
// 									<>
// 										<li
// 											key={index}
// 											style={{
// 												// backgroundColor: bgColor,
// 												justifyContent: "space-between",
// 												display: "flex",
// 											}}
// 										>
// 											{val}
// 											<div style={{ justifyContent: "end" }}>
// 												<i>
// 													<button
// 														style={{
// 															alignItems: "right",
// 															marginTop: "2px",
// 															backgroundColor: "darkcyan",
// 															marginRight: "2px",
// 														}}
// 														title="Add Item"
// 														onClick={() => deleteItems(index)}
// 													>
// 														{"X"}
// 													</button>
// 												</i>
// 												<i>
// 													<button
// 														style={{
// 															alignItems: "right",
// 															marginTop: "2px",
// 															backgroundColor: "darkcyan",
// 															marginRight: "5px",
// 														}}
// 														title="Edit Item"
// 														onClick={() => {
// 															// edititmes(index);
// 															// edit.push(index);
// 															console.log(index, "editindex");
// 															// console.log(edit,"editedit")
// 														}}
// 													>
// 														Edit
// 													</button>
// 												</i>
// 											</div>
// 										</li>
// 									</>
// 								);
// 							})}
// 					</ol>
// 				</div>
// 				<form onSubmit={submitHandler}>
// 					<div className="input">
// 						<div className="input-width">
// 							<input
// 								placeholder="Please enter here ..."
// 								style={{
// 									width: "75%",
// 									marginTop: "5px",
// 									backgroundColor: "beige",
// 									marginBottom: "5px",
// 								}}
// 								id="todo-inut"
// 								type="text"
// 								value={inputData}
// 								onChange={changeText}
// 								onClick={addItem}
// 							/>
// 							{/* {edit ? <i><button title="Add Item" onClick={() => edititmes(index)}></button></i> : <i><button title="Add Item" onClick={() => edititmes(index)}></button></i> } */}
// 						</div>
// 						<button onClick={addItem} type="submit">
// 							{">>>"}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</>
// 	);
// };

// export default App;

// // import React, { useState, useEffect } from "react";

// // const getLocalItem = () => {
// // let list = localStorage.getItem("todo");
// // console.log(list);
// // if (list !== "") {
// // 	return JSON.parse(list);
// // } else {
// // 	return [];
// // }
// // }
// // const App = () => {
// // 	const [inputData, setInputData] = useState("");
// // 	const [itmes, setItems] = useState(getLocalItem());

// // 	const changeText = (e)=>{
// // 		setInputData(e.target.value)
// // 	}

// // 	const addItem = () =>{
// // 		if(!inputData){

// // 		}else{
// // 			const allInputs = {id: new Date().getTime().toString(),
// // 			name:inputData
// // 		}
// // 		setItems([...itmes, allInputs])
// // 		setInputData('')
// // 		}
// // 	}

// // 	const deleteItems = (id) =>{
// // 		const updatedItems = itmes.filter((elem, ind)=>{
// // 			return ind !== id;
// // 		})
// // 		setItems(updatedItems)
// // 	}

// // 	const removeAll = ()=>{
// // 		setItems([])
// // 	}

// // 	useEffect(() => {
// // 	  localStorage.setItem("todo", JSON.stringify(itmes))
// // 	}, [itmes])

// // 	return;
// // 	<>
// // 		<div>
// // 			<div>
// // 				<input type="text" placeholder="Add Items" value={inputData} onChange={changeText} />
// // 				<button onClick={addItem}>+</button>
// // 			</div>
// // 		</div>
// // 		<div>
// // 			{itmes &&
// // 				itmes.map((elem, ind)=>{
// // 					return(
// // 						<div key={ind} >
// // 							<h3>{elem}</h3>
// // 							<button onClick={()=> deleteItems}>-</button>
// // 						</div>
// // 					)
// // 				})
// // 			}
// // 		</div>
// // 	</>
// // };

// // export default App;

import React, { useState} from "react";
import "./Pro.css"
import Data from "./Data";
import List from "./List";

const App = () => {
	const [people, setPeople] = useState(Data)
	return (
		<>
			<main>
			<section className="container">
				<h3>{people.length} BirthDay Today</h3>
				<List people={people} />
				<button onClick={()=>{
					setPeople([])
				}}>clear All</button>
				</section>
			</main>
		</>
	);
};

export default App;
