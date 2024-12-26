import React from "react";
import bgVideo from "../assets/videos/bgvid.mp4";
import bgPoster from "../assets/images/hero.jpg";
import { Logowhite } from "../assets/images";
import { Fade, Slide } from "react-awesome-reveal";

const Herovideo = () => {
	return (
		<div id="hero-section" className="relative bg-[#f3f4f6]">
			<Fade direction="in" duration={700}>
				{/* Hero Unit */}
				<div
					className=" relative overflow-hidden w-full min-h-[calc(100vh+125px)] bg-[#f3f4f6]"
					style={{
						clipPath: "polygon(100% 80%, 50% 100%, 0 80%, 0 0, 100% 0)",
						WebkitMaskImage:
							"linear-gradient(to bottom right, rgba(255, 208, 18, 1) 50%, rgba(0, 0, 0, 0) 1000%)",
						maskImage:
							"linear-gradient(to bottom right, rgba(255, 208, 18, 1) 50%, rgba(0, 0, 0, 0) 1000%)",
						willChange: "clip-path",
					}}
				>
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
					<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 hero-overlay"></div>

					{/* Hero Caption */}
					<div className="absolute -top-0 inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-6 hero-caption">
						{/* Logo */}
						{/* <div className="animation-element pop-in mb-2">
							<img
								id="logo"
								src={Logowhite}
								alt="logo"
								className="w-40 md:w-48 lg:w-56 mx-auto"
							/>
						</div> */}

						{/* Headline */}
						<div className="animation-element slide-down space-y-2 mb-6">
							<h1 className="uppercase text-4xl md:text-6xl font-bold">
								Dune Agency
							</h1>
							<p className="text-lg md:text-2xl ">Where Land Meets Legacy</p>
						</div>

						{/* Call to Action */}
						<Fade direction="in" duration={1200}>
							<Slide direction="up" duration={1200}>
								<a
									className="button px-4 py-3 bg-yellow-500 text-black font-bold text-sm rounded-sm hover:bg-black hover:text-white hover:shadow-sm hover:shadow-secondary transition"
									href="#footer"
								>
									BOOK A VISIT
								</a>
							</Slide>
						</Fade>

						{/* Arrow */}
						<a
							href="#features"
							className="mt-16"
							id="arrow"
							style={{
								animation: "bounce 2s infinite",
							}}
						>
							<i className="text-4xl font-extrabold lnr lnr-chevron-down text-yellow-500"></i>
						</a>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Herovideo;
