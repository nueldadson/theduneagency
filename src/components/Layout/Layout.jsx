import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";
import { Logo } from "../../assets/images";

const Layout = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);

	// Simulate loading process
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500); // Simulate 3 seconds loading
		return () => clearTimeout(timer);
	}, []);

	// Animation Variants
	const loaderVariants = {
		hidden: { y: 0 },
		exit: { y: "-100%", transition: { duration: 0, ease: "easeInOut" } },
	};

	const mainVariants = {
		hidden: { y: "100%", opacity: 0 },
		enter: {
			y: 0,
			opacity: 1,
			transition: { duration: 0, ease: "easeIn" },
		},
	};

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="min-h-screen flex flex-col">
			{/* Loading Screen */}
			{isLoading && (
				<motion.div
					id="loader-wrapper"
					className="fixed inset-0 bg-white z-[1050] flex flex-col items-center justify-center"
					initial="hidden"
					animate="hidden"
					exit="exit"
					variants={loaderVariants}
				>
					<img
						className="loader-logo w-60 mb-4"
						src={Logo}
						alt="loading screen logo"
					/>
				</motion.div>
			)}

			{/* Main Layout */}
			{!isLoading && (
				<motion.div
					initial="hidden"
					animate="enter"
					variants={mainVariants}
					className="flex-grow "
				>
					<Nav isOpen={isOpen} toggle={toggle} />
					{/* Pass transient prop */}
					<Sidebar isOpen={isOpen} toggle={toggle} />
					<main className="flex-grow bg-gray-100">{children}</main>
					<Footer />
				</motion.div>
			)}
		</div>
	);
};

export default Layout;
