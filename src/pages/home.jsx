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
    </div>
  );
}
