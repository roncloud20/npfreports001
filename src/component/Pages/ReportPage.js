import { Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import FooterExtraComment from "../Common/FooterExtraComment";
import "../Css/ReportPage.css";
import logo from "../images/policelogo.png";

function ReportPage() {
	const [check, setCheck] = useState(false);

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
				<button>To Top</button>
			</div>
			<center className="ReportPageLabel">Report</center>
			<div className="ReportPageBody">
				<div className="ReportPageBodyContent">
					<div className="ReportFormPart">
						<center className="TheFormHolder">
							<label>Date:</label> <input />
						</center>
						<center className="TheFormHolder">
							<label>Address:</label> <input />
						</center>{" "}
						<center className="TheFormHolder">
							<label>Location:</label> <input />
						</center>{" "}
						<center className="TheFormHolder">
							<label>City:</label> <input />
						</center>{" "}
						<center className="TheFormHolder">
							<label>State:</label> <input />
						</center>{" "}
						<center className="TheFormHolder">
							<label>Brief:</label> <input />
						</center>{" "}
						<center className="FormCheck">
							<Checkbox
								onClick={() => {
									setCheck(true);
								}}
							/>
							<p>All information presented here are all true</p>
						</center>
						<button
							className="Proceed"
							onClick={() => {
								if (check) {
									hist.push("/previewpage");
								}
							}}>
							Proceed
						</button>
					</div>
					{/* <div className="ReportOUtPUt">
						<div className="theReportHOlder"></div>
					</div> */}
				</div>
			</div>
			<div className="ReportfooterHolder">
				<FooterExtraComment />
			</div>
		</div>
	);
}

export default ReportPage;
