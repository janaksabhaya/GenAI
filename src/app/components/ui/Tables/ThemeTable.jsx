import React from "react";
import { isDefined } from "@/services/helper";
import { useTable, useSortBy, useResizeColumns } from "react-table";
import { Table } from "react-bootstrap";
import { Icon } from "@iconify/react";

const ThemeTable = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data,
		},
		useSortBy,
		useResizeColumns
	);
	return (
		<div className="theme--table-wrap">
			<Table responsive striped className="mb-0 w-100 align-middle" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, index) => {
						return (
							<tr key={index} {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column, i) => {
									return (
										<th key={i} {...column.getHeaderProps(column.getSortByToggleProps())} className="text-start text-capitalize bg-theme-light-blue font-14 text-white-primary">
											<div className="d-flex align-items-center justify-content-between">
												{column.render("Header")}
												<>{column.isSorted ? column.isSortedDesc ? <Icon icon="bi:sort-up" className="d-block" /> : <Icon icon="bi:sort-down" className="d-block" /> : ""}</>
											</div>
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows && rows.length > 0 ? (
						rows.map((row, i) => {
							prepareRow(row);
							return (
								<tr key={i} {...row.getRowProps()}>
									{row.cells.map((cell, i) => (
										<td key={i} {...cell.getCellProps()} className="text-start text-capitalize text-static-black font-14">
											{cell.render("Cell")}
										</td>
									))}
								</tr>
							);
						})
					) : (
						<div>Record not found</div>
					)}
				</tbody>
				{isDefined(columns) && isDefined(columns[0].Footer) && (
					<tfoot>
						{footerGroups.map((footerGroup, i) => {
							return (
								<tr key={i} {...footerGroup.getFooterGroupProps()}>
									{footerGroup.headers.map((column, i) => {
										return (
											<th key={i} {...column.getFooterProps()} className="text-start text-capitalize">
												{column.render("Footer")}
											</th>
										);
									})}
								</tr>
							);
						})}
					</tfoot>
				)}
			</Table>
		</div>
	);
};

export default ThemeTable;
