import React from "react";

export default function Hero({ id }) {
  return (
		<section id="header" className="d-flex align-items-center justify-content-center">
			<div className="py-5 px-4 text-left content mx-auto">
				<span className="green mb-1 d-flex">Hi, my name is </span>
				<h1 className="font-weight-bold">Sam Wightwick, creative developer</h1>
				<p className="font-weight-light grey">I design and build things for the web, and I love what I do. Experienced in projects small and large, in-house and agency, from luxury to cryptocurrency.</p>
			</div>
		</section>
  );
}
