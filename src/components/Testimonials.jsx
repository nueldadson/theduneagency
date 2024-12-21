import React from "react";
import { hero } from "../assets/images"; // Ensure the image path is correct

const Testimonials = () => {
	return (
		<div
			className="relative py-[60px] w-full flex items-center justify-center text-center text-white"
			style={{
				backgroundImage: `url(${hero})`, // Correctly reference the image
				backgroundAttachment: "fixed", // Enables the parallax effect
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-85"></div>

			{/* Content */}
			<div className="relative sm:px-6 max-md:px-16 md:px-44 z-10">
				{/* Testimonial Title */}
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					<span className="text-yellow-500">"My Dream Apartment"</span>
				</h2>
				{/* Testimonial Text */}
				<p className="text-md md:text-lg mb-6">
					Lorem ipsum dolor sit amet, cu assentior voluptaria consequuntur usu,
					ut nam assum verterem, his unum scripserit suscipiantur no. Graeci
					fabellas vix at. Et mei quidam fuisset, vis purto percipit cu. Pro
					audire consequuntur an, eum id consul scribentur.
				</p>
				{/* Testimonial Author */}
				<p className="font-semibold text-lg md:text-xl">- JOHN DOE</p>
			</div>
		</div>
	);
};

export default Testimonials;
