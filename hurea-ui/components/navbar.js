import React from "react"
import Link from "next/link"

export default function Navbar() {
  return (


    <div class="navbar bg-base-100">

        <div class="flex-1">

            <a class="btn btn-ghost normal-case text-xl">Hurea</a>

        </div>

        <div class="flex-none">

            {/* menubar */}
            <ul class="menu menu-horizontal p-0 z-10">

                {/* tables menu */}
                <li tabindex="0">

                    <a>

                        Tables

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" /></svg>

                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

                    </a>

                    {/* submenu for tables */}
                    <ul class="p-2 bg-base-100">


                        {/* button to tableOriginalPage */}
                        <Link href="/tableOriginalPage" passHref>

                            <li><a>Original Data</a></li>

                        </Link>

                        {/* button to tablePredictedPage */}
                        <Link href="/tablePredictedPage" passHref>

                            <li><a>Predicted Data</a></li>

                        </Link>

                        {/* button to insertCustomDataPage */}
                        <Link href="/insertCustomDataPage" passHref>

                            <li><a>Insert Custom Data</a></li>

                        </Link>

                    </ul>

                </li>

                {/* charts menu */}
                <li tabindex="0">

                    <a>

                        Charts

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>

                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

                    </a>

                    {/* submenu for charts */}
                    <ul class="p-2 bg-base-100">

                        {/* button to chartOriginalPage */}
                        <Link href="/chartOriginalPage" passHref>

                            <li><a>Original Data</a></li>

                        </Link>

                        {/* button to chartPredictedPage */}
                        <Link href="/chartPredictedPage" passHref>

                            <li><a>Predicted Data</a></li>

                        </Link>

                        {/* button to chartCustomDataPage */}
                        <Link href="/chartCustomDataPage" passHref>

                            <li><a>Custom Data</a></li>

                        </Link>

                    </ul>

                </li>

                {/* predictions menu */}
                <li tabindex="0">

                     {/* button to chartCustomDataPage */}
                     <Link href="/customPredictionsPage" passHref>

                        <a>

                            Custom Predictions

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" /></svg>

                        </a>

                    </Link>




                </li>



            </ul>

            {/* for avatar and logout button */}
            <div class="dropdown dropdown-end">

                {/* avatar */}
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">

                    <div class="w-10 rounded-full">

                        {/* <img src="https://api.lorem.space/image/face?hash=33791" /> */}
                        <img src="images/snow.jpg" />

                    </div>

                </label>

                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                    {/* button to logout */}
                    <Link href="/" passHref>

                        <li>
                            <a>

                                Logout

                            </a>
                        </li>

                    </Link>


                </ul>

            </div>

        </div>

    </div>


  )
}