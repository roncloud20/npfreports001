import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoardPage from "./component/Pages/DashBoardPage";
import HomePage from "./component/Pages/HomePage/HomePage";
import ReportPage from "./component/Pages/ReportPage";
import SignUpPage from "./component/Pages/SignUpPage";
import PreviewPage from "./component/Pages/PreviewPage";
import HistoryPage from "./component/Pages/HistoryPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signup" component={SignUpPage} />
				<Route exact path="/dashboard" component={DashBoardPage} />
				<Route exact path="/reportpage" component={ReportPage} />
				<Route exact path="/previewpage" component={PreviewPage} />
				<Route exact path="/history" component={HistoryPage} />
			</Switch>
		</Router>
	);
}

export default App;
