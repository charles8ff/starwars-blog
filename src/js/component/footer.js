import React, { Component } from "react";

import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="container-fluid footer">
		<div className="row footerIconos">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by
			</p>
		</div>
		<div className="row d-flex justify-content-center text-center">
			<a className="col-2" href="https://github.com/danseks">
				danseks <i className="fab fa-github" />
			</a>
			<a className="col-2" href="https://github.com/charles8ff">
				charles8ff <i className="fab fa-github" />
			</a>
			<a className="col-2" href="https://github.com/jagtrrz">
				jagtrrz <i className="fab fa-github" />
			</a>
		</div>
		<div className="row slogan d-felx align-items-center">
			<i className="fab fa-jedi-order fa-2x" />
			<span>MAY THE FORCE BE WITH YOU</span>
			<i className="fab fa-jedi-order fa-2x" />
		</div>
	</footer>
);
