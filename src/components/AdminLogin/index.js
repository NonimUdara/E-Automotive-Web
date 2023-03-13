import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from './AutomotiveBackground.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
			window.location = "/home";
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
				<div className="container">
					<button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="navbar-brand" aria-current="page" style={{ fontWeight: 'bold', fontSize: 20 }} href="/">E-Automotives</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div class="row">
				<img src={logo} style={{ height: '750px', width: '1350px' }} alt='background'>
				</img>
			</div>
			<div class="row">
				<div className={styles.login_container} style={{ marginBottom: '-30px' }}>
					<div className={styles.login_form_container}>
						<div className={styles.left}>
							<form className={styles.form_container} onSubmit={handleSubmit}>
								<h3 style={{ marginBottom: '30px', marginTop: '-100px' }}>Admin Login</h3>
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

			<MDBFooter style={{ backgroundColor: '#3C3C3C' }} className="font-small pt-4 mt-4">
				<MDBContainer fluid className="text-center text-md-left">
					<MDBRow>
						<p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '19px' }}>Vehicle Automotive spare parts sales platform</p>
						<hr style={{ color: '#CFCFCF', alignItems: 'center', textAlign: 'center' }}></hr>
					</MDBRow>
				</MDBContainer>
				<div className="footer-copyright text-center py-3">
				<h1 style={{marginBottom: "20px", textAlign: "center", alignItems: "center"}}>
				    <a href=" " role="button" style={{padding: "10px", color: "#4267B2"}}><FontAwesomeIcon icon={faFacebook}/></a>
					<a href=" " role="button" style={{padding: "10px", color: "#1DA1F2"}}><FontAwesomeIcon icon={faTwitter}/></a>
					<a href=" " role="button" style={{padding: "10px", color: "#833AB4"}}><FontAwesomeIcon icon={faInstagram}/></a>
				</h1>
					<MDBContainer fluid>													
						<p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '15px' }}>Nonim Creations © 2023</p>
						<p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '15px' }}>All Right Reserved</p>
					</MDBContainer>
				</div>
			</MDBFooter>

		</div>
	);
};

export default Login;
