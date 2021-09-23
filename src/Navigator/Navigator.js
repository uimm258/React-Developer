import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import logo from "../images/logo.svg";

function Navigator() {
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="costume-navbar"
				bg="dark"
				variant="dark"
			>
				<Navbar.Brand>
					<Link to="/">
						<img src={logo} />
					</Link>
				</Navbar.Brand>
			
				<Navbar id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link>
							<Link to="/" style={{ color: "white" }}>
								{' '}Home{' '}
							</Link>
						</Nav.Link>
						
						<Nav.Link>
							<Link to="/portfolio" style={{ color: "white" }}>
								{' '}Portfolios{' '}
							</Link>
						</Nav.Link>
						
						<Nav.Link>
							<Link to="/contact" style={{ color: "white" }}>
								{' '}Contact{' '}
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar>
			</Navbar>
		</div>
	)
};

export default Navigator;