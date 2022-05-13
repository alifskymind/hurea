import React from 'react'
import { useMemo, useState, useEffect } from 'react';

// import highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Boost from 'highcharts/modules/boost';

function ChartOriginalHighChart() {

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

	// sort timestamp

	// const temperatureSorted = [];

	// timestamp.sort(function(a, b){return a - b});

	// merge timestamp and temperature into one array
	const combinedArray = [];

	var i = 0;

	for( i = 0 ; i < timestamp.length ; i++){

		combinedArray.push([timestamp[i], temperature[i]])

	}

	console.log(combinedArray);

	// chart options
	const options = {

		chart: {

			zoomType: 'x'

		},

		title: {

			text: 'Temperature changes over time'

		},

		subtitle: {

			text: 'Click and drag in the plot area to zoom in'

		},

		xAxis: {

			type: 'datetime',

		},

		yAxis: {

			title: {

				text: 'Temperature in Celcius'

			}

		},

		legend: {

			enabled: true

		},

		series: [{

			boostThreshold: 1,

			type: 'line',

			name: 'Temperature changes over time',

			data: combinedArray

		}],

		boost: {

			useGPUTranslations: true,

			usePreAllocated: true,

			seriesThreshold: 1

		},

	}

	return (

		<div>

			<HighchartsReact

				highcharts={Highcharts}

				options={options}

			/>


		</div>

	)

}

export default ChartOriginalHighChart