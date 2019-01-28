import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron />
				<Cards />
				<Footer />
			</div>
		);
	}
}

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Contact
						</a>
					</li>
				</div>
			</div>
		</nav>
	);
};

const Jumbotron = () => {
	return (
		<div className="container-fluid style=text-align:center style=background-color:grey">
			<div className="Jumbotron mt-4">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!
				</a>
			</div>
		</div>
	);
};

const Cards = () => {
	return (
		<div className="card-deck">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More
					</a>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More
					</a>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More
					</a>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<div className="card text-center">
			<div className="card-body">
				<h5 className="card-title">Copyright © Your Website 2018</h5>
			</div>
			<div className="card-footer text-muted">2 days ago</div>
		</div>
	);
};
