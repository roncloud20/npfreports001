import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Css/Preview.css";
import logo from "../images/policelogo.png";
import FooterExtraComment from "../Common/FooterExtraComment";

function PreviewPage() {
	const hist = useHistory();

	return (
		<div className="ReportPage">
			<div className="ReportPageHeader">
				<img
					src={logo}
					onClick={() => {
						hist.push("/");
					}}
				/>{" "}
				<button
					onClick={() => {
						hist.push("/dashboard");
					}}>
					To Top
				</button>
			</div>
			<div className="Preview">Preview</div>
			<div className="PreviewPageBody">
				<div className="PreviewPageBodyContent">
					<center className="PreviewThisContent">
						<p>
							i am this and that i am lost my what ever and i want to do a
							police report oabout this and that so that i can do this and that
							, bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page i am
							this and that i am lost my what ever and i want to do a police
							report oabout this and that so that i can do this and that ,
							bexause the sample isn't ready yet thank God for the online
							platform i am now able to have mny report in a pdf format, hurry
							isn't technology sweet , so what next i think i should go straiht
							to history page after doing the bare minimun of this page
							<section className="notStampedSignal">NOT STAMPED</section>
						</p>
					</center>
					<div className="buttonHolder">
						{" "}
						<button
							className="EditButton"
							onClick={() => {
								hist.push("/reportpage");
							}}>
							Edit
						</button>
						<button className="ProceedButton">Proceed</button>
					</div>
				</div>
			</div>
			<div className="ReportfooterHolder">
				<FooterExtraComment />
			</div>
		</div>
	);
}

export default PreviewPage;
