import React from "react"
import Link from "next/link"

export default function Register() {
  return (

    <div className="hero min-h-screen" style={{backgroundImage: 'url(images/sea.jpg)'}}>

        <div class="hero-content flex-col lg:flex-row-reverse">

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

                    <div class="max-w-md space-x-2">

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