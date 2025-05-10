import React from 'react';
import EmailIcon from '../assets/envelope-solid.svg?react';
import GithubIcon from '../assets/github-brands.svg?react';
import LinkedInIcon from '../assets/linkedin-brands.svg?react';

const Contact = React.forwardRef(({ id }, ref) => {

	const links = [
		{
			name: "Email",
			title: "jylland.teodosio@gmail.com",
			link: "mailto:jylland.teodosio@gmail.com",
			icon: EmailIcon,
		},
		{
			name: "Github",
			title: "github.com/jyllandteodosio",
			link: "http://github.com/jyllandteodosio",
			icon: GithubIcon,
		},
		{
			name: "LinkedIn",
			title: "linkedin.com/in/jylland-teodosio/",
			link: "http://linkedin.com/in/jylland-teodosio/",
			icon: LinkedInIcon,
		},
	];

	return (
		<>
			<main id={id} ref={ref} className="pt-[8rem] min-h-screen">
				{links.map((link, index) => (
					<div key={index} className="contact-link">
						<a
							href={link.link}
							className="pb-6 flex items-center mb-4 font-bold text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							{/* <img src={link.icon} alt={link.name} className="w-6 h-6 mr-8" /> */}
							{/* <EmailIcon className="fill-white" /> */}
							<link.icon
								className="link-icon fill-white w-8 h-8"
								aria-hidden="true"
							/>
							<span className="ml-8 text-lg">{link.title}</span>
						</a>
					</div>
				))}
			</main>
		</>
	)
});

export default Contact
