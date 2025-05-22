import React from 'react';
import TaskaruImage1 from '../assets/Taskaru_1.png';
import TaskaruImage2 from '../assets/Taskaru_2.png';
import DriverImage1 from '../assets/Driver_1.png';
import DriverImage2 from '../assets/Driver_2.png';
import DriverImage3 from '../assets/Driver_3.png';
import DriverImage4 from '../assets/Driver_4.png';
import DriverImage5 from '../assets/Driver_5.png';
import DriverImage6 from '../assets/Driver_6.png';
import DriverImage7 from '../assets/Driver_7.png';
import DriverImage8 from '../assets/Driver_8.png';
import DriverImage9 from '../assets/Driver_9.png';
import DriverImage10 from '../assets/Driver_10.png';
import PassengerImage1 from '../assets/Passenger_1.png';
import PassengerImage2 from '../assets/Passenger_2.png';
import PassengerImage3 from '../assets/Passenger_3.png';
import PassengerImage4 from '../assets/Passenger_4.png';
import AdminImage1 from '../assets/Admin_1.png';
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
			images: [
				DriverImage1,
				DriverImage2,
				DriverImage3,
				DriverImage4,
				DriverImage5,
				DriverImage6,
				DriverImage7,
				DriverImage8,
				DriverImage9,
				DriverImage10,
				PassengerImage1,
				PassengerImage2,
				PassengerImage3,
				PassengerImage4,
				AdminImage1
			]
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
