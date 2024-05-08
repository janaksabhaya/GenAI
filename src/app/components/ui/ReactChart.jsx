import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ReactButton from "./ReactButton";
import { Icon } from "@iconify/react";

const ReactChart = ({ options }) => {
	return (
		<div className="chart--view-section">
			<div className="d-flex align-items-center justify-content-between heading--box mb-2">
				<h1 className="font-16 text-capitalize text-static-black mb-0">{options?.title?.text}</h1>
				<div className="d-flex align-items-center gap-1">
					<ReactButton size="sm" className="d-block" onClick={() => {}}>
						<Icon icon="mdi:grid" className="d-block" />
						{/* <Icon icon="bi:graph-up-arrow" className="d-block" /> */}
					</ReactButton>
					<ReactButton size="sm" className="d-block" onClick={() => {}}>
						<Icon icon="humbleicons:external-link" className="d-block" />
					</ReactButton>
					<ReactButton size="sm" className="d-block" onClick={() => {}}>
						<Icon icon="ic:round-menu" className="d-block" />
					</ReactButton>
				</div>
			</div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ReactChart;
