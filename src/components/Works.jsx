import React from 'react';
import TaskaruImage1 from '../assets/Taskaru_1.png';
import TaskaruImage2 from '../assets/Taskaru_2.png';
import ImageGallery from './ImageGallery';

const Works = React.forwardRef(({ id }, ref) => {
	const works = {
		"TASKARU": {
			url: "http://taskaru.jyllandteodosio.dev",
			roles: {
				"Full-Stack Engineer": {
					date: "January 2025 - May 2025",
				},
			},
			description: "Task management application designed for seamless, real-time collaboration among users. Developed this project primarily as a hands-on way to deepen my understanding and practical skills with the MERN stack and TypeScript. It focuses on creating an interactive and responsive environment where users can manage shared tasks effectively and see updates live.",
			skills: "Node.js · Express · MongoDB · ReactJS · TypeScript · HTML5 · CSS · TailwindCSS · Git · Docker",
			images: [
				TaskaruImage1,
				TaskaruImage2
			]
		},
		"Carpool Application": {
			url: "#",
			roles: {
				"Full-Stack Engineer": {
					date: "2022 - 2024",
				},
			},
			description: "Designed and built an internal carpool application to aid Infor Manila employees during the pandemic. Integrated a report generation feature for usage tracking. Recognized as “Team of the Year (2022)” at Infor Manila’s annual employee recognition program for developing a tool that brought value to the organization resulting in sustained business performance.",
			skills: "PHP · Laravel · MySQL · JavaScript · HTML5 · CSS · Bootstrap · Git",
			images: []
		},
		"Online Helpers Australia Website": {
			url: "#",
			roles: {
				"Front-End Web Developer": {
					date: "2019 - 2020",
				},
			},
			description: "Designed and developed a marketing website for Online Helpers Australia, showcasing their products and services.",
			skills: "PHP · WordPress · MySQL · JavaScript · HTML5 · CSS · Bootstrap · Git · Adobe Creative Suite",
			images: []
		},
	}

	return (
		<>
			<main id={id} ref={ref} className="pt-[8rem] min-h-screen">
				{Object.entries(works).map(([project, { url, roles, description, skills, images }]) => (
					<div key={project} className="job flex-full pb-16">
						<h3 className="text-xl font-bold pb-4 transition-all transition-discrete hover:text-[var(--secondary-color)]">
							<a href={url} target="_blank" rel="noopener noreferrer">
								{project}
							</a>
						</h3>
						<div className="roles flex-full pb-6">
							{Object.entries(roles).map(([role, { date }]) => (
								<div key={role} className="flex role text-base first:font-semibold first:text-white first:pb-1 text-[var(--secondary-color)] font-normal">
									<p className="date pr-6">{date}</p>
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
						{images.length > 0 && (
							<ImageGallery images={images} project={project} />
						)}
					</div>
				))}
			</main>
		</>
	)
});

export default Works
