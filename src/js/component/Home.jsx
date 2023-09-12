import React from "react";
//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Piepagina from "./piepagina.jsx";
//create your first component

const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron />
		<Card />
		<Footer />
		</>
	)
};

export default Home;