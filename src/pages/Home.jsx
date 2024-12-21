import React from "react";
import { Herovideo, Features, Carousel, Testimonials } from "../components";

const Home = () => {
	return (
		<div>
			<h1 className="">
				<Herovideo />
				<Features />
				<Carousel />
				<Testimonials />
			</h1>
		</div>
	);
};

export default Home;
