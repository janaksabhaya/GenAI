import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { themeConfig } from "@/configs";
import { Icon } from "@iconify/react";

const PageHeader = ({ title = "" }) => {
  return (
    <section className="header--section">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand
            as="img"
            src={themeConfig.images.Logo}
            className="me-0 logo--img p-0"
          />
          <Nav className="w-100">
            <NavDropdown
              title="oprations"
              className="text-capitalize p-0 menu--list text-decoration-none"
            ></NavDropdown>
            <NavDropdown
              title="Smart Query"
              className="text-capitalize p-0 menu--list text-decoration-none"
            ></NavDropdown>
          </Nav>
          <NavDropdown
            title={
              <Icon
                icon="mingcute:user-4-fill"
                className="d-block text-white-primary"
              />
            }
            className="account--dropdown"
          >
            <NavDropdown.Item href="#!">sign in</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <div className="divider bg-light-black"></div>
    </section>
  );
};

export default PageHeader;
