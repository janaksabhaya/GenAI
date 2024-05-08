import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CurrencyModal from "@/pages/palette-platform/partials/CurrencyModal";
import ReactButton from "../ui/ReactButton";
import { Icon } from "@iconify/react";
import Textinput from "../ui/TextInput";

const PageHeader = ({ title = "" }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<>
			<Container fluid>
				<div className="py-3 mb-3 border-bottom">
					<Row className="align-items-center">
						<Col xxl={6}>
							<h4 className="mb-0 text-capitalize text-parimary-black font-32">{title}</h4>
							{/* <p className="mb-0 d-flex align-items-center gap-1 mt-2 font-10 text-secondry-default">
								Aggregated data as of April 30, 2024
								<Link
									role="button"
									className="d-block text-decoration-none text-capitalize text-static-black"
									onClick={() => {
										setIsOpenModal(true);
									}}
								>
									displayed in EUR
								</Link>
							</p> */}
						</Col>
						<Col xxl={6}>
							{/* <div className="d-flex align-items-center justify-content-end border w-25 ms-auto rounded search--box">
								<Textinput type="text" placeholder="search this site..." className="w-100" inputClass="border-0 shadow-none font-14" />
								<ReactButton size="sm">
									<Icon icon="ic:round-search" className="d-block" />
								</ReactButton>
							</div> */}
						</Col>
					</Row>
				</div>
			</Container>

			<CurrencyModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} onSave={() => setIsOpenModal(false)} />
		</>
	);
};

export default PageHeader;
