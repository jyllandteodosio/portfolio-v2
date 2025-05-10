import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';

import { useMemo, useRef } from 'react';
import { scrollToSection } from './animations/animations';

function App() {

	const homeRef = useRef(null);
	const experienceRef = useRef(null);
	const worksRef = useRef(null);
	const contactRef = useRef(null);

	const sectionLinks = useMemo(() => [
		{
			id: "home",
			ref: homeRef,
		},
		{
			id: "experience",
			ref: experienceRef,
		},
		{
			id: "works",
			ref: worksRef,
		},
		{
			id: "contact",
			ref: contactRef,
		},
	], []);

	return (
		<>
			<div className="h-screen text-white bg-[#A85777] overflow-hidden tracking-normal">
				<div className="grid grid-cols-14">
					<div className="col-span-2 col-start-2 pt-[8rem]">
						<Navigation scrollToSection={scrollToSection} sectionLinks={sectionLinks} />
					</div>
					<div className="col-span-8 col-start-5 h-screen hide-scrollbar pb-[8rem]">
						<Home id={"home"} ref={homeRef} />
						<Experience id={"experience"} ref={experienceRef} />
						<Works id={"works"} ref={worksRef} />
						<Contact id={"contact"} ref={contactRef} />
					</div>
				</div>
			</div>

		</>
	)
}

export default App
