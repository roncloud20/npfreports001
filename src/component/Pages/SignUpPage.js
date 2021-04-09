import React, { useState } from "react";
import "../Css/SignUpPage.css";
import { Link, useHistory } from "react-router-dom";
import FooterExtraComment from "../Common/FooterExtraComment";
import logo from "../images/policelogo.png";
function SignUpPage() {
	const hist = useHistory();
	const [show, setShow] = useState(true);
	const changForm = () => {
		setShow(!show);
	};

	const Login = () => {
		hist.push("/dashboard");
	};

	return (
		<>
			<center className="SignUpPage">
				<div className="logoHolder">
					<img
						src={logo}
						onClick={() => {
							hist.push("/");
						}}
					/>
				</div>
				{show ? (
					<div className="SignUpContent">
						<div className="SignUpNow">
							<label>Sign in Here</label>
							<form className="FormPart">
								<input
									type="email"
									placeholder="Email"
									className="inputField"
								/>
								<input
									type="password"
									placeholder="password"
									className="inputField"
								/>
								<input
									onClick={() => {
										Login();
									}}
									type="submit"
									placeholder="Submit"
									className="inputFieldSubmit"
								/>
							</form>
							<div className="register">
								Don't have an account? Click{""}
								<Link
									style={{ textDecoration: "none", color: "blue" }}
									onClick={() => {
										changForm();
									}}>
									<i> here </i>
								</Link>
								{""}
								to register
							</div>

							<div className="SignupExtraFooter">
								<FooterExtraComment />
							</div>
						</div>
					</div>
				) : (
					<div className="SignUpContent">
						<label>Welcome To The Registration Page</label>
						<div className="RegisterNew">
							<div className="ImagePart">
								<div className="holdingImage">
									<input type="file" />
									<div className="img"></div>
									<button>Change</button>
								</div>
								<div className="holdingImage">
									<input type="file" />
									<div className="img"></div>
									<button>Change</button>
								</div>
							</div>
							<div>
								<div className="CollectDATa">
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>First Name:</label>
											<p style={{ color: "red" }}> * </p>
										</div>
										<input />
									</div>
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>Last Name:</label>
											<p style={{ color: "red" }}> * </p>
										</div>
										<input />
									</div>
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>Email: </label>
											<p style={{ color: "red" }}> * </p>
										</div>
										<input />
									</div>
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>Password:</label>
											<p style={{ color: "red" }}> * </p>
										</div>
										<input />
									</div>

									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>Nationality: </label>
											<p style={{ color: "red" }}></p>
										</div>
										<input />
									</div>
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>Phone Number:</label>
											<p style={{ color: "red" }}> * </p>
										</div>
										<input />
									</div>
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>Identity Type:</label>
											<p style={{ color: "red" }}> * </p>
										</div>
										<input />
									</div>
									<div className="inputRegisterField">
										<div className="labelHolder">
											<label>ID card Number:</label>
											<p style={{ color: "red" }}>*</p>
										</div>
										<input />
									</div>
								</div>
								<input
									onClick={() => {
										Login();
									}}
									type="submit"
									placeholder="Submit"
									className="inputFieldSubmit"
								/>
							</div>
						</div>
						<input
							onClick={() => {
								Login();
							}}
							type="submit"
							placeholder="Submit"
							className="SubmitHere"
						/>
						<div className="SignUPFooter">
							<FooterExtraComment />
						</div>
					</div>
				)}
			</center>
		</>
	);
}

export default SignUpPage;
