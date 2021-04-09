import React from "react";
import { Link, useHistory } from "react-router-dom";
import FooterExtraComment from "../Common/FooterExtraComment";
import "../Css/DashBoardPage.css";
import logo from "../images/policelogo.png";

function DashBoardPage() {
	const hist = useHistory();
	const ReportCard = ({ text }) => {
		return (
			<div className="reportCard">
				<p>{text}</p>
			</div>
		);
	};
	return (
		<div className="DashBoard">
			<div className="dashboardContent">
				<div className="dashBoardHOrizontalHeader">
					<img className="dashBoardSmallScreenLOgo" />
					<div className="dashBoardProfilePicsAndSignOUtButton">
						<img className="smallSCreenPrfilePics" />
						<button className="smallScreenlogoutButton">Sign out</button>
					</div>{" "}
				</div>
				<div className="dashLeftSide">
					<img
						className="dashboardLogo"
						src={logo}
						onClick={() => {
							hist.push("/");
						}}
					/>

					<img className="dashBoardProfilePIcs" />

					<div className="TheDashBoardOption">
						<p>Home</p>
						<p>About NPF</p>
						<p>How to</p>
						<p
							onClick={() => {
								hist.push("/history");
							}}>
							History
						</p>
					</div>
					<botton
						className="dashboardLOgOutButton"
						onClick={() => {
							hist.push("/signup");
						}}>
						Sign Out
					</botton>
				</div>

				<center className="therightSummarydashboard">
					<div className="dashrightSide">
						<ReportCard text="For lost of Items" />
						<ReportCard text="For Accident" />
						<Link to="/reportpage" style={{ textDecoration: "none" }}>
							{" "}
							<ReportCard text="For filling a report" />
						</Link>

						<ReportCard text="For other activities" />
					</div>
					<button className="fileForReportButton">File for Report</button>
					<div className="footerHolder">
						<FooterExtraComment />
					</div>
				</center>
			</div>
		</div>
	);
}

export default DashBoardPage;
