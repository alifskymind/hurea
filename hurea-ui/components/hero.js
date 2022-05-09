import React from "react"
import Link from "next/link"

export default function Hero() {
  return (

    // set background image
    <div className="hero min-h-screen" style={{backgroundImage: 'url(images/snow2.jpg)'}}>

    {/* <div className="hero-overlay bg-opacity-60" /> */}

    <div className="hero-content text-center text-neutral-content">

      <div className="max-w-md space-x-2">

        {/* title */}
        <h1 className="mb-5 text-5xl font-bold">Hurea</h1>

        {/* description */}
        <p className="mb-5">A predict the temperature web application</p>

        {/* button to login page */}
        <Link href="/loginPage" passHref>

            <button className="btn btn-primary">Log In</button>

        </Link>

        {/* button to register page */}
        <Link href="/registerPage" passHref>

            <button className="btn btn-secondary">Register New Account</button>

        </Link>


      </div>

    </div>

  </div>

  )
}