import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import karmarama from "../images/karmarama.svg";
import electroneum from "../images/electroneum.svg";
import burberry from "../images/burberry.svg";
import edding from "../images/edding.svg";
import honda from "../images/honda.svg";
import plusnet from "../images/plusnet.svg";
import vodafone from "../images/vodafone.svg";
import kallos from "../images/kallos.png";

export default function Companies({ id }) {
  return (
		<section id={id}>
				<div className="columns d-flex flex-column companies pt-5">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						<h2 className="text-center font-weight-bold px-3">I have made things for these awesome companies!</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="visible" animateOnce>
						<div className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center">
							<img src={karmarama} className="d-flex" alt="Logo" width="270" height="95"/>
							<img src={plusnet} className="d-flex" alt="Logo" width="163" height="130"/>
							<img src={burberry} className="d-flex" alt="Logo" width="270" height="96"/>
							<img src={vodafone} className="d-flex" alt="Logo" width="270" height="115"/>
							<img src={kallos} className="d-flex" alt="Logo" width="130" height="130"/>
							<img src={edding} className="d-flex" alt="Logo" width="270" height="103"/>
							<img src={honda} className="d-flex" alt="Logo" width="145" height="130"/>
							<img src={electroneum} className="d-flex" alt="Logo" width="270" height="110"/>
						</div>
					</ScrollAnimation>
				</div>
		</section>
  );
}
