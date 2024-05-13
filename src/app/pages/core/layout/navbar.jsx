import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { layoutConfig } from "@/configs";
import { isEmpty } from "@/services/helper";

const Navbar = () => {
	return (
		<section className="navbar--section">
			<Container fluid>
				<div className="d-flex align-items-center gap-3">
					{layoutConfig.menus.map((menu, parentIndex) => {
						return (
							<React.Fragment key={parentIndex}>
								{isEmpty(menu.childrens) ? (
									<React.Fragment key={parentIndex}>
										<Link to={menu.path} key={parentIndex} className="d-block text-decoration-none text-white-primary font-10">
											{menu.label}
										</Link>
									</React.Fragment>
								) : (
									<React.Fragment key={parentIndex}>
										<ul className="list-inline mb-0 d-flex align-items-center gap-2">
											<li className="d-flex align-items-center position-relative">
												<span className="d-block font-10 text-white-primary">{menu.label}</span>
												<Icon icon="iconamoon:arrow-down-2-fill" className="d-block text-white-primary font-14 ms-1" />
												<ul className="list-inline mb-0">
													{menu.childrens.map((subMenu, subMenuIndex) => {
														return (
															<li key={subMenuIndex}>
																<Link
																	to={subMenu.path}
																	className={`${
																		subMenu.path == window.location.pathname && "active"
																	} d-block text-decoration-none text-white-primary font-10`}
																>
																	{subMenu.label}
																</Link>
															</li>
														);
													})}
												</ul>
											</li>
										</ul>
									</React.Fragment>
								)}
							</React.Fragment>
						);
					})}
				</div>
			</Container>
		</section>
	);
};

export default Navbar;
