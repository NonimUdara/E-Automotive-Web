import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
			window.location = "/adminpanel";
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
		<div>

			<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#C4C4C4' }}>
				<div className="container-fluid">
					<button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/">Home</a>
							</li><li className="nav-item">
								<a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/adminlogin">Admin Login</a>
							</li>
							<li className="nav-item">
								<a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="trainerlogin">Trainer Login</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className={styles.login_container} style={{ marginBottom: '-30px' }}>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h3 style={{ marginBottom: '30px', marginTop: '-80px' }}>Admin Login</h3>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className={styles.input}
							/>
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

			<MDBFooter style={{ backgroundColor: '#C4C4C4' }} className="font-small pt-4 mt-4">
				<MDBContainer fluid className="text-center text-md-left">
					<MDBRow>
						<MDBCol md="8">
						</MDBCol>
						<MDBCol md="4">
							<p style={{ fontWeight: 'bold' }}>www.A+Fitness.lk</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<div className="footer-copyright text-center py-3">
					<MDBContainer fluid>
						<p style={{ fontWeight: 'bold' }}>Copyright © 2022 A+Fitness| Designed by A+Fitness</p>
						<p style={{ fontWeight: 'bold' }}>©All rights reserved</p>
					</MDBContainer>
				</div>
			</MDBFooter>

		</div>
	);
};

export default Login;
