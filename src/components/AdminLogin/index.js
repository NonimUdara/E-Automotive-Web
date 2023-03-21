import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import logo from './AutomotiveBackground.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/admindashboard";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="container">
			<div class="row">
				<img src={logo} style={{ height: '750px', width: '1350px' }} alt='background'>
				</img>
			</div>
			<div class="row">
				<div className={styles.login_container} style={{ marginBottom: '-30px' }}>
					<div className={styles.login_form_container}>
						<div className={styles.left}>
							<form className={styles.form_container} onSubmit={handleSubmit}>
								<h3>Admin Login</h3>
								<h1 style={{ marginBottom: "20px", textAlign: "center", alignItems: "center" }}>
									<a href=" " role="button" style={{ padding: "10px", color: "black" }}><FontAwesomeIcon style={{ height: '70px' }} icon={faUserShield} /></a>
								</h1>
								<label style={{ alignItems: 'left', textAlign: 'left', marginRight: '580px', fontWeight: 'bold' }}>Enter Email</label>
								<input
									type="email"
									placeholder="Email"
									name="email"
									onChange={handleChange}
									value={data.email}
									required
									className={styles.input}
								/>
								<label style={{ alignItems: 'left', textAlign: 'left', marginRight: '555px', fontWeight: 'bold', marginTop: '20px' }}>Enter Password</label>
								<input
									type="password"
									placeholder="Password"
									name="password"
									onChange={handleChange}
									value={data.password}
									required
									className={styles.input}
								/>
								{error && <div className={styles.error_msg}>{error}</div>}
								<button type="submit" className={styles.green_btn} style={{ marginTop: '40px' }}>
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
