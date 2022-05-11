import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";

function testReactTable() {

    // Initializing state using useState
    const [data, setData] = useState([]);

    // Fetching Data using Axios
    useEffect(() => {
        // called “http://api.tvmaze.com/search/shows?q=girls“
        axios("http://api.tvmaze.com/search/shows?q=girls")
            // If the promise is resolved, it will execute then block, in which
            // we will store the response in the state using setData(res.data)
            .then((res) => {
                setData(res.data);
                })
            // if the promise is rejected, it will execute the catch block and
            // console the error
            .catch((err) => console.log(err))
    }, []);



    // Defining Columns
    const columns = useMemo(
        () => [{
            Header: "TV Show",
            columns: [{
                    Header: "Name",
                    accessor: "show.name"
                },
                {
                    Header: "Type",
                    accessor: "show.type"
                },
                {
                    Header: "Language",
                    accessor: "show.language"
                },
                {
                    Header: "Official Site",
                    accessor: "show.officialSite",
                    Cell: ({
                        cell: {
                            value
                        }
                    }) => value ? {
                        value
                    } : "-"
                },
                {
                    Header: "Rating",
                    accessor: "show.rating.average",
                    Cell: ({
                        cell: {
                            value
                        }
                    }) => value || "-"
                },
                {
                    Header: "Status",
                    accessor: "show.status",
                },
                {
                    Header: "Premiered",
                    accessor: "show.premiered",
                    Cell: ({
                        cell: {
                            value
                        }
                    }) => value || "-"
                },
                {
                    Header: "Time",
                    accessor: "show.schedule.time",
                    Cell: ({
                        cell: {
                            value
                        }
                    }) => value || "-"
                },
            ]
        }]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })


    return (
        <div>

            <h1><center>React Table Demo</center></h1>

            {/* build a basic table structure */}
            {/* getTableProps is a function to resolve any props needed by the table wrapper */}
            <table {...getTableProps()}>

                <thead>

                    {headerGroups.map(headerGroup => (

                        <tr {...headerGroup.getHeaderGroupProps()}>

                            {headerGroup.headers.map(column => (

                            <th {...column.getHeaderProps()}>

                                {column.render('Header')}

                            </th>

                            ))}

                        </tr>

                    ))}

                </thead>

                <tbody {...getTableBodyProps()}>

                    {rows.map(row => {

                    prepareRow(row)

                    return (

                        <tr {...row.getRowProps()}>

                        {row.cells.map(cell => {

                            return (

                            <td {...cell.getCellProps()}>

                                {cell.render('Cell')}

                            </td>

                            )

                        })}

                        </tr>

                    )

                    })}

                </tbody>

            </table>

        </div>
    )
}

export default testReactTable