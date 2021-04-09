import React from "react";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import AdsSpace from "./AdsSpace";
import HeroImage from "../../Common/HeroImage";
import "../../Css/HomePage.css";
import TheHomeContent from "./TheHomeContent";

function HomePage() {
	return (
		<div>
			<Header />
			<HeroImage />
			<TheHomeContent />
			<AdsSpace />
			<Footer />
		</div>
	);
}

export default HomePage;
