import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardContainer from "./Card_container.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
//create your first component
const Home = () => {
	return (
	<div>
		<Navbar />
		<Jumbotron />
		<CardContainer className="col-md-2">
			<Cards title="card1" image="https://picsum.photos/200/300?random=1">Some quick example text to build on the card title and make up the bulk of the card's content.</Cards>
			<Cards title="card2" image="https://picsum.photos/200/300?random=2">Some quick example text to build on the card title and make up the bulk of the card's content.</Cards>
			<Cards title="card3" image="https://picsum.photos/200/300?random=3">Some quick example text to build on the card title and make up the bulk of the card's content.</Cards>
			<Cards title="card4" image="https://picsum.photos/200/300?random=4">Some quick example text to build on the card title and make up the bulk of the card's content.</Cards>
		</CardContainer>
		<Footer />
    </div>
	);
};
export default Home;
