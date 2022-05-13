import React, { useMemo, useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import DATA from '../public/temperature-all-withid.json';

function ReactTablePagination() {

    // fetch data from database using rest api
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/temperatures")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    }, [])
    // view data on web browser console
    // console.log(tableData)

    // define columns from database
    const COLUMNS = [
        {
            Header: 'id',
            accessor: 'id',
        },
        {
            Header: 'deviceUUID',
            accessor: 'deviceUUID',
        },
        {
            Header: 'dataType',
            accessor: 'dataType',
        },
        {
            Header: 'unixTimestamp',
            accessor: 'unixTimestamp',
        },
        {
            Header: 'dateTime',
            accessor: 'dateTime',
        },
        {
            Header: 'temperatureInC',
            accessor: 'temperatureInC',
        },
    ];

    // set columns and data for table
    const columns = useMemo(() => COLUMNS, []);
    // get data from json file
    // const data = useMemo(() => DATA, []);

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

        // get data from json file
        // data,

        // get data from database
        data: tableData,

        initialState: { pageIndex: 0, pageSize: 30 },
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