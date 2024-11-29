import React from 'react'

function Hero(props) {
  return (
    <>
          <div className="container">
     
     <hr />
     <div className="flex justify-center w-full items-center h-72 md:h-96 lg:h-[28rem]">
<p className="font-bold text-[64px] md:text-[128px] lg:text-[160px] xl:text-[310px] leading-none text-[#1A1A1A] dark:text-white">
{props.heroName}
</p>
</div>
<hr />
 </div>
    </>
  )
}

export default Hero
