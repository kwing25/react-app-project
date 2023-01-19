import React from "react";
import dpsLogoWhite from "../assets/dpsLogoWhite.png";

export default function Home() {
  return (
    <div>
      <img
        src={dpsLogoWhite}
        alt=""
        className="object-cover w-full h-full rounded-md xl:col-span-3 bg-slate-500 dark:bg-gray-500"
      />
      {/* <div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
        <div className="p-6 space-y-8">
          <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/"
              aria-label="Homepage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-6 h-6 dark:text-violet-400"
              >
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </a>
            <div className="items-center hidden space-x-8 lg:flex">
              <div className="space-x-4">
                <a rel="noopener noreferrer" target="_blank" href="/">
                  Link
                </a>
                <a rel="noopener noreferrer" target="_blank" href="/">
                  Link
                </a>
                <a rel="noopener noreferrer" target="_blank" href="/">
                  Link
                </a>
              </div>
              <button className="px-4 py-2 rounded-md dark:bg-violet-400 dark:text-gray-900">
                Sign up
              </button>
            </div>
            <button className="flex items-center justify-center p-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </header>
          <main>
            <div className="container mx-auto space-y-16">
              <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
                  <span className="block mb-2 dark:text-violet-400">
                    Mamba design system
                  </span>
                  <h1 className="text-5xl font-extrabold dark:text-gray-50">
                    Build it with Mamba
                  </h1>
                  <p className="my-8">
                    <span className="font-medium dark:text-gray-50">
                      Modular and versatile.
                    </span>
                    The ultimate design toolkit for savvy technology startups.
                  </p>
                  <form
                    novalidate=""
                    action=""
                    className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
                  >
                    <div>
                      <label for="name" className="text-sm sr-only">
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                      />
                      <div data-lastpass-icon-root="true"></div>
                    </div>
                    <div>
                      <label for="lastname" className="text-sm sr-only">
                        Email address
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        placeholder="Email address"
                        className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                      />
                    </div>
                    <button className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                      Join the waitlist
                    </button>
                  </form>
                </div>
                <img
                  src={dpsLogoWhite}
                  alt=""
                  className="object-cover w-full h-full rounded-md xl:col-span-3 bg-slate-500 dark:bg-gray-500"
                />
              </section>
              <section>
                <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-400">
                  How it works
                </span>
                <h2 className="text-5xl font-bold lg:text-center dark:text-gray-50">
                  Building with Mamba is simple
                </h2>
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                  <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                      1
                    </div>
                    <p className="text-2xl font-semibold">
                      <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum,
                      architecto?
                    </p>
                  </div>
                  <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                      2
                    </div>
                    <p className="text-2xl font-semibold">
                      <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor
                      veniam alias debitis?
                    </p>
                  </div>
                  <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">
                      3
                    </div>
                    <p className="text-2xl font-semibold">
                      <b>Maxime.</b>Expedita temporibus culpa reprehenderit
                      doloribus consectetur odio!
                    </p>
                  </div>
                </div>
              </section>
              <section className="grid gap-6 lg:grid-cols-2">
                <img
                  src="https://source.unsplash.com/random/360x480"
                  alt=""
                  className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500"
                />
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900">
                  <img
                    src="https://source.unsplash.com/random/100x100"
                    alt=""
                    className="object-cover w-20 h-20 rounded-full dark:bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    "Et, dignissimos obcaecati. Recusandae praesentium doloribus
                    vitae? Rem unde atque mollitia!"
                  </blockquote>
                  <div className="text-center dark:text-gray-400">
                    <p>Leroy Jenkins</p>
                    <p>CEO of Company Co.</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      aria-label="Page 1"
                      className="w-2 h-2 rounded-full dark:bg-gray-50"
                    ></button>
                    <button
                      type="button"
                      aria-label="Page 2"
                      className="w-2 h-2 rounded-full dark:bg-gray-600"
                    ></button>
                    <button
                      type="button"
                      aria-label="Page 3"
                      className="w-2 h-2 rounded-full dark:bg-gray-600"
                    ></button>
                    <button
                      type="button"
                      aria-label="Page 4"
                      className="w-2 h-2 rounded-full dark:bg-gray-600"
                    ></button>
                  </div>
                </div>
                <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-900">
                  <h2 className="text-5xl font-bold dark:text-gray-50">
                    Create with us
                  </h2>
                  <p className="dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt facilis quod accusantium beatae cum nam adipisci
                    reiciendis omnis possimus error quo animi voluptas magni, at
                    incidunt. Nulla ex at ullam corporis quidem adipisci vitae,
                    perferendis dolorem libero minus atque tenetur enim pariatur
                    cupiditate commodi in beatae, ipsa eligendi? Quis, saepe.
                  </p>
                </div>
              </section>
              <section>
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="overflow-hidden rounded lg:flex lg:col-span-3">
                    <img
                      src="https://source.unsplash.com/random/485x365"
                      alt=""
                      className="object-cover w-full h-auto max-h-96 dark:bg-gray-500"
                    />
                    <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-900">
                      <span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-400 dark:text-gray-900">
                        Business
                      </span>
                      <h2 className="text-3xl font-bold md:flex-1">
                        Curating a workplace that inspires team movement
                      </h2>
                      <div>
                        <p className="dark:text-gray-400">November 30, 2020</p>
                        <p className="dark:text-gray-400">By Leroy Jenkins</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
                    <h3 className="inline font-medium dark:text-gray-50">
                      Panel-based blocks.
                    </h3>
                    <p className="inline">
                      Flexible panels that are perfect for building functional
                      layouts.
                    </p>
                  </div>
                  <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
                    <h3 className="inline font-medium dark:text-gray-50">
                      Responsive design.
                    </h3>
                    <p className="inline">
                      Panels look great no matter the device.
                    </p>
                  </div>
                  <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900">
                    <h3 className="inline font-medium dark:text-gray-50">
                      Premium support.
                    </h3>
                    <p className="inline">
                      Join over 50 000 satisfied customers who use our
                      templates.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-900">
                  <h2 className="text-5xl font-bold text-center">
                    Our team is here to help you.
                  </h2>
                  <div className="flex justify-center p-4">
                    <a rel="noopener noreferrer" href="/">
                      Meet our crew &gt;
                    </a>
                  </div>
                  <img
                    src="https://source.unsplash.com/random/360x240"
                    alt=""
                    className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div> */}
    </div>
  );
}
