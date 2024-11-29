import React from "react";

function Footer() {
    const date = new Date(); 
  return (
    <>
      <footer>
        <div className="container">
          <div className="foot p-8  max-sm:flex-col flex gap-3 font-normal text-xl text-[#1A1A1A] dark:text-white">
            <span>© {date.getFullYear()}</span>
            <span>Twitter </span>
            <span>LinkedIn</span>
            <span>Email</span>
            <span>RSS feed</span>
            <span>Add to Feedly</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
