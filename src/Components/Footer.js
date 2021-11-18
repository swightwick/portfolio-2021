import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer({ id }) {
	let currentYear = new Date().getFullYear();
  return (
		<footer id={id}>
			<ScrollAnimation animateIn="fadeIn" animateOnce>
			<svg className="waves"
			viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
				<defs>
					<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g className="parallax">
					<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(12,12,12,0.7" />
					<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(12,12,12,0.5)" />
					<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(12,12,12,0.3)" />
					<use xlinkHref="#gentle-wave" x="48" y="7" fill="#0c0c0c" />
				</g>
			</svg>
			<div className="w-100 text-center background">
				<h2 className="text-center mb-5 font-weight-bold">Contact</h2>
				<a href="mailto:info@samwightwick.co.uk">info@samwightwick.co.uk</a>
				<div className="d-flex flex-row mx-auto justify-content-around links mt-1 mb-4">
					<a href="https://github.com" rel="noopener">
						<FontAwesomeIcon icon={["fab", "github"]} />
					</a>
					<a href="https://codepen.io/swightwick" rel="noopener">
						<FontAwesomeIcon icon={["fab", "codepen"]} />
					</a>
					<a href="https://twitter.com/samwightwick" rel="noopener">
						<FontAwesomeIcon icon={["fab", "twitter"]} />
					</a>
					<a href="https://dribbble.com/samwightwick" rel="noopener">
						<FontAwesomeIcon icon={["fab", "dribbble"]} />
					</a>
					<a href="https://www.linkedin.com/in/samwightwick/" rel="noopener">
						<FontAwesomeIcon icon={["fab", "linkedin-in"]} />
					</a>
				</div>
				<div className="d-flex flex-column about">
					<span>Copyright Sam Wightwick {currentYear}</span>
					<span className="green d-flex flex-row align-items-center mx-auto">Made with&nbsp;<FontAwesomeIcon icon={["fab", "react"]} />React & THREE.js</span>
				</div>
			</div>
			<div className="bar"></div>
		</ScrollAnimation>
	</footer>
  );
}
