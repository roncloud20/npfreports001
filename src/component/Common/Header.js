import { Button } from "antd";
import React from "react";
import "../Css/Header.css";
import npflogo from "../images/policelogo.png";
import { Link, useHistory } from "react-router-dom";

function Header() {
	const hist = useHistory();
	return (
		<div className="headerContainer">
			<div className="headerContent">
				<img
					className="logo"
					src={npflogo}
					onClick={() => {
						hist.push("/");
					}}
				/>
				<div className="OtherPart">
					<div className="aboutAndReport">
						<p>About NPF</p>
						<p> How to Report</p>
					</div>

					<Link
						className="reportBotton"
						onClick={() => {
							hist.push("/signup");
						}}>
						Get A Report
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
