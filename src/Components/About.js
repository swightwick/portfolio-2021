import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About({ id }) {
  return (
    <section id={id}>
      <div className="section-content">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<h2 className="text-center mb-5 font-weight-bold">About Me</h2>
					<p className="text-center">I am a creative front-end developer with over ten years experience. I started out when tables were a thing, and have seen the web evolve at a rapid pace, and its only getting more exciting. I particularly enjoy building user interaction, animations and designing for mobile and look forward to the new challenges and benefits technology brings us.</p>
					<p className="text-center">Outside of work I keep busy with personal projects and experiments, with the intent to gain new skills. I also enjoy photography, architecture, graffiti and travelling which mix in with my style and skill set.</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="visible" animateOnce>
					<div className="d-flex flex-column flex-md-row justify-content-between mt-5 pt-5 mb-2">
						{/*CREATIVE*/}
						<div className="skills d-flex flex-column justify-content-start py-5 px-3 mb-5 mb-md-0">
							<FontAwesomeIcon icon="paint-brush" className="mx-auto mb-2"/>
							<h4 className="mb-3 mt-3 text-center font-weight-bold">Creative</h4>
							<p className="mb-3 text-center px-3">I constantly have ideas and projects that I would love to make. Take a problem then use technology to solve it.</p>
							<hr className="mx-auto"/>
							<div className="d-flex flex-column justify-content-center mt-3">
								<p className="text-center font-weight-bold white">Design Tools</p>
								<ul className="m-0 p-0 d-flex flex-column justify-content-center text-center list-unstyled">
									<li>Balsamiq</li>
									<li>Figma</li>
									<li>Invision</li>
									<li>Sketch</li>
									<li>Creative Suite</li>
									<li>Loop Spray paint</li>
								</ul>
							</div>
						</div>

						{/*TECHNICAL*/}
						<div className="skills d-flex flex-column justify-content-start py-5 px-3 mx-0 mx-md-5 mb-5 mb-md-0">
							<FontAwesomeIcon icon="code" className="mx-auto mb-2"/>
							<h4 className="mb-3 mt-3 text-center font-weight-bold">Technical</h4>
							<p className="mb-3 px-2 text-center">Deep understanding of how computers work and operate. Ability to explain code and web to non-technical persons.</p>
							<hr className="mx-auto"/>
							<div className="d-flex flex-column justify-content-center mt-3">
								<p className="text-center font-weight-bold white">Dev tools</p>
								<ul className="m-0 p-0 d-flex flex-column justify-content-center text-center list-unstyled">
									<li>HTML5 &amp; CSS3</li>
									<li>SASS &amp; Less</li>
									<li>Javascript ES6</li>
									<li>Vue.js</li>
									<li>React</li>
									<li>Node</li>
								</ul>
							</div>
						</div>

						{/*FOCUSED*/}
						<div className="skills d-flex flex-column justify-content-start py-5 px-3 mb-5 mb-md-0">
							<FontAwesomeIcon icon="calendar-day" className="mx-auto mb-2"/>
							<h4 className="mb-3 mt-3 text-center font-weight-bold">Focused</h4>
							<p className="mb-3 text-center">Projects scoped, planned, estimated, and structured to provide optimal working and on time delivery. Self management ability.</p>
							<hr className="mx-auto"/>
							<div className="d-flex flex-column justify-content-center mt-3">
								<p className="text-center font-weight-bold white">Work Tools</p>
								<ul className="m-0 p-0 d-flex flex-column justify-content-center text-center list-unstyled">
									<li>Slack (+Bots &amp; Apps)</li>
									<li>Jira</li>
									<li>Trello</li>
									<li>Harvest</li>
									<li>Asana</li>
								</ul>
							</div>
						</div>
					</div>
				</ScrollAnimation>
      </div>
    </section>
  );
}
