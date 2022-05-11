import { React, useState, useEffect } from "react";

// test calling rest api
const TableOriginal = ({ temperature }) => {

    // default attributes for rest api calls
    const TEMPERATURE_API_BASE_URL = "http://localhost:8080/api/v1/temperatures";
    const [temperatures, setTemperatures] = useState([]);
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

    // view to show
    return (

        <div>

            {/* test show on table */}
            <div class="overflow-x-auto">

                <table class="table w-full">

                    {/* header */}
                    <thead>
                        <tr>
                            <th>Device UUID</th>
                            <th>Data Type</th>
                            <th>Unix Timestamp</th>
                            <th>Date Time</th>
                            <th>Temperature in Celcius</th>
                        </tr>
                    </thead>

                    {/* data */}
                    <tbody>

                    {/* get data from backend database */}
                    {temperatures.slice(-1000)?.map(temperature => (
                        <tr key={temperature.id}>
                            <td>{temperature.deviceUUID}</td>
                            <td>{temperature.dataType}</td>
                            <td>{temperature.unixTimestamp}</td>
                            <td>{temperature.dateTime}</td>
                            <td>{temperature.temperatureInC}</td>
                        </tr>
                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
};

  export default TableOriginal;