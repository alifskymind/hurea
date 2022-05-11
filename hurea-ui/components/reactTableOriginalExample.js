import React from 'react'
import { useTable } from 'react-table'

function ReactTableOriginalExample() {

    // It's important that we're using React.useMemo here to ensure that our data isn't recreated on every render
    // example data
    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    // create a set of column definitions
    const columns = React.useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        []
    )

    // pass data and column into the useTable hook to create a table instance
    // useTable at the very least needs to be provided with an object containing the memoized columns and data
    const tableInstance = useTable({ columns, data })

    // Applying the table instance to markup
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

    // view table
    return (

        <div>

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

export default ReactTableOriginalExample