import React from "react"
import Link from "next/link"

export default function Register() {
  return (

    <div className="hero min-h-screen" style={{backgroundImage: 'url(images/sea.jpg)'}}>

        <div class="hero-content flex-col lg:flex-row-reverse">

            {/* <div class="text-center lg:text-left"> */}

            {/* <h1 class="text-6xl font-bold">Login now!</h1> */}

            {/* <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

            {/* </div> */}

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <div class="card-body">

                    <div class="form-control">

                        <label class="label">

                            <span class="label-text">Username</span>

                        </label>

                        <input type="text" placeholder="username" class="input input-bordered" />

                    </div>

                    <div class="form-control">

                        <label class="label">

                            <span class="label-text">Email</span>

                        </label>

                        <input type="text" placeholder="email" class="input input-bordered" />

                    </div>

                    <div class="form-control">

                        <label class="label">

                            <span class="label-text">Password</span>

                        </label>

                        <input type="text" placeholder="password" class="input input-bordered" />

                        <label class="label">

                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>

                        </label>

                    </div>

                    <div class="form-control mt-6">

                        <button class="btn btn-primary">Register</button>

                        {/* button to go to home page */}
                        <Link href="/" passHref>

                            <button class="btn btn-secondary">Back to home screen</button>

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    </div>

  )
}