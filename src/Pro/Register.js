import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");

	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const [record, setRecord] = useState([]);
	const [showPassword, setShowPassword] = useState(false);

	const updateName = (e) => {
		setName(e.target.value);
	};
	const updatEmail = (e) => {
		setEmail(e.target.value);
	};
	const updatePassword = (e) => {
		setPassword(e.target.value);
	};
	const shownPassword = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		let userData = localStorage.getItem("obj");
		var obj = JSON.parse(userData);
		setRecord([...obj]);
		console.log(obj, "userdata");
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const obj = {
			name: name,
			email: email,
			password: password,
			// LoggeIn: false,
		};

		let saveUser = [...record];
		saveUser.push(obj);
		setRecord([...saveUser]);
		localStorage.setItem("obj", JSON.stringify(saveUser));

		console.log("record", record);
		console.log("saveUser", saveUser);

		if (saveUser.name === name) {
			alert("This name is not available");
		} else if (saveUser.email === email) {
			alert("Email is alreadty registered");
		} else if (saveUser.password === password) {
			alert("Please Select a strong Password");
		} else {
			alert("Ok");
			// navigate("/login");
		}
	};

	// let allnew = [...record, ...obj]
	// localStorage.setItem("alldata",JSON.stringify(record))
	// console.log("alldata",allnew)

	// let allnew = [...record]
	// localStorage.setItem("store",JSON.stringify(allnew))

	//  let rec = [...newRecord]
	//  rec.push(con);
	//  console.log(con,"obbbjjj")
	//  setRecord([...rec])

	// const handleOnSubmit = (e) => {
	// 	e.preventDefault();
	// 	const object = {
	// 		name: name,
	// 		email: email,
	// 		password: password,
	// 	};

	// 	let temp = [...record];
	// 	temp.push(object);
	// 	setRecord([...temp]);

	// 	check();

	// };

	// const check =() => {
	// 	localStorage.setItem("saveUser",JSON.stringify(record))
	// }

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<div style={{ textAlign: "center" }}>
					<label htmlFor="name"></label>
					<br />
					<input type="text" name="name" value={name} onChange={updateName} placeholder="Name" />
				</div>
				<div style={{ textAlign: "center" }}>
					<label htmlFor="email"></label>
					<br />
					<input type="text" name="email" value={email} onChange={updatEmail} placeholder="Email" />
				</div>
				<div style={{ textAlign: "center" }}>
					<label htmlFor="pass"></label>
					<br />
					<input type={showPassword ? "text" : "password"} name="password" value={password} onChange={updatePassword} placeholder="Password" />
					<br />
					<input type="checkbox" onClick={shownPassword} />
					Show Password
				</div>
				<br />
				<button type="submit" style={{ marginLeft: "820px" }}>
					Register
				</button>

				<button
					style={{ marginLeft: "820px" }}
					onClick={() => {
						navigate("/login");
					}}
				>
					Log In
				</button>
			</form>
			<br />
			{/* <button onClick={() => localStorage.removeItem("saveUser")} style={{marginLeft:"800px"}}>Console Record</button> */}
		</>
	);
};

export default Register;

// import React , {useState}from "react";

// const Register = () => {
// 	const [name, setName] = useState("")
// 	const [password, setPassword] = useState("")
// 	const [email, setEmail] = useState("")
// 	const [inpVal, setInpVal] = useState(
// 		{
// 			name: name,
// 			email: email,
// 			password: password,
// 		},
// 	);
// 	console.log(inpVal,"inpVal")

// 	const updateName = (e) => {
// 		setName(e.target.value);
// 	};
// 	const updatEmail = (e) => {
// 		setEmail(e.target.value);
// 	};
// 	const updatePassword = (e) => {
// 		setPassword(e.target.value);
// 	};
// const getData =(e)=>{
// const {value, same} = e.target;

// 	setInpVal(()=>{
// 		return {
// 			...inpVal,
// 			name:name
// 		}
// 	})
// }

// 	return<>
// 	 			<form
// 				// onSubmit={handleOnSubmit}>
// 	 				><div style={{ textAlign: "center" }}>
// 	 					<label htmlFor="name"></label>
// 	 					<br />
// 	 					<input type="text" name="name" value={name} onChange={updateName} placeholder="Name" />
// 	 				</div>
// 	 				<div style={{ textAlign: "center" }}>
// 	 					<label htmlFor="email"></label>
// 	 					<br />
// 	 					<input type="text" name="email" value={email} onChange={updatEmail} placeholder="Email" />
// 	 				</div>
// 	 				<div style={{ textAlign: "center" }}>
// 	 					<label htmlFor="pass"></label>
// 	 					<br />
// 	 					<input
// 						type="password"
// 						// type={showPassword ? "text" : "password"}
// 						name="password" value={password} onChange={updatePassword} placeholder="Password" />
// 	 					<br />
// 	 					{/* <input type="checkbox" onClick={shownPassword} /> */}
// 	 					Show Password
// 	 				</div>
// 	 				<br />
// 	 				<button type="submit" style={{ marginLeft: "820px" }}>
// 	 					Register
// 	 				</button>

// 	 				<button
// 						style={{ marginLeft: "820px" }}
// 						onClick={() => {
// 							// navigate("/login");
// 						}}
// 					>
// 						Log In
// 					</button>
// 				</form>
// 				<br />
// 				{/* <button onClick={() => localStorage.removeItem("saveUser")} style={{marginLeft:"800px"}}>Console Record</button> */}
// 			</>
// };

// export default Register;
