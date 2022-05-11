import React from 'react'
import { useTable } from 'react-table'
import { useState, useEffect } from "react";


function ReactTableOriginal ({ temperature }) {

    // default attributes for rest api calls
    const TEMPERATURE_API_BASE_URL = "http://localhost:8080/api/v1/temperatures";
    const [temperatures, setTemperatures] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [temperatureId, setTemperatureId] = useState(null);
    const [responseTemperature, setResponseTemperature] = useState(null);

    // get method using useEffect
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(TEMPERATURE_API_BASE_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const temperatures = await response.json();
          setTemperatures(temperatures);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [temperature, responseTemperature]);

    // create a set of column definitions
    const columns = React.useMemo(
        () => [
            {
                Header: 'id',
                accessor: 'id', // accessor is the "key" in the data
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
        ],
        []
    )

    // It's important that we're using React.useMemo here to ensure that our data isn't recreated on every render
    // example data
    // const data = React.useMemo(
    //     () => [
    //         {
    //             id: 'Hello',
    //             deviceUUID: 'World',
    //             dataType: 'World',
    //             unixTimestamp: 'World',
    //             dateTime: 'World',
    //             temperatureInC: 'World',
    //         },
    //     ],
    //     []
    // )

    // example data from database but manual
    const data = React.useMemo(
        () => [
            {"id":1,"deviceUUID":"1635726458980","dataType":12,"unixTimestamp":26,"dateTime":"9","temperatureInC":1.0},
            {"id":2,"deviceUUID":"1635728264210","dataType":12,"unixTimestamp":26,"dateTime":"9","temperatureInC":1.0},
        ],
        []
    )

    // pass data and column into the useTable hook to create a table instance
    // useTable at the very least needs to be provided with an object containing the memoized columns and data
    const tableInstance = useTable({ columns, data: temperature })

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

export default ReactTableOriginal