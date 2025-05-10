import React from 'react';

const Home = React.forwardRef(({ id }, ref) => {

	return (
		<>
			<main id={id} ref={ref} className="pt-[8rem] h-screen">
				<div className="hero">
					<h1 className="font-semibold text-5xl pb-8">Jylland Teodosio</h1>
					<h2 className="text-2xl secondary">Full-Stack Engineer</h2>
				</div>
				<section className="about pt-12 leading-10 font-light text-base">
					<p className="pb-6">
						More than 10 years of experience building scalable web applications, developing robust APIs, and optimizing performance. I focus on delivering high-quality, efficient solutions in collaborative Agile environments.
					</p>
					<p className="pb-6">
						Experienced in enhancing large enterprise software, building client websites, and developing internal applications. Proficient across the full stack. Skilled in RESTful API design, database management, performance and SEO optimization, and secure coding practices.
					</p>
					<p className="pb-6">
						I believe in continuous learning and currently enjoy exploring new technologies through personal full-stack projects. I thrive on building solutions and collaborating on innovative projects that lead to great digital experiences.
					</p>
					<p className="pb-6">
						Outside work, I love exploring new places through travel. I also enjoy building PCs or keyboards from scratch. For downtime, you'll often find me playing Balatro, watching The Apothecary Diaries, or listening to The Smiths.
					</p>
				</section>
			</main>
		</>
	)
});

export default Home
