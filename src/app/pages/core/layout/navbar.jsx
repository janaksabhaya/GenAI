import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { layoutConfig } from "@/configs";
import { isEmpty } from "@/services/helper";
import ReactSelect from "@/components/ui/ReactSelect";
import { store } from "@/store";
import { setFilters } from "@/store/toolkit/documents";
import useMainState from "@/hooks/useMainState";
import { useSelector } from "react-redux";
import { api } from "@/services";
import ReactButton from "@/components/ui/ReactButton";

const customStyles = {
	control: base => ({
		...base,
		height: 35,
		minHeight: 35
	})
};

const Navbar = () => {
	const documentFilter = useSelector(store => store.documents.documentFilter)

	const [state, changeState] = useMainState({
		fund_names: [],
		firm_names: [],
		account_names: [],
		...documentFilter
	});

	useEffect(() => {
		changeState({
			...documentFilter
		})
	}, [documentFilter])
	

	useEffect(() => {
		api
			.get("http://40.87.56.22:8000/dropdown/fund_names")
			.then((res) => {
				changeState({ fund_names: res.fund_names });
			})
			.catch((err) => { });

		api
			.get("http://40.87.56.22:8000/dropdown/firm_names")
			.then((res) => {
				changeState({ firm_names: res.firm_names });
			})
			.catch((err) => { });

		api
			.get("http://40.87.56.22:8000/dropdown/account_names")
			.then((res) => {
				changeState({ account_names: res.account_names });
			})
			.catch((err) => { });
	}, [])

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
								value={state.fundId}
								onChange={(e) => {
									changeState({
										fundId: e.value
									});
								}}
								styles={customStyles}
							/>
							<ReactSelect
								key={"rerender"}
								options={state.fund_names}
								placeholder="Select Fund Name"
								value={state.fundName}
								onChange={(e) => {
									changeState({
										fundName: e.value
									});
								}}
								styles={customStyles}
							/>

							<ReactSelect
								options={state.account_names}
								placeholder="Select Account Name"
								value={state.accountName}
								onChange={(e) => {
									changeState({
										accountName: e.value
									});
								}}
								styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
							/>

							<ReactSelect
								options={state.firm_names}
								placeholder="Select Firm Name"
								value={state.firmName}
								onChange={(e) => {
									changeState({
										firmName: e.value
									});
								}}
								styles={customStyles}
							/>

							<div className="d-flex align-items-center">
								<ReactButton
									size="sm"
									className="globel--btn text-white-primary bg-btn-theme border-0 mx-2 px-4"
									onClick={() => {
										store.dispatch(setFilters({
											fundId: state.fundId,
											fundName: state.fundName,
											accountName: state.accountName,
											firmName: state.firmName,
										}))
									}}
								>
									Filter
								</ReactButton>
								<ReactButton
									className=" globel--btn text-white-primary bg-btn-theme border-0 px-4"
									size="sm"
									onClick={() => {
										store.dispatch(setFilters({
											fundId: "",
											fundName: "",
											accountName: "",
											firmName: "",
										}))
									}}
								>
									Reset
								</ReactButton>
							</div>
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
