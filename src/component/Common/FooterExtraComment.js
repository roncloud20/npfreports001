import React from "react";
import "../Css/FooterExtraComment.css";
import { Link, useHistory } from "react-router-dom";

function FooterExtraComment() {
	const hist = useHistory();
	return (
		<center className="FooterExterComment">
			<p>Security</p>
			<p>Terms and Condition</p>
			<p>Privacy Policies</p>
			<p
				onClick={() => {
					hist.push("https://www.npf.gov.ng/");
				}}>
				about NPF
			</p>
		</center>
	);
}

export default FooterExtraComment;
