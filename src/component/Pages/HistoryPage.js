import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Css/HistoryPage.css";

function HistoryPage() {
	const hist = useHistory();
	return (
		<div className="HistoryPage">
			<div className="HistoryPageContent">
				<div className="HistoryPageheader">
					<img />
					<div> progfile holder</div>
				</div>
			</div>
		</div>
	);
}

export default HistoryPage;
