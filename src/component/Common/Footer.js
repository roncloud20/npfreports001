import React from "react";
import { useHistory } from "react-router-dom";
import "../Css/Footer.css";

function Footer() {
	const hist = useHistory();
	return (
		<div className="Footer">
			<div className="FooterContent">
				<img />
				<div className="FooterLinks">
					<div className="Links">
						<p>Home</p>
						<p>NPF</p>
						<p>AboutNPF</p>
						<p>How to</p>
					</div>
					<div>
						<p>Security</p>
						<p>Terms and Condition</p>
						<p>Privacy Policies</p>
						<p>Others </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
