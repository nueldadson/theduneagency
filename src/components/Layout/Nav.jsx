import React from "react";
import { Logowhite } from "../../assets/images";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isOpen, toggle, toggleActive }) => {
	return (
		<header className="bg-black bg-opacity-0 fixed w-full text-white h-24 flex items-center justify-between z-50 px-44 max-lg:px-16 max-md:px-10 ">
			{/* Logo */}
			<a href="/" className="flex items-center h-full py-4">
				<img src={Logowhite} alt="Logo" className="h-full" />
			</a>

			{/* Navigation */}
			<nav className="flex h-full items-center">
				<ul className="flex space-x-6 justify-end mr-5 items-center max-sm:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat  leading-normal text-coral-red font-semibold hover:text-secondary"
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
				{/* <a href="#features" className="">
					Features
				</a>
				<a href="#pricing" className="hover:text-secondary">
					Pricing
				</a>
				<a href="#footer" className="hover:text-secondary">
					Contact
				</a> */}
			</nav>
		</header>
	);
};

export default Nav;
