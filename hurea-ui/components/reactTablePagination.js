import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import DATA from '../public/temperature-all-withid.json';

function ReactTablePagination() {

    // define columns
    const COLUMNS = [
        {
            Header: 'id',
            accessor: 'id',
        },
        {
            Header: 'device_uuid',
            accessor: 'device_uuid',
        },
        {
            Header: 'data_type',
            accessor: 'data_type',
        },
        {
            Header: 'unix_timestamp',
            accessor: 'unix_timestamp',
        },
        {
            Header: 'date_time',
            accessor: 'date_time',
        },
        {
            Header: 'temperature_in_c',
            accessor: 'temperature_in_c',
        },

    ];

    // set columns and data for table
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DATA, []);

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
    {
        columns,
        data,
        initialState: { pageIndex: 0 },
    },
        usePagination
    )

    return (

    <div>

        <table {...getTableProps()}>

            <thead>

                {headerGroups.map(headerGroup => (

                    <tr {...headerGroup.getHeaderGroupProps()}>

                    {headerGroup.headers.map(column => (

                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                    ))}

                    </tr>

                ))}

            </thead>

            <tbody {...getTableBodyProps()}>

                {page.map((row, i) => {

                    prepareRow(row)

                    return (

                        <tr {...row.getRowProps()}>

                            {row.cells.map(cell => {

                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                            })}

                        </tr>

                    )

                })}

            </tbody>

        </table>

        {/* pagination */}
        <div className="pagination">

            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>

                {'<<'}

            </button>{' '}

            <button onClick={() => previousPage()} disabled={!canPreviousPage}>

                {'<'}

            </button>{' '}

            <button onClick={() => nextPage()} disabled={!canNextPage}>

                {'>'}

            </button>{' '}

            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>

                {'>>'}

            </button>{' '}

            <span>

                Page{' '}

                <strong>

                    {pageIndex + 1} of {pageOptions.length}

                </strong>{' '}

            </span>

            <span>

                | Go to page:{' '}

                <input

                    type="number"

                    defaultValue={pageIndex + 1}

                    onChange={e => {

                    const page = e.target.value ? Number(e.target.value) - 1 : 0

                    gotoPage(page)

                    }}

                    style={{ width: '100px' }}

                />

            </span>{' '}

            <select

                value={pageSize}

                onChange={e => {

                    setPageSize(Number(e.target.value))

                }}

                >

                {[10, 20, 30, 40, 50].map(pageSize => (

                    <option key={pageSize} value={pageSize}>

                        Show {pageSize}

                    </option>

                ))}

            </select>

        </div>

    </div>

    )
}

export default ReactTablePagination