import React from "react";
import Image from "next/image";
import EventDetail from "./EventDetail";

const Event = () => {
  return (
    <div id = "events" className="lg:h-screen py-8 lg:py-0 bg-HeroBackground md:max-h-[800px] my-custom-text">
      <Image 
        src="/hero/GroupTop.png" 
        alt="" 
        width={1920} 
        height={1080}
        className="w-screen absolute z-10"
      >
      </Image>
      <div className="w-screen max-w-[1440px] flex justify-center items-center h-full mx-auto px-4 xl:px-0">
        <div className="flex flex-col-reverse md:flex-row justify-center sm:gap-[30px] xl:gap-[50px] ">
          <div className="flex flex-col gap-8 md:gap-10 justify-center max-w-[700px] mt-6 md:mt-0">
            <EventDetail 
              day="6" 
              year="October, 2023" 
              title="Day 1: Inception" 
              imgSource="https://i.ibb.co/VHKQdLQ/day1.webp"
              paragraph="From Delegate kit distribution to our Inauguration and Cultural Night, this day is packed with the first two thought-provoking Sessions addressing the theme."
            />
            <EventDetail 
              day="7" 
              year="October, 2023" 
              title="Day 2: Discourse" 
              imgSource="https://i.ibb.co/7Wgr7RL/day2.webp"
              paragraph="Immersed in three engaging sessions, delving deep into the global challenges, the second day is packed and concluded with a captivating star night, featuring a famous personality and celebration."
            />
            <EventDetail 
              day="8" 
              year="October, 2023" 
              title="Day 3: Epilogue" 
              imgSource="https://i.ibb.co/NCV8FqT/day3.webp"
              paragraph="The culmination of insightful discussions in the last three sessions, followed by a profound closing ceremony and a memorable valedictory event, honoring the delegates and celebrating their accomplishments."
            />
          </div>
          <div className="flex md:block justify-center">
            <Image 
              src="https://i.ibb.co/G9Jy9q0/Artboard-1-4x.webp" 
              alt="" 
              
              width={1920} 
              height={1080}
              className="md:h-full md:w-full w-[60%] h-[40vh] max-w-[270px] md:min-w-[300px] lg:min-w-[350px] sm:max-h-[500px] lg:max-h-[600px] xl:max-h-auto rounded-lg mt-8 mb-8 border-4 border-yellow-500"
              />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Event;
