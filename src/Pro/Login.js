import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [err, setErr] = useState(false);
	const [userData, setUserData] = useState([]);

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	const passHandler = (e) => {
		setPassword(e.target.value);
	};

	const shownPassword = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		let userData = localStorage.getItem("obj");
		var obj = JSON.parse(userData);
		console.log(obj, "userdata");
		setUserData(obj);
	}, []);
	console.log(userData, "res");
	{
		userData?.filter((load) => {
			load.LoggeIn = true;
		});
	}
	

	// const handleOnSubmit = (e) => {
	// 	e.preventDefault();
	// 	setErr(false);
	// 	for (let index = 0; index < userData.length; index++) {
	// 		if (userData[index].email === email) {
	// 			if (userData[index].password === password) {
	// 				Swal.fire("You have logged in successfully");
	// 				// navigate("/dashboard");
	// 				break;
	// 			} else {
	// 				alert("PPPPP");
	// 				break;
	// 			}
	// 		}
	// 	}
	// };

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const obj = {
			email: email,
			password: password,
		};

        let saveUser = [];
        saveUser.push(obj)
		localStorage.setItem("login", JSON.stringify(saveUser));
		console.log("newLog", saveUser);
		console.log("userData", userData);
		

		for (let index = 0; index < userData.length; index++) {
			if (userData.email === saveUser.email && userData.password === saveUser.passHandler) {
                navigate("/dashboard");
				Swal.fire("You have logged in successfully");
			} else {
				alert("PPPPP");
                break;
			}
		}
	};

	return (
		<>
			<div>
				<form onSubmit={handleOnSubmit}>
					<div style={{ textAlign: "center", marginTop: "150px" }}>
						<input type="text" name="email" value={email} onChange={emailHandler} placeholder="Enter your email" />
						<br />

						<br />
					</div>
					<div style={{ textAlign: "center" }}>
						<input style={{ textAlign: "center" }} type={showPassword ? "text" : "password"} name="pass" value={password} onChange={passHandler} id="myInput" placeholder="Please enter the password" />
						<br />
						<input type="checkbox" onClick={shownPassword} />
						Show password
						<br />
					</div>
					<br />
					<button type="submit" style={{ marginLeft: "820px" }}>
						Sign in
					</button>
					<button
						onClick={() => {
							navigate("/");
						}}
						style={{ marginLeft: "820px" }}
					>
						Register
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
