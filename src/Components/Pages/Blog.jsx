import React from "react";
import { Blogdata } from "../../JSONDATA/BlogData";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


function Blog() {
  
  return (
    <>
      <section>
        <div className="container">
          <div className="main p-8 ">
            <div className="mb-4">
              <h2 className="font-semibold text-2xl leading-6">
                Recent blog posts
              </h2>
            </div>
            <div className="recentBlog gap-6  grid xl:grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
              {/* left side of recent blog */}

              <div className="" >
              <div className=" h-56">
                <img
                  src="../src/assets/img/image1.png"
                  alt=""
                  className="w-full h-56 object-fill"
                />
                </div>
                <div className="content mt-4">
                  <p className="font-semibold text-[14px] text-[#6941C6]">
                    Olivia Rhye • 1 Jan 2023
                  </p>
                  <div className="flex justify-between items-center">
                  <h2 className="font-bold text-2xl ">
                    UX review presentations
                  </h2>
                  <Link to='/detail'><MdArrowOutward /> </Link>
                  </div>
                
                 
                  <p className="text-[16px] leading-6 text-[#667085] mb-4">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
                <div className="endblog flex gap-2">
                  <span className="bg-[#F9F5FF] text-[#6941C6] p-1 px-2 rounded">
                    Design
                  </span>
                  <span className="bg-[#EEF4FF] text-[#3538CD] p-1 px-2 rounded">
                    Research
                  </span>
                  <span className="bg-[#FDF2FA] text-[#C11574] p-1 px-2 rounded">
                    Presentation
                  </span>
                </div>
              </div>

              {/* Right side of Recent blog posts */}

                <div className="rightside">
              <div className=" gap-5 mb-4 sm:flex">
                <img
                  src="../src/assets/img/image2.png"
                  alt=""
                  className="h-48 w-80 "
                />
                <div className="content mt-1 h-48 w-72">
                  <p className="font-semibold text-[14px] text-[#6941C6]">
                  Phoenix Baker • 1 Jan 2023
                  </p>
                  <h2 className="font-semibold text-xl ">
                  Migrating to Linear 101
                  </h2>
                  <p className="text-[16px] leading-6 text-[#667085] font-normal">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get...
                  </p>
                  <div className="endblog flex gap-2 mt-5">
                    <span className="bg-[#F9F5FF] text-[#6941C6] p-1 px-2 rounded">
                      Design
                    </span>
                    <span className="bg-[#FDF2FA] text-[#C11574] p-1 px-2 rounded">
                    Research
                  </span>
                  </div>
                </div>
              </div>
              {/* right side bottom part */}
              <div className=" gap-5 mb-4 sm:flex  ">
                <img
                  src="../src/assets/img/image3.png"
                  alt=""
                  className="h-48 w-80 "
                />
                <div className="content mt-1 h-48 w-72">
                  <p className="font-semibold text-[14px] text-[#6941C6]">
                  Sunday , 1 Jan 2023
                  </p>
                  <h2 className="font-semibold text-xl ">
                  Building your API Stack
                  </h2>
                  <p className="text-[16px] leading-6 text-[#667085] font-normal">
                  The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
                  </p>
                  <div className="endblog flex gap-2 mt-5">
                    <span className="bg-[#F9F5FF] text-[#6941C6] p-1 px-2 rounded">
                      Design
                    </span>
                    <span className="bg-[#FDF2FA] text-[#C11574] p-1 px-2 rounded">
                    Research
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* endgame section start  */}

      <section>
        <div className="container">
        <div className="endgame">
             
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-60 mb-4 ps-4 pe-4">
                <img
                  src="../src/assets/img/image4.png"
                  alt=""
                  className="h-60 w-[592px] lg:h-60 object-cover "
                />
                <div className="content mt-3 lg:mt-1 lg:h-48 w-full ">
                  <p className="font-semibold text-[14px] text-[#6941C6]">
                  Sunday , 1 Jan 2023
                  </p>
                  <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-xl ">
                  Grid system for better Design User Interface
                  </h2>
                <Link to='/detail'><MdArrowOutward /> </Link>
                </div>
                
                  <p className="text-[16px] leading-6 text-[#667085] font-normal">
                  A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                 </p>
                  <div className="endblog flex gap-2 mt-5">
                    <span className="bg-[#F9F5FF] text-[#6941C6] p-1 rounded">
                      Design
                    </span>
                    <span className="bg-[#FDF2FA] text-[#C11574] p-1 rounded">
                    Research
                  </span>
                  </div>
                </div>
              </div>
        </div>
        </div>
        <AllBlog datas ={Blogdata}/>
      </section>
    </>
  );
}

export default Blog;



// All Blog component 
export function AllBlog(props) {
    // console.log(data,"json")
    
  return (
    <> 
    <section>
        <div className="container mx-auto p-8">
        <div className="head mb-5">
            <h2 className="font-semibold text-2xl">All blog posts</h2>
        </div>
        <div className="allblog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {
            props.datas.map((data,i)=>
            <div className=" mb-4 " key={i}>
                <img
                  src={data.img}
                  alt=""
                  className="h-48 w-full object-cover "
                />
                {/* sm:h-48  sm:w-80 */}
                  <div className="content mt-3 h-auto ">
                  <p className="font-semibold text-[14px] text-[#6941C6]">
                  {data.title}
                 
                  </p>
                  <div className="flex justify-between align-middle items-center ">
                  <h2 className="font-semibold text-xl ">
                 {data.heading}
                  </h2>
                <Link to='/detail'><MdArrowOutward /> </Link>
                </div>
                  <div className="">
                  <p className="text-[16px] leading-6 text-[#667085] font-normal rounded">
                  {data.para}
                  </p>
                    
                  </div>
                 
                  <div className="endblog flex gap-2 mt-5">
                    <span className="bg-[#F9F5FF] text-[#6941C6] p-1 px-2 rounded">
                    {data.heighlight1}
                      {/* Design */}
                    </span>
                    <span className="bg-[#EEF4FF] text-[#3538CD] p-1 px-2 rounded">
                    {data.heighlight2}
                    {/* Research */}
                  </span>
                 {data.heighlight3? (<span className="bg-[#FDF2FA] text-[#C11574] p-1 px-2 rounded">
                    {data.heighlight3}
                    {/* Research */}
                  </span>):''}
                  </div>
                </div>
              </div>
            )
        }
        </div>


        </div>
    </section>
      
    </>
  )
}


