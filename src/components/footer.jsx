import React from "react";
import dpsLogoWhite from "../assets/dpsLogoWhite.png";

export default function Footer() {
  return (
    <footer className="text-white bg-sky-600">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center md:justify-start justify-center "
          >
            <img
              src={dpsLogoWhite}
              alt="dps logo"
              className="w-50 h-32 text-white p-2 "
            />
            {/* <span className="ml-3 text-xl">Denver Public Schools</span> */}
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Connect with DPS
            </h2>
            <nav className="list-none mb-10">
              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sky-100 transition hover:text-sky-700/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              About DPS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              DPS News
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hover:text-gray-800"
                >
                  Link
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-sky-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            ©2023 Denver Public Schools
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-white ml-1 text-sm"
              target="_blank"
            >
              info@dpsk12.org | 720-423-3200 | 1860 Lincoln Street Denver, CO
              80203
              {/* <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg> */}
            </a>
            {/* <a href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a> */}
          </span>
        </div>
      </div>
    </footer>
  );
}
