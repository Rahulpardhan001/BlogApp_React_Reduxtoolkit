import React from "react";
import Blog, { AllBlog } from "./Blog";
import { NewsletterData } from "../../JSONDATA/NewsletterData";

function Newsletter() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex justify-center px-4">
          <div className="text-center max-w-2xl lg:max-w-4xl mx-auto">
            <h3 className="text-center font-semibold text-sm text-[#7F56D9]">
              Newsletters
            </h3>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mt-4 mb-4">
              Stories and interviews
            </h2>
            <p className="font-normal text-base sm:text-lg md:text-xl text-[#C0C5D0] px-4 sm:px-8 md:w-[768px] mx-auto">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </p>
            <div className="text-center">
            <form className="mt-4 flex flex-col sm:flex-row items-center w-full max-w-lg mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                className="p-3 w-full sm:w-auto flex-grow text-[#667085] rounded-md border border-gray-300 focus:outline-none"
                type="text"
                placeholder="Enter your email"
              />
              <button className="btn bg-[#7F56D9] p-3 text-white rounded-md w-full sm:w-auto">
                Subscribe
              </button>
            </form>
            <p className="font-normal text-sm mt-2 text-center  sm:text-center">
              We care about your data in our privacy policy
            </p>
            </div> 
          </div>
        </div>

        <AllBlog datas={NewsletterData} />
      </div>
    </>
  );
}

export default Newsletter;
