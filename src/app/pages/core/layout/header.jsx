import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { pageRoutes, themeConfig } from "@/configs";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const router = useLocation();
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
              title="Dashboard"
              className="text-capitalize p-0 menu--list text-decoration-none"
            >
              <NavDropdown.Item
                href={pageRoutes.dashboard}
                className="text-capitalize text-decoration-none"
              >
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item
                href={pageRoutes.documents}
                className="text-capitalize text-decoration-none"
              >
                Documents
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className="text-capitalize text-decoration-none"
              >
                Audit Logs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className="text-capitalize text-decoration-none"
              >
                Settings
              </NavDropdown.Item>
            </NavDropdown>
            {router.pathname == pageRoutes.documents && (
              <NavDropdown
                title="Existing Configurations"
                className="text-capitalize p-0 menu--list text-decoration-none"
              >
                <NavDropdown.Item
                  href="#"
                  className="text-capitalize text-decoration-none"
                >
                  Existing Configurations
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="text-capitalize text-decoration-none"
                >
                  New Configurations
                </NavDropdown.Item>
              </NavDropdown>
            )}
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
}
