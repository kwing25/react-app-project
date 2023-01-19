import React from "react";

import cnFlagIcon from "../assets/cnFlagIcon.svg";
import deFlagIcon from "../assets/deFlagIcon.svg";
import itFlagIcon from "../assets/itFlagIcon.svg";
import soFlagIcon from "../assets/soFlagIcon.svg";
import usFlagIcon from "../assets/usFlagIcon.svg";
import dpsLogoWhite from "../assets/dpsLogoWhite.png";

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
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        src={deFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="Deutsch"
                      />
                      Deutsch
                    </div>
                  </a>
                </li>
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
                        src={itFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="Italiano"
                      />
                      Italiano
                    </div>
                  </a>
                </li>
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
                        src={cnFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="中文 (简体)"
                      />
                      中文 (繁體)
                    </div>
                  </a>
                </li>
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
                        src={soFlagIcon}
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="Somali"
                      />
                      Somali
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

              {/* <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
