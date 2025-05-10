import React from 'react';

const Experience = React.forwardRef(({ id }, ref) => {

	const jobs = {
		"Infor PSSC Inc.": {
			url: "https://www.infor.com/",
			roles: {
				"Senior Software Engineer": {
					date: "2022 - 2024",
				},
				"Software Engineer": {
					date: "2020 - 2022",
				},
			},
			description: "Enhanced and maintained key features of the Infor HR Talent application. Spearheaded features related to IBAN and SWIFT bank accounts of over 80 countries. Developed a feature where HR generalists can create and manage customizable employment contracts. Built an internal carpool application utilized by hundreds of employees.",
			skills: "Java · PHP · Laravel · MSSQL · JavaScript · HTML5 · CSS · Bootstrap · Git"
		},
		"7th Media Digital Studio": {
			url: "https://7thmedia.com/",
			roles: {
				"Multimedia Artist / Developer (Freelance, Remote)": {
					date: "2019 - 2020",
				},
				"Multimedia Artist / Developer (Full-time, On-site)": {
					date: "2016 - 2018",
				},
			},
			description: "Designed, developed, and maintained websites for multiple companies. Optimized web development workflow, creating starter kits that cut lead time by 50% and implementing code review checklists that reduced client-reported issues by 40%. Extended WordPress’s REST API to handle custom data and processes. Applied page performance and search engine optimization to websites and implemented site security following OWASP guidelines. Managed web hosting, domain configuration, and server deployment of client websites.",
			skills: "PHP · WordPress · MySQL · JavaScript ·  jQuery · HTML5 · CSS ·  Gulp · Webpack · Git"
		},
		"Sales Creator": {
			url: "https://salescreator.com.au/",
			roles: {
				"Graphic Designer (Freelance, Remote)": {
					date: "2018 - 2020",
				},
			},
			description: "Designed print and digital marketing materials including flyers, posters, and banners.",
			skills: "Adobe Illustrator · InDesign · Photoshop"
		},
		"Online Helpers Australia": {
			url: "https://onlinehelpers.com.au/",
			roles: {
				"Front-End Web Developer (Freelance, Remote)": {
					date: "2017 - 2019",
				},
			},
			description: "Designed, developed, and maintained websites for real-estate agencies. Developed REST API for a property search and filter plugin.",
			skills: "PHP · WordPress · MySQL · JavaScript · HTML5 · CSS · Bootstrap · Git · Adobe Creative Suite"
		},
		"Skillshot Labs": {
			url: "https://www.startupranking.com/skillshot-labs",
			roles: {
				"Web Designer / Developer": {
					date: "2015 - 2016",
				},
				"Graphic Designer": {
					date: "2014 - 2015",
				},
			},
			description: "Created the wireframes and developed the prototype for a restaurant reservation app. Designed, developed, and maintained E-commerce and Information websites for multiple companies. Designed UI elements and modelled 2D and 3D assets for mobile games.",
			skills: "PHP · Drupal · Magento · MySQL · JavaScript · HTML5 · CSS · Sketch · Blender · Adobe Creative Suite"
		},
	}

	return (
		<>
			<main id={id} ref={ref} className="pt-[8rem] min-h-screen">
				{Object.entries(jobs).map(([company, { url, roles, description, skills }]) => (
					<div key={company} className="job flex-full pb-16">
						<h3 className="text-xl font-bold pb-4 transition-all transition-discrete hover:text-[var(--secondary-color)]">
							<a href={url} target="_blank" rel="noopener noreferrer">
								{company}
							</a>
						</h3>
						<div className="roles flex-full pb-6">
							{Object.entries(roles).map(([role, { date }]) => (
								<div key={role} className="flex role text-base first:font-semibold first:text-white first:pb-1 text-[var(--secondary-color)] font-normal">
									<p className="date w-[8rem]">{date}</p>
									<p className="job-title">{role}</p>
								</div>
							))}
						</div>
						<div className="description pb-8 text-sm leading-10 font-light opacity-90 tracking-wide">
							<p>{description}</p>
						</div>
						<div className="skills text-sm font-semibold secondary opacity-90">
							<p>{skills}</p>
						</div>
					</div>
				))}
			</main>
		</>
	)
});

export default Experience
