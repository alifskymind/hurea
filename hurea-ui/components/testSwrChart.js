import React from 'react'
import { useMemo, useState, useEffect } from 'react';
import useSWR from 'swr'

// import highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Boost from 'highcharts/modules/boost';

const fetcher = (url) => fetch(url).then((res) => res.json());

function testSwrChart() {

	// fetch data from database
	const { data, error } = useSWR(

		"http://localhost:8080/api/v1/temperatures",

		fetcher

	);

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	// test view data
	console.log(data);
	console.log(data[0].deviceUUID);

	// merge timestamp and temperature into one array
	const combinedArray = [];

	var i = 0;

	for( i = 0 ; i < data.length ; i++){

		combinedArray.push([data[i].unixTimestamp, data[i].temperatureInC])

	}

	console.log(combinedArray);

	// chart options
	const options = {

		chart: {

			type: 'line',

			zoomType: 'x',

			panning: true,

			panKey: 'shift',

			animation: false

		},


		title: {

			text: 'Temperature changes over time'

		},

		subtitle: {

			text: 'Click and drag to zoom in. Hold down shift key to pan in both directions.'

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

			{/* <p>

				{data[0].deviceUUID}

				{combinedArray}

			</p> */}

			<HighchartsReact

			highcharts={Highcharts}

			options={options}

			/>

		</div>
	)
}

export default testSwrChart