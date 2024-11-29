import React from "react";
import Hero from "./Hero";
// import ExcelDataRead from './excelDataRead'

function About() {
 

  return (
    <>
      <div className="container p-8">
        <Hero heroName="John Doe" />
        <div className="image mt-24">
          <img
            className="h-[556px] w-full object-cover"
            src="./src/assets/Images/AboutImg/JhonDoe.png"
            alt=""
          />
        </div>

        <div className="about mt-12 font-semibold">
          <h2 className="text-2xl">About Me</h2>
          <p className="font-normal text-lg text-[#C0C5D0]">
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </p>
        </div>

        <div className="skill mt-12 font-semibold">
          <h2 className="text-2xl">Skills:</h2>
          <p className="font-normal text-lg text-[#C0C5D0]">
            <strong>.</strong> Extensive experience in UI design, with a strong
            portfolio of completed projects
            <br />
            <strong>. </strong>Proficiency in design tools such as Adobe
            Creative Suite and Sketch
            <br />
            <strong>. </strong>Excellent visual design skills, with a strong
            understanding of layout, color theory, and typography
            <br />
            <strong>. </strong>Ability to create wireframes and prototypes to
            communicate design concepts
            <br />
            <strong>. </strong>Strong communication and collaboration skills,
            with the ability to work effectively with cross-functional teams
            <br />
            <strong>. </strong>Experience conducting user research and gathering
            insights to inform design decisions
            <br />
            <strong>. </strong>Proficiency in HTML, CSS, and JavaScript
          </p>
        </div>

        <div className="skill mt-12 font-semibold">
          <h2 className="text-2xl">Experience:</h2>
          <p className="font-normal text-lg text-[#C0C5D0]">
            <strong>.</strong> 5 years of experience as a UI designer, working
            on a variety of projects for clients in the tech and retail
            industries
            <br />
            <strong>. </strong>Led the design of a successful e-commerce
            website, resulting in a 25% increase in online sales
            <br />
            <strong>. </strong>Created wireframes and prototypes for a mobile
            banking app, leading to a 20% increase in app usage
            <br />
            <strong>. </strong>Conducted user research and usability testing to
            inform the redesign of a healthcare provider's website, resulting in
            a 15% increase in website traffic
          </p>
        </div>

        
        <div className="skill mt-12 font-semibold">
          <h2 className="text-2xl">Education:</h2>
          <p className="font-normal text-lg text-[#C0C5D0]">
            <strong>. </strong>Bachelor's degree in Graphic Design<br/>
            <strong>. </strong>Certified User Experience Designer (CUED)
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
