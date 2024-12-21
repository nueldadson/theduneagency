import React from "react";
import bgVideo from "../assets/videos/bgvid.mp4";
import bgPoster from "../assets/images/hero.jpg";
import { Logowhite } from "../assets/images";

const Herovideo = () => {
	return (
		<div id="hero-section" className="relative">
			{/* Hero Unit */}
			<div className="relative overflow-hidden w-full h-screen">
				{/* Video Background */}
				<video
					autoPlay
					loop
					muted
					poster={bgPoster}
					id="bgvid"
					className="absolute top-0 left-0 w-full h-full object-cover"
				>
					<source src={bgVideo} type="video/mp4" />
				</video>

				{/* Overlay */}
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

				{/* Hero Caption */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-6">
					{/* Logo */}
					<div className="mb-6">
						<img
							id="logo"
							src={Logowhite}
							alt="logo"
							className="w-72 mx-auto"
						/>
					</div>

					{/* Headline */}
					<div className="space-y-2 mb-12">
						<h1 className="text-4xl md:text-6xl font-bold">Dune Agency</h1>
						<p className="text-lg md:text-2xl">WHERE LAND MEETS LEGACY</p>
					</div>

					{/* Call to Action */}
					<a
						className="mb-12 px-6 py-3 bg-secondary text-white font-semibold text-lg rounded-lg hover:bg-gray-800 hover:text-secondary transition"
						href="#footer"
					>
						BOOK A VISIT
					</a>

					{/* Arrow */}
					<a
						href="#features"
						className="mt-6"
						id="arrow"
						style={{
							animation: "bounce 2s infinite",
						}}
					>
						<i className="text-4xl font-extrabold lnr lnr-chevron-down text-secondary"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Herovideo;
