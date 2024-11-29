import React from "react";
import { Blogdata } from "../../JSONDATA/BlogData";

function Detail() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-8">
        <div>
          <RecentBlog datas={Blogdata} />
        </div>

        <div className="p-4">
          <p className="font-semibold text-[14px] text-[#6941C6] mb-2">
            Sunday, 1 Jan 2023
          </p>
          <h2 className="font-bold text-2xl mb-4">
            Grid system for better Design User Interface
          </h2>

          <img
            src="./src/assets/Images/DetailImg/Image.png"
            alt=""
            className="w-full mb-4"
          />

          <p className="font-normal text-sm text-slate-600 dark:text-[#C0C5D0] mt-4">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </p>

          <p className="font-normal text-sm text-slate-600 dark:text-[#C0C5D0] mt-4">
            If you’ve been to New York City and have walked the streets, it is
            easy to figure out how to get from one place to another because of
            the grid system that the city is built on. Just as the
            predictability of a city grid helps locals and tourists get around
            easily, so do webpage grids provide a structure that guides users
            and designers alike. Because of their consistent reference point,
            grids improve page readability and scannability and allow people to
            quickly get where they need to go.
          </p>

          <div className="flex justify-center my-6">
            <div className="w-full md:w-[70%]">
              <h3 className="font-bold text-center">
                Definition: A grid is made up of columns, gutters, and margins
                that provide a structure for the layout of elements on a page.
              </h3>
            </div>
          </div>

          <img
            src="./src/assets/Images/DetailImg/Image1.png"
            alt=""
            className="w-full mt-4"
          />
        </div>
      </div>
    </>
  );
}

export default Detail;


export function RecentBlog({ datas }) {
    return (
      <>
        {datas.map((data, i) => (
          <div className="flex flex-col sm:flex-row gap-5 mb-8" key={i}>
            <img
              src={data.img}
              alt=""
              className="h-48 w-full sm:w-80 object-cover rounded-lg"
            />
            <div className="content mt-3 sm:mt-0 flex-1">
              <p className="font-semibold text-[14px] text-[#6941C6] mb-2">
                {data.title}
              </p>
              <h2 className="font-semibold text-xl mb-2">{data.heading}</h2>
              <p className="text-[16px] leading-6 text-[#667085] font-normal mb-4">
                {data.para}
              </p>
              <div className="endblog flex flex-wrap gap-2 mt-4">
                <span className="bg-[#F9F5FF] text-[#6941C6] p-1 rounded px-3">
                  {data.heighlight1}
                </span>
                <span className="bg-[#FDF2FA] text-[#C11574] p-1 rounded">
                  {data.heighlight2}
                </span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
  