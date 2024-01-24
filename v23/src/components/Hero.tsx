import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaImage, FaRegCalendarAlt, FaDownload } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
// import HeroMobileView from "./HeroMobileView";

const Hero = () => {
  return (
    <>
    <div className="font-sans w-screen bg-HeroBackground overflow-x-hidden z-[-10] h-[120vh] md:h-auto my-custom-text">
      <Image
        src="/hero/GroupTop.png"
        alt=""
        width={1920}
        height={1080}
        quality={100}
        priority
        className="hidden md:block absolute h-[20vh] w-screen max-w-full md:h-auto"
      ></Image>
      <Image
        src="/hero/mobileVector.png"
        alt=""
        width={1920}
        height={1080}
        quality={100}
        priority
        className="absolute -top-10 md:hidden w-screen max-w-full md:h-auto"
      ></Image>
      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-around relative md:items-center h-full">

            <Image
              src="/hero/HeroImage1.png"
              alt=""
              width={1000}
              height={720}
              quality={100}
              className="h-[50vh] w-[100%] mx-auto sm:w-[75%] md:w-[55%] sm:h-[500px] md:h-[510px] lg:h-[700px] flex-shrink-0 max-w-[650px]"
            ></Image>
            <div className="hidden md:block absolute max-w-[1440px] left-0 bottom-0 -translate-y-[5vh] md:-translate-y-[70px] translate-x-[30px] md:translate-x-[70px] z-10 text-white">
              <h1 className="text-lg lg:text-xl font-semibold leading-6">
              Ideas Collide
                <br />
                Minds Converge
                <br />
                Change Takes Shape
              </h1>
{/*               <Link href= 'mun'> */}
              <Link href="#footer">
                <button className="text-base lg:text-lg mt-3 lg:mt-5 rounded-full border-none bg-buttonBackground px-3 lg:px-5 py-3 md:py-1 outline-none font-bold">
                  CONTACT US
                </button>
              </Link>
            </div> 
          <div className="flex-col  w-full md:text-justify hidden md:block -translate-y-[400px] md:translate-y-8 lg:translate-y-0 md:-translate-x-[40px] justify-center gap-3 text-white">
            <h1 className="my-custom-text text-2xl md:text-[17px] md:leading-6 lg:text-2xl xl:text-[25px] font-bold">
            The Ultimate Platform for
              <br />
              Global Engagement, Diplomacy, and
              <br />
              Empowering tomorrow&apos;s Leaders
            </h1>
            <p className="max-w-[900px] text-sm w-[80%] mt-4 md:w-[100%] lg:w-[80%] my-custom-text leading-5"
             style={{ 
              wordWrap: 'break-word',
              whiteSpace: 'pre-line',
              textAlign: 'justify', 
            }}  
            >
            With its engaging debates, diverse perspectives, and collaborative spirit, KIITMUN serves as a catalyst for honing critical thinking, diplomacy, and problem-solving skills. This extraordinary platform brings together aspiring diplomats, future leaders, and change-makers from around the world, providing them with an unparalleled opportunity to explore pressing global issues, engage in meaningful dialogue, and collectively work towards innovative solutions.
            </p>
            <div className="flex gap-2 justify-center md:justify-normal mt-2 my-custom-text mb-4">
              See more about us
              <Link href="/about" className="flex items-center">
                <span className="inline-block rounded-full bg-white px-1 py-1 text-xs text-black">
                  <FaArrowRight></FaArrowRight>
                </span>
              </Link>
              
            </div>
            <div>
                <a href="https://play.google.com/store/apps/details?id=com.kiitmun.mun" className="text-white  w-full" target="blank">
                      <Image
                        src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                        alt="Image description"
                        width={150}
                        height={150}
                        // fill
                      />
                    </a>
              </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1440px] md:-translate-y-[80px] lg:translate-y-0 mt-[70px] mx-auto  md:px-[5vw] xl:px-[100px] pt-8 text-3xl text-white first-letter">
        <div className="flex flex-col md:flex-row -translate-y-[60px] md:-translate-y-8 lg:-translate-y-0 items-center justify-between w-full lg:pr-[150px] md:pr-[100px] sm:pr-[50px] xl:pr-[200px] absolute top-0 md:top-10">
          <div className="w-[90%] md:w-[50%]">
            <h1 className="text-[43px] md:text-3xl font-bold text-center">WHO WE ARE:</h1>
            <p className="text-sm leading-5 mt-4 break-words whitespace-pre-line text-justify">
            KIIT International Model United Nations emerges as a leading global United Nations simulation, spearheaded by the Secretariat, the committed student body of the Kalinga Institute of Industrial Technology. Since its inception in 2013, this conference has consistently surpassed expectations, establishing unprecedented benchmarks year after year. By fostering intellectual growth, nurturing youth leadership, and promoting global understanding, it stands as an exemplary platform for empowerment and enlightenment.
            </p>
            <div className="md:hidden flex gap-2 mt-2 text-lg font-bold justify-center md:justify-normal">
              See more about us
              <Link href="/about" className="flex items-center">
                <span className="inline-block rounded-full bg-white px-1 py-1 text-xs text-black">
                  <FaArrowRight></FaArrowRight>
                </span>
            </Link>
            </div>
            <div className="mt-4 md:hidden">
                <a href="https://play.google.com/store/apps/details?id=com.kiitmun.mun" className="text-white  w-full" target="blank">
                      <Image
                        src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                        alt="Image description"
                        width={150}
                        height={150}
                        // fill
                      />
                    </a>
              </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-center">
            <p className="text-sm leading-5 mt-2 md:mt-4 break-words whitespace-pre-line text-justify">
              For any Queries or Upgradation Requests, kindly <b>Fill out the Form</b>&emsp;
            </p> 
              <Link href="https://forms.gle/vRZPrNXAaa4Yq7GbA" className="z-30" target="blank">
                <button className="rounded-full border-none bg-buttonBackground px-2 py-1 text-base outline-none text-l">
                  Form for Change
                </button>
              </Link>
            </div>
          </div>
          <div className="flex text-[40px] z-30 mt-6 md:mt-4">
            <Link href="/">
            {/* target="_blank" */}
              <TfiWorld className="border-r-none h-20 w-20 border-2 border-r-0 border-[#AF693B] px-4 py-4 bg-buttonBackground" />
            </Link>
            <Link href="#events">
              <FaRegCalendarAlt className="h-20 w-20 border-2 border-r-0 border-[#AF693B] px-4 py-4" />
            </Link>
            <Link href="/gallery">
              <FaImage className="h-20 w-20 border-2 border-r-0 border-[#AF693B] px-4 py-4" />
            </Link>
            <Link href="/downloads">
              <FaDownload className="h-20 w-20 border-2 border-[#AF693B] px-4 py-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-h-[500px] absolute md:static bottom-[-20vh] w-screen object-cover overflow-y-hidden">
        <Image
          src="https://i.imgur.com/HQ8xVDI.png"
          alt=""
          width={1920}
          height={1080}
          quality={100}
          className="w-screen h-full"
        ></Image>
    </div>
      </div>
    </>
  )
};

export default Hero ;
