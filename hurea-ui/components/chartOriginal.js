import React from 'react'
import { useMemo, useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

function ChartOriginal() {

	// use the useEffect hook to fetch data that will be displayed in the chart
	const [temperature, setTemperature] = useState([]);
	const [timestamp, setTimestamp] = useState([]);
	const [dateTime, setDateTime] = useState([]);

	useEffect(() => {

		const getData = async () => {

			const url = 'http://localhost:8080/api/v1/temperatures';

			try {

				const response = await fetch(url);

				const data = await response.json();

				console.log(data);

				setTemperature(data?.map((item) => item.temperatureInC));

				setTimestamp(data?.map((item) => item.unixTimestamp));

				setDateTime(data?.map((item) => item.dateTime));

			} catch (error) {

				console.log(error);

			}

		};

		getData();

	}, []);

	// merge timestamp and temperature into one array
	const temperatureArray = [];

	var i = 0;

	for( i = 0 ; i < timestamp.length ; i++){

		temperatureArray.push([timestamp[i], temperature[i]])

	}

	console.log(temperatureArray);

	// chart options
	const option = {

		xAxis: {

			type: 'time',

		},

		yAxis: {

		},

		series: [{

			name: 'Temperature in Celcius',

			type: 'line',

			data: temperatureArray

		}],

		// enable chart zooming
		dataZoom: [

			{

			  type: 'slider',

			  show: true,

			  xAxisIndex: [0],

			},

			{

			  type: 'slider',

			  show: true,

			  yAxisIndex: [0],

			},

			{

			  type: 'inside',

			  xAxisIndex: [0],

			},

			{

			  type: 'inside',

			  yAxisIndex: [0],

			}

		],

	};


	return (

		<div>

			<br/>
			{/* show chart */}

			<ReactECharts option={option} lazyUpdate={true}/>


		</div>

	)

}

export default ChartOriginal