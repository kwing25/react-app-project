import React from "react";

import arFlagIcon from "../assets/icons/arFlagIcon.svg";
import cnFlagIcon from "../assets/icons/cnFlagIcon.svg";
import deFlagIcon from "../assets/icons/deFlagIcon.svg";
import itFlagIcon from "../assets/icons/itFlagIcon.svg";
import myFlagIcon from "../assets/icons/myFlagIcon.svg";
import mxFlagIcon from "../assets/icons/mxFlagIcon.svg";
import soFlagIcon from "../assets/icons/soFlagIcon.svg";
import usFlagIcon from "../assets/icons/usFlagIcon.svg";

import dpsLogoWhite from "../assets/logos/dpsLogoWhite.png";

export default function Nav() {
  return (
    <>
      <nav className="bg-sky-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src={dpsLogoWhite}
              alt="dps logo"
              className="w-40 h-auto bg-sky-600 p-2 "
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Denver Public Schools
            </span> */}
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center justify-center p-2 text-sm text-gray-200 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <img
                src={usFlagIcon}
                className="w-5 h-5 mr-2 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
                alt="English (US)"
              />
              English (US)
            </button>
            {/* Dropdown */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul className="py-1" role="none">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={usFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="English (US)"
                      />
                      English (US)
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={mxFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="Español"
                      />
                      Español
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={arFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="العربية"
                      />
                      العربية
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={myFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="ဗမာစာ"
                      />
                      ဗမာစာ
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={soFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="Soomaali"
                      />
                      Soomaali
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-language-select"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-language-select"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-language-select"
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white">
              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/">About</a>
              </li>

              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/">Schools</a>
              </li>

              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/"> Services</a>
              </li>

              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/"> Learning</a>
              </li>

              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/"> Calendars</a>
              </li>

              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/"> Families</a>
              </li>

              <li
                data-dropdown-toggle="mega-menu-dropdown"
                aria-hidden="true"
                className="block py-2 pl-3 pr-4 rounded hover:text-sky-800 md:p-0 "
              >
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex md:order-3">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-sky-700 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
