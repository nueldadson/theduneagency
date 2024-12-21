import React from "react";

const Footer = () => {
	return (
		<div id="footer">
			<p className="w-full text-center">
				&copy; {new Date().getFullYear()} TheDuneAgency All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
