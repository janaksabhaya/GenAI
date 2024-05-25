import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { layoutConfig } from "@/configs";
import { isEmpty } from "@/services/helper";
import ReactSelect from "@/components/ui/ReactSelect";

const Navbar = () => {
	return (
		<section className="navbar--section">
			<Container fluid className="d-flex justify-content-between">
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
																	className={`${subMenu.path == window.location.pathname && "active"
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
				<div>
					<div className="row align-items-end">
						<div className="d-flex gap-3">
								<ReactSelect
									key={'rerender'}
									options={[]}
									placeholder="Select Fund Id"
									// value={state.fundId}
									// onChange={(e) => changeState({ fundId: e.value })}
								/>
								<ReactSelect
									key={"rerender"}
									options={[]}
									placeholder="Select Fund Name"
									// value={state.fundName}
									// onChange={(e) => changeState({ fundName: e.value })}
								/>

								<ReactSelect
									key={"rerender"}
									options={[]}
									placeholder="Select Account Name"
									// value={state.accountName}
									// onChange={(e) => changeState({ accountName: e.value })}
								/>

								<ReactSelect
									key={"rerender"}
									options={[]}
									placeholder="Select Firm Name"
									// value={state.firmName}
									// onChange={(e) => changeState({ firmName: e.value })}
								/>
						</div>
						{/* <div className="d-flex align-items-center mt-2 col-4">
							<ReactButton
								size="sm"
								className="border-0 font-14 download--btn me-2"
								// onClick={getDocumentData}
							>
								Filter
							</ReactButton>
							<ReactButton
								className=" border-0 font-14 download--btn me-2"
								size="sm"
								onClick={() => {
									// changeState({
									// 	fundId: "",
									// 	fundName: "",
									// 	accountName: "",
									// 	firmName: "",
									// 	resetReactSelect: !state.resetReactSelect,
									// });
								}}
							>
								Reset
							</ReactButton>
						</div> */}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Navbar;
