import React from "react";

function Page() {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row md:items-start md:max-w-screen rounded-lg shadow-inner
      max-h-2/3 "
      >
        <div className="p-2 rounded-lg md:w-1/2 my-auto gap-2 ">
          <p className="text-6xl font-bold text-blue-600">
            Welcome to Expensr 🚀, your money and banking tracking SaaS
            Application
          </p>
          <p className="mt-2 text-gray-700 dark:text-white font-semibold text-base md:text-xl">
            to Expensr 🚀, your money and banking tracking SaaS Application
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;