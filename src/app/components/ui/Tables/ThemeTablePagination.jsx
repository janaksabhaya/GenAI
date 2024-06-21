import React from 'react'
import ReactTable from 'react-table'
import ReactButton from '../ReactButton'
import Loader from '../Loader'

export default function ThemeTablePagination({
    onSortedChange, onPageChange, onPageSizeChange, pagesize, cancelLoader, data, columns, rowCount, loading, ...rest
}) {
    return (
        <div className="table--container react-pagination-table">
            <ReactTable
                data={data}
                columns={columns}
                pages={Math.ceil(rowCount / pagesize)}
                pageSize={pagesize}
                className={`-striped -highlight grid  ${loading ? 'opacity-0-5' : 'opacity-0-5'}`}
                onSortedChange={onSortedChange}
                // NoDataComponent={() => {
                //   return (
                //     !state.loading && (
                //       <div className="rt-noData-custom">No rows found</div>
                //     )
                //   );
                // }}
                // LoadingComponent={() => {
                //     return (
                //         <>
                //             <div className="loader-1 center"><span></span></div>
                //         </>
                //     )
                // }}
                onPageSizeChange={onPageSizeChange}
                onPageChange={onPageChange}
                loading={loading}
                manual={true}
                loadingText={<div className="loader-center-btn">
                    <Loader isLoader={loading} />
                    <ReactButton
                        size="sm"
                        className="global-btn font-10 bg-static-black text-theme-color mt-3 br-2"
                        onClick={cancelLoader}
                    >
                        Cancel
                    </ReactButton>
                </div>}
                {...rest}
            />
            {rowCount && rowCount > 0 ? (
                <div className="grid-total-records">
                    {rowCount &&
                        `${rowCount.toLocaleString()} Total Records`}
                </div>
            ) : null}
        </div>
    )
}
