// import React from 'react'
// import Register from './Register';
// import Login from './Login'

// const GetData = ({data}) => {
//   const Data =({no}) =>{
//     return(
//     <div>
//     {data?.map((curr) => {
//       return(<div>
//         <p>name:{curr.name}</p>
//         <p>email:{curr.email}</p>
//         <p>password:{curr.pass}</p>
//       </div>)
//     })}
//   </div>

//   return (
//     <>
//     <div>
//     {data?.map((curr) => {
//       return(<div>
//         <p>name:{curr.name}</p>
//         <p>email:{curr.email}</p>
//         <p>password:{curr.pass}</p>
//       </div>)
//     })}}
//   </div>

//     </>
//   ))
// }

// export default GetData

import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const getLocalItem = () => {
// 	let getItem = localStorage.getItem("login");
// 	if (getItem) {
// 		return JSON.parse(getItem);
// 	} else {
// 		return [];
// 	}
// };

const GetData = () => {
	// const navigate = useNavigate();
	const [userData, setUserData] = useState();
	const [loginUser, setLoginUser] = useState();

	useEffect(() => {
		let user = localStorage.getItem("login");
		var obj = JSON.parse(user);
		console.log(obj, "userdata");
		setUserData([obj]);
	}, []);

	const removeId = (a) => {
		const finalId = userData.filter((curElem, index) => {
			return index !== a;
		});
		setLoginUser(finalId);
		// setUserData(finalId)
	};
	
	// console.log()

	// console.log(userData.email,"userDatauserDatauserData")
	const handleOnLogout = (e) => {

		// loginUser.map((val, ind)=>{
		// 	// console.log(val[ind].email,"LoginUserMap")
		// 	console.log(val,"val")
		// })
		const getLocalItem = () => {
			let getItem = localStorage.getItem("login");
			if (getItem) {
				return JSON.parse(getItem);
			} else {
				return [];
			}
		};

		userData.map((value, index)=>{
			console.log(value[index].email,"handle email");

			let logout = []
			if(value[index].email !== ""){
				return localStorage.setItem("login", JSON.stringify(logout));
			}else{
				console.log("No")
			}
		})
		// console.log("handleLogOut", userData[index].value);
		e.preventDefault();
		// userData?.filter((load) => {
		// 	load.LoggeIn = true;
	};
	// navigate("/login");
	// console.log("getLocalItem", getLocalItem);
	// console.log(userData, "searchingResult");
	return (
		<>
			<div>
				{/* <form onSubmit={handleOnLogout}> */}
				<div>
					{userData?.map((value, index) => {
						console.log(value[index].email);
						return (
							<><form onSubmit={handleOnLogout}>
								<div key={index}>{value[index].email}</div>
								<button type="handleLogOut"
								onClick={() => removeId(index)}>LogOut</button>
								</form></>
						);
					})}
					{/* {userData.map((value, index) => { */}
					{/* return ( */}
					{/* <> */}
					{/* <div key={index}>{value}</div> */}
					{/* <div> */}
					{/* </div> */}
					{/* </> */}
					{/* ); */}
					{/* })} */}
				</div>
				{/* <button>LogOut</button> */}
			</div>
		</>
	);
};

export default GetData;
