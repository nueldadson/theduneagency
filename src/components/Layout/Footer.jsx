import React from "react";
import { Fade } from "react-awesome-reveal";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div
			id="footer"
			className="w-full pt-16 px-8 bg-gray-200 flex justify-center flex-col items-center"
		>
			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Left Section */}
				<Fade direction="in" duration={500} className="h-full">
					<div className="bg-secondary text-gray-700 font-bold flex flex-col justify-between rounded-xl p-8 h-full">
						<div>
							<h2 className="text-2xl font-bold mb-4">Contact Information</h2>
							<p className="text-sm mb-6">
								Say something to start a live chat!
							</p>
						</div>
						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<FaPhoneAlt className="text-xl" />
								<span className="text-sm">+234 7033 780 502 </span>
							</div>
							<div className="flex items-center space-x-4">
								<FaEnvelope className="text-xl" />
								<span className="text-sm">contact@theduneagency.com</span>
							</div>
							<div className="flex items-start space-x-4">
								<FaMapMarkerAlt className="text-xl mt-1" />
								<span className="text-sm">Ikeja, Lagos, Nigeria.</span>
							</div>
						</div>
						<div className="flex space-x-4 mt-6">
							<a
								href="https://x.com/theduneagency"
								className="w-8 h-8 bg-black flex items-center justify-center rounded-full"
							>
								<FaTwitter className="text-white text-sm" />
							</a>
							<a
								href="https://instagram.com/theduneagency"
								className="w-8 h-8 bg-black flex items-center justify-center rounded-full"
							>
								<FaInstagram className="text-white text-sm" />
							</a>
							<a
								href="https://linkedin.com/company/the-dune-agency"
								className="w-8 h-8 bg-black flex items-center justify-center rounded-full"
							>
								<FaLinkedin className="text-white text-sm" />
							</a>
						</div>
					</div>
				</Fade>

				{/* Right Section */}
				<div className="bg-white rounded-xl p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* First Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								First Name
							</label>
							<input
								type="text"
								placeholder="John"
								className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2"
							/>
						</div>
						{/* Last Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Last Name
							</label>
							<input
								type="text"
								placeholder="Doe"
								className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2"
							/>
						</div>
						{/* Email */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Email
							</label>
							<input
								type="email"
								placeholder="john@gmail.com"
								className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2"
							/>
						</div>
						{/* Phone Number */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Phone Number
							</label>
							<input
								type="text"
								placeholder="+xxxx xxxx xxx"
								className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2"
							/>
						</div>
					</div>
					{/* Select Subject */}
					<div className="mt-6">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Select Subject?
						</label>
						<div className="flex items-center space-x-4">
							<label className="flex items-center">
								<input
									type="radio"
									name="subject"
									className="w-4 h-4 text-secondary border-gray-300"
								/>
								<span className="ml-2 text-sm text-gray-700">
									General Inquiry
								</span>
							</label>
							<label className="flex items-center">
								<input
									type="radio"
									name="subject"
									className="w-4 h-4 text-secondary border-gray-300"
								/>
								<span className="ml-2 text-sm text-gray-700">Support</span>
							</label>
						</div>
					</div>
					{/* Message */}
					<div className="mt-6">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Message
						</label>
						<textarea
							rows="4"
							placeholder="Write Message"
							className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-secondary focus:outline-none"
						></textarea>
					</div>
					{/* Submit Button */}
					<div className="mt-6 text-center">
						<button className="bg-secondary text-white font-semibold py-3 px-6 rounded-lg hover:bg-secondary focus:ring-2 focus:ring-secondary focus:outline-none">
							Send Message
						</button>
					</div>
				</div>
			</div>
			<p className="w-full text-center">
				&copy; {new Date().getFullYear()} TheDuneAgency All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
