import React from "react";
import { Slide } from "react-awesome-reveal";

const Features = () => {
	return (
		<section id="features" className="py-16">
			<div className=" w-full">
				<div>
					<Slide direction="up" duration={500}>
						<p className=" font-extrabold text-center lg:text-4xl text-3xl sm:text-4xl mb-4">
							Our Architectural Journey
						</p>
						<p className=" text-center px-4 font-medium text-lg">
							Welcome to The Dune Agency! We are more than just a real estate
							company—we create pathways to your future. As Nigeria’s trusted
							real estate partner, we pride ourselves on delivering seamless,
							innovative, and tailored solutions for all your property needs.
							<br />
							<br />
							Built on a foundation of trust and driven by a passion for
							excellence, The Dune Agency is redefining real estate in Nigeria.
							Whether you're buying, selling, leasing, or investing, we are here
							to guide you every step of the way—one connection, one deal, one
							dream at a time.
						</p>
					</Slide>
					<Slide direction="up" duration={500}>
						{/* Section Heading */}
						<div className=" text-center px-8 mt-4">
							<p className="text-xl md:text-2xl font-semibold text-black">
								Why Choose Us?
							</p>
						</div>
					</Slide>
					<div className="mt-4 px-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4 ">
						<Slide direction="up" duration={500}>
							<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 h-[100%]">
								<i className="lnr lnr-apartment text-yellow-500 text-6xl mb-6 block mx-auto"></i>
								<h3 className="text-lg font-semibold text-gray-800 mb-4">
									BREATHTAKING VIEWS
								</h3>
								<p className="text-gray-600">
									Wake up to stunning horizons and unwind with panoramic
									cityscapes bathed in golden sunsets—all from the comfort of
									your dream property.
								</p>
							</div>
						</Slide>

						{/* Feature Card 2 */}
						<Slide direction="up" duration={700}>
							<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 h-[100%]">
								<i className="lnr lnr-diamond text-yellow-500 text-6xl mb-6 block mx-auto"></i>
								<h3 className="text-lg font-semibold text-gray-800 mb-4">
									ELEVATED LUXURY
								</h3>
								<p className="text-gray-600">
									At Dune, we believe luxury is more than a lifestyle—it’s a
									statement. Our spaces are crafted with sophistication and
									elegance by top designers to redefine modern living.
								</p>
							</div>
						</Slide>

						{/* Feature Card 3 */}
						<Slide direction="up" duration={900}>
							<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 h-[100%]">
								<i className="lnr lnr-lock text-yellow-500 text-6xl mb-6 block mx-auto"></i>
								<h3 className="text-lg font-semibold text-gray-800 mb-4">
									UNWAVERING SECURITY
								</h3>
								<p className="text-gray-600">
									Your peace of mind is our priority. That’s why every Dune
									property is equipped with cutting-edge security systems,
									ensuring your home is as safe as it is stunning.
								</p>
							</div>
						</Slide>

						{/* Feature Card 3 */}
						<Slide direction="up" duration={900}>
							<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 h-[100%]">
								<i className="lnr lnr-lock text-yellow-500 text-6xl mb-6 block mx-auto"></i>
								<h3 className="text-lg font-semibold text-gray-800 mb-4">
									UNWAVERING SECURITY
								</h3>
								<p className="text-gray-600">
									Your peace of mind is our priority. That’s why every Dune
									property is equipped with cutting-edge security systems,
									ensuring your home is as safe as it is stunning.
								</p>
							</div>
						</Slide>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
