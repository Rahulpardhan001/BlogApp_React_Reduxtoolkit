import React, { useState } from 'react'
import Hero from './Hero'
import { Projectdata } from '../../JSONDATA/ProjectData'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

function Project() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <div>
    <Hero  heroName="PROJECTS"/>
      <ListProject/>
    </div>
   
    </>
  )
}

export default Project


// List project component
export function ListProject() {
    // console.log(data,"json")
    
  return (
    <> 
    <section>
        <div className="container mx-auto p-8">
        <div className="head mb-5">
            <h2 className="font-semibold text-2xl">List Project</h2>
        </div>
        <div className="allblog grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 ">
        {
            Projectdata.map((data,i)=>
            <div className={`mb-4 ${i === 2 ? 'lg:col-span-2' : ''}`} key={i}>
                <img
                  src={data.img}
                  alt=""
                  className={`h-96  object-cover ${i=== 2? 'h-[656px] object-cover w-full':''}`} 
                />
                <div className={`content mt-3 h-auto sm:h-48  ${i===2 ? ('sm:w-full'):''}`}>
                  <p className="font-semibold text-[14px] text-[#6941C6]">
                  {data.title}
                 
                  </p>
                  
                  <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-xl ">
                 {data.heading}
                  </h2>
                <Link to='/detail'><MdArrowOutward /> </Link>
                </div>
                  <p className="text-[16px] leading-6 text-[#667085] font-normal ">
                  {data.para}
                  </p>
                  <div className="endblog flex flex-wrap gap-2 mt-5">
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
                    </span>):''}

                    {data.heighlight4? (<span className="bg-[#EEF4FF] text-[#3538CD] p-1 px-2 rounded">
                    {data.heighlight4}
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