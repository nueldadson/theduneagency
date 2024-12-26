import React from "react";
import {
	Herovideo,
	Features,
	Carousel,
	Testimonials,
	Partners,
	Search,
} from "../components";

const Home = () => {
	return (
		<div>
			<h1 className="">
				<Herovideo />
				<Features />
				<Carousel />
				<Testimonials />
				<Search />
				<Partners />
			</h1>
		</div>
	);
};

export default Home;
