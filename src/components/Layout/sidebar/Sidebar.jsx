import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarContent,
	SidebarMenu,
	SidebarLink,
	SidebarIcon,
	LinkedinIcon,
	InstagramIcon,
	TwitterIcon,
} from "./Sidebarelements";
import "./sidebar.css";
import { Logowhite } from "../../../assets/images";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			{/* Prevent isOpen from being passed to the DOM */}
			<SidebarContainer
				$isOpen={isOpen}
				onClick={toggle}
				className="sidebar containerr"
			>
				<img src={Logowhite} alt="logo" className=" w-24 mt-4 ml-8 absolute" />
				<Icon onClick={toggle} className="mr-3npx mt-2">
					<CloseIcon />
				</Icon>
				<SidebarContent>
					<SidebarMenu>
						<SidebarLink onClick={toggle} href="#features">
							Features
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#pricing">
							Pricing
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#footer">
							Contact
						</SidebarLink>
					</SidebarMenu>
					<SidebarIcon>
						<a href="https://linkedin.com/company/theduneagency">
							<LinkedinIcon />
						</a>
						<a href="https://instagram.com/theduneagency/">
							<InstagramIcon />
						</a>
						<a href="https://twitter.com/theduneagency/">
							<TwitterIcon />
						</a>
					</SidebarIcon>
				</SidebarContent>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
