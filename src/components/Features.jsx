import React from "react";
import { Slide } from "react-awesome-reveal";

const Features = () => {
	return (
		<section id="features" className="py-16">
			<div className="mx-auto px-4">
				{/* Section Heading */}
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-semibold text-black">
						Why Choose Us?
					</h2>
				</div>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Feature Card 1 */}
					<Slide direction="up" duration={500}>
						<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95">
							<i className="lnr lnr-apartment text-yellow-500 text-6xl mb-6 block mx-auto"></i>
							<h3 className="text-lg font-semibold text-gray-800 mb-4">
								BREATHTAKING VIEWS
							</h3>
							<p className="text-gray-600">
								Wake up to stunning horizons and unwind with panoramic
								cityscapes bathed in golden sunsets—all from the comfort of your
								dream property.
							</p>
						</div>
					</Slide>

					{/* Feature Card 2 */}
					<Slide direction="up" duration={700}>
						<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95">
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
						<div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95">
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
		</section>
	);
};

export default Features;
