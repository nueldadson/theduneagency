import React, { useState, useEffect } from "react";
import { Logowhite, Logo } from "../../assets/images";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isOpen, toggle }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed w-full h-24 flex items-center justify-between z-50 px-44 max-lg:px-16 max-md:px-10 transition-all duration-300 ${
				isScrolled
					? "bg-white text-black shadow-lg"
					: "bg-black bg-opacity-0 text-white"
			}`}
		>
			{/* Logo */}
			<a href="/" className="flex items-center h-full py-4">
				<img
					src={isScrolled ? Logo : Logowhite}
					alt="Logo"
					className="h-full"
				/>
			</a>

			{/* Navigation */}
			<nav className="flex h-full items-center">
				<ul className="flex space-x-6 justify-end mr-5 items-center max-sm:hidden text-lg">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className={`font-montserrat leading-normal font-semibold hover:text-secondary ${
									isScrolled ? "text-black" : "text-white"
								}`}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="flex justify-end hidden max-sm:block">
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className="text-[24px]"
						onClick={toggle}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
