import React from "react"
import Navbar from "../components/navbar"
import ChartOriginal from "../components/chartOriginal"
import ChartOriginalHighChart from "../components/chartOriginalHighChart"
// import TestSSR from "../components/testSSR"
import TestSwrChart from "../components/testSwrChart"


export default function ChartOriginalPage() {

  return (

    <div>

      <Navbar/>

      <ChartOriginal/>

      {/* <ChartOriginalHighChart/> */}

      {/* <TestSSR/> */}

      {/* <TestSwrChart/> */}

    </div>

  )

}