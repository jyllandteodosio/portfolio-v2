import React, { useState, useEffect } from 'react';

const Navigation = ({ scrollToSection, sectionLinks }) => {
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		console.log("sectionLinks: ", sectionLinks);
		const observer = new IntersectionObserver(
			(entries) => {
				console.log("Observer callback triggered");
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log("showing section: ", entry.target.id);
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: '0px',
				threshold: 0.5,
			}
		);

		sectionLinks.forEach((section) => {
			console.log("section.id: ", section.id, "section.ref.current: ", section.ref.current);
			if (section.ref.current) {
				observer.observe(section.ref.current);
			}
		});

		return () => {
			sectionLinks.forEach((section) => {
				if (section.ref.current) {
					observer.unobserve(section.ref.current);
				}
			});
		};
	}, [sectionLinks]);

	return (
		<>
			<nav>
				<ul>
					{sectionLinks.map((section) => (
						<li key={section.id}>
							<button
								onClick={() => {
									scrollToSection(section.ref);
									setActiveSection(section.id);
								}}
								className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
							>
								{section.id}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
