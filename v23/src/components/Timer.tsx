'use client'

import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";

const Timer: React.FC = () => {
  const targetDate = new Date("2023-10-05T23:59:59");
  console.log(targetDate);

  return (
    <>
      <div className="font-sans w-screen py-8 px-4 overflow-hidden bg-carouselBackground sm:py-12">
        <div className="max-w-7xl mx-auto relative">
        {/* <div className="absolute w-32  h-32 xl:top-0 lg:w-64 lg:h-64 xl:w-96 xl:h-96">
        <Image src="/Mascot_rev.png" fill  className="" alt={""}/>
        </div>
        <div className="absolute right-0 w-64 h-64 xl:w-96 xl:h-96">
        <Image src="/Mascot.png" fill  className="" alt={""}/>
        </div> */}
          <h1 className="py-4 text-2xl text-center font-bold text-transparent mx-auto max-w-5xl bg-clip-text bg-gradient-to-r from-[#061124] via-[#143A81] to-[#061125]">
            Join us for the 11th Edition of KIIT International MUN!
          </h1>
          <h1 className="pb-2 md:pb-5 py-4 md:py-6 text-center text-2xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark">
            Countdown to UNLEASH DIPLOMACY
          </h1>
          <div className="p-6 sm:p-10 flex items-center justify-center text-3xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#445DB6] to-[#7860C5]">
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="px-6 py-4 sm:px-10 flex flex-col items-center sm:flex-row justify-center text-transparent bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark  font-bold text-base sm:text-xl ">
            <div className="flex items-center mt-2 sm:mt-0">
            <Image src="/timercal.png" width={10} height={10} alt="cal" />
              <span className="align-middle pl-1">6-7-8 October, 2023</span>
            </div>
             {/* <div className="flex flex-col sm:flex-row mt-5 items-center justify-center">
            <button className="rounded-full border-none bg-buttonBackground px-4 py-2 sm:px-6 sm:py-3 outline-none mb-4 sm:mb-0">
              VIEW DETAILS
            </button>
            <div className="my-2 sm:my-0 sm:mx-4"></div>
            <button className="rounded-full border-none bg-buttonBackground px-4 py-2 sm:px-6 sm:py-3 outline-none">
              REGISTER NOW
            </button>
          </div> */}
            <div className="flex items-center mt-2 sm:mt-0 sm:ml-10">
              <Image src="/timerloc.png" width={10} height={10} alt="loc" />
              <span className="align-middle pl-1">KIIT Bhubaneswar</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
