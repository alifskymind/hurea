import React from 'react';
import { useMemo, useState, useEffect } from 'react';

// solution for: Error: "category" is not a registered scale.
import Chart from 'chart.js/auto';

// import apex charts
// cannot use below import because no global window object on server side rendering
// https://stackoverflow.com/questions/68596778/next-js-window-is-not-defined
// import ReactApexChart from 'react-apexcharts';

// disable server side rendering to use apex charts
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// import highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Boost from 'highcharts/modules/boost';

import ReactECharts from 'echarts-for-react';

// show chart
export default function ChartOriginalSlow() {

	// fetch data from database using rest api
    // const [tableData, setTableData] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:8080/api/v1/temperatures")
    //         .then((data) => data.json())
    //         .then((data) => setTableData(data))
    // }, [])
    // view data on web browser console
    // console.log(tableData)

	// https://www.section.io/engineering-education/data-visualization-in-react-using-apexcharts/
	// use the useEffect hook to fetch data that will be displayed in the chart
	const [temperature, setTemperature] = useState([]);
  	const [timestamp, setTimestamp] = useState([]);

	useEffect(() => {

		const getData = async () => {

			const url = 'http://localhost:8080/api/v1/temperatures';

			try {

				const response = await fetch(url);

				const data = await response.json();

				console.log(data);

				setTemperature(data?.map((item) => item.temperatureInC));

				setTimestamp(data?.map((item) => item.unixTimestamp));

			} catch (error) {

				console.log(error);

			}

		};

			getData();

	}, []);

	// chart data
    const series = [{

        name: 'Temperature in Celcius',

        data: temperature

    },];

    // chart options
    const options = {

        title: {

            text: "Original Temperatures",

            align: 'centre',

            margin: 10,

            offsetX: 0,

            offsetY: 0,

            floating: false,

            style: {

                fontSize:  '20px',

                fontWeight:  '20',

                fontFamily:  undefined,

                color:  '#263238'

            },

        },

        chart: {

            height: 350,

            type: 'area'
        },

        dataLabels: {

            enabled: false
        },

        stroke: {

            curve: 'smooth'
        },

        xaxis: {

            type: 'datetime',

            categories: timestamp

        },

        tooltip: {

            x: {

                format: 'dd/MM/yy HH:mm'

            },

        },

    };

	return (

		<div>

            <br/>

            {/* show apex chart */}
            <ReactApexChart options={options} series={series} type="area" height={350}/>

        </div>

	)

}
