import React from "react";
import {
	Herovideo,
	Features,
	Carousel,
	Testimonials,
	Partners,
} from "../components";

const Home = () => {
	return (
		<div>
			<h1 className="">
				<Herovideo />
				<Features />
				<Carousel />
				<Testimonials />
				<Partners />
			</h1>
		</div>
	);
};

export default Home;
