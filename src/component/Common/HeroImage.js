import { Button } from "antd";
import React from "react";
import "../Css/HeroImage.css";

function HeroImage() {
	return (
		<div className="heroImage">
			<div className="heeroImageMain">
				<div className="HeroImagecontent">
					{" "}
					<h1>NPF REPORT PROJECT</h1>
					<p>
						the nigeria police force is open to hear all you report with rapid
						response, remember the police is your friend
					</p>
				</div>
				<Button className="HeroImageButton"> Explore</Button>
			</div>
		</div>
	);
}

export default HeroImage;
