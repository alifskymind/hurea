import React from 'react'

// cannot use below import because no global window object on server side rendering
// https://stackoverflow.com/questions/68596778/next-js-window-is-not-defined
// import ReactApexChart from 'react-apexcharts';

// disable server side rendering to use apex charts
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


function TestApexChart() {

    // chart data
    const series = [{

        name: 'series1',

        data: [31, 40, 28, 51, 42, 109, 100]

    }, {

        name: 'series2',

        data: [11, 32, 45, 32, 34, 52, 41]

    }];

    // chart options
    const options = {

        title: {

            text: "Test Apex Chart",

            align: 'centre',

            margin: 10,

            offsetX: 0,

            offsetY: 0,

            floating: false,

            style: {

                fontSize:  '20px',

                fontWeight:  'bold',

                fontFamily:  undefined,

                color:  '#263238'

            },

        },

        chart: {

            height: 350,

            type: 'area'
        },

        dataLabels: {

            enabled: true
        },

        stroke: {

            curve: 'smooth'
        },

        xaxis: {

            type: 'datetime',

            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]

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

            {/* show chart */}
            <ReactApexChart options={options} series={series} type="area" height={350}/>

        </div>
    )
}

export default TestApexChart