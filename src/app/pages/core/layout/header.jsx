import { themeConfig } from "@/configs";
import { Icon } from "@iconify/react";
import React from "react";
import { Container, NavDropdown, Navbar } from "react-bootstrap";

export default function Header() {
	return (
		<section className="header--section">
			<Navbar expand="lg">
				<Container fluid className="jusitfy-content-end">
					{/* <Navbar.Brand as="img" src={themeConfig.images.Logo} className="me-0" /> */}

					<NavDropdown title={<Icon icon="mingcute:user-4-fill" className="d-block text-white-primary" />}>
						<NavDropdown.Item href="#!">sign in</NavDropdown.Item>
					</NavDropdown>
				</Container>
			</Navbar>
		</section>
	);
}
