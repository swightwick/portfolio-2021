import React from "react";
import lessEffort from '../images/projects/less-effort.jpg';
import mpc from '../images/projects/mpc.jpg';
import edding from '../images/projects/edding.jpg';
import etx from '../images/projects/etx.jpg';
import lyr from '../images/projects/lyr.png';
import gig from '../images/projects/gigsite.png';


export default function Projects({ id }) {

	const posts = [
		{id: 1, title: 'Less Effort', content: 'Less Effort is a clothing label I created with a friend in 2012. Alongside creating and purchasing clothing, I built the branding and e-commerce store.', tech: 'JS, Kirby, Snipcart', image: lessEffort},
		{id: 2, title: 'MPC', content: 'Youtube video series focusing on hip hop producers. Presented in a grid style similar to the main piece of equipment most of the producers use: the Akai MPC.', tech: 'JS, CSS3',  image: mpc},
		{id: 3, title: 'Edding', content: 'Installation for an exhibition where you could colour a template of a monster using Edding pens, and see it come to life. Printed templates were scanned and converted in real-time.', tech: 'JS, Node, HTML5, CSS3',  image: edding},
		{id: 4, title: 'ETX', content: 'Corporate site for a Trading Company. Infographics and charts feature heavily.', tech: 'Umbraco, JS, D3, SVG', image: etx},
		{id: 5, title: 'Lyr AIO', content: 'UI for a Chrome extension to help automate purchases of limited-edition sneakers and bot Discord groups before others.', tech: 'JS, HTML5, CSS3',  image: lyr},
		{id: 6, title: 'Gig Site', content: 'Freelance gig site where sellers get paid in a cryptocurrency token. UI & UX improvements and feature additions.', tech: 'Vue.js, SVG',  image: gig}
	];

  return (
    <section id={id}>
      <div className="section-content pt-0">
				<h2 className="text-center mb-0 mb-md-5 font-weight-bold">Projects</h2>
				<div className="projects pt-5 d-flex flex-md-row justify-content-center flex-wrap">
				{posts.map((project, index) => (
					<div className="project position-relative" key={index}>
						<div className="about flex-column h-100 w-100 align-items-center justify-content-center">
							<h3 className="font-weight-bold">{project.title}</h3>
							<hr className="mt-1 mb-2 mt-md-2 mb-md-3"/>
							<div className="px-1 px-md-5 text-center">{project.content}</div>
							<div className="px-4 mt-1 mt-md-3 text-left technology"><i><small>{project.tech}</small></i></div>
						</div>
						<img src={project.image} className="d-flex w-100" alt={project.title} width="460"/>
					</div>
				))}
				</div>
      </div>
    </section>
  );
}
