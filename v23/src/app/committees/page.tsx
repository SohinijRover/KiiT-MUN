'use client'

import CommitteesCard from "@/components/CommitteesCard";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

const eb1 = [
  {
    name: 'Swapneel Thakur',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/XX6BvPv/co2.webp',
  },
  {
    name: 'Satrajit Sahani',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/S7bvfw5/co1.webp',
  },
  {
    name: 'Sadicha Bal',
    title: 'DIRECTOR',
    imgSource: 'https://i.ibb.co/Z6wxfzX/direc.webp',
  },
]

const  eb2 = [
  {
    name: 'Vivek Pradhan',
    title: 'PRESIDENT',
    imgSource: 'https://i.ibb.co/ZTkbZ3T/pres.webp',
  },
  {
    name: 'Subandhu',
    title: 'VICE PREDSIDENT',
    imgSource: 'https://i.ibb.co/6nFs3k8/vice.webp',
  },
  {
    name: 'Aaditya Choudhury',
    title: 'DIRECTOR',
    imgSource: 'https://i.ibb.co/bRgsg4m/direc.webp',
  },
]

const  eb3 = [
  {
    name: 'Vinayak Mishra',
    title: 'PRESIDENT',
    imgSource: 'https://i.ibb.co/nCs4wTZ/presi.webp',
  },
]

const  eb4 = [
  {
    name: 'Srotoswini Ghatak',
    title: 'VICE  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/QPkrH1M/vice.webp',
  },
  {
    name: 'Madhu Shruti Mukharjee',
    title: 'CHAIRPERSON',
    imgSource: 'https://i.ibb.co/PrLXnKY/chair.webp',
  },
  {
    name: 'Sankalpa Chakraborty',
    title: 'DIRECTOR',
    imgSource: 'https://i.ibb.co/vhJCxHK/direc.webp',
  },
]

const  eb5 = [
  {
      name: 'Shreya Chatterjee', 
      title: 'EDITOR IN CHIEF', 
      imgSource: 'https://i.ibb.co/yhZzmTw/editor.webp'
  },
  {
      name: 'Samyabrata Chatterjee', 
      title: 'PHOTOGRAPHER IN CHIEF', 
      imgSource: 'https://i.ibb.co/jhYrtjN/photo.webp'
  },
]

const  eb6 = [
  {
    name: 'Maaheen Faisal',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/3Tn9h8P/chair.webp',
  },

  {
    name: 'Manisha Sengupta',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/TTC1qgD/co-ch.webp',
  },
  
]

const  eb7 = [
  {
    name: 'Avyakt Mishra',
    title: 'CHAIRPERSON',
    imgSource: 'https://i.ibb.co/6DPYqd4/chair.webp',
  },
  {
    name: 'Disha Goyal',
    title: 'VICE CHAIRPERSON',
    imgSource: 'https://i.ibb.co/MhjF0Y6/vice.webp',
  },
]

const  eb8 = [
  {
    name: 'Rahul Menon',
    title: 'PRESIDENT',
    imgSource: 'https://i.ibb.co/T89CmVy/pres-1.webp',
  },
  {
    name: 'Ishpreet Singh Luthra',
    title: 'VICE PRESIDENT',
    imgSource: 'https://i.ibb.co/GJC6FSv/vice.webp',
  },
]

const  eb9 = [
  {
    name: 'Pravar Dennison',
    title: 'CHAIRPERSON',
    imgSource: 'https://i.ibb.co/pvmT1w1/chair.webp',
  },
  {
    name: 'Namrata Mishra',
    title: 'DIRECTOR',
    imgSource: 'https://i.ibb.co/3hh3q9j/direc.webp',
  },

  
]

const  eb10 = [
    
  {
    name: 'Aditi Khuntia',
    title: 'VICE CHAIRPERSON',
    imgSource: 'https://i.ibb.co/1fDfZzD/vice.webp',
  },
]

const  eb11= [
  {
      name: 'Ayush Tanwar ', 
      title: 'CO  CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/XDTKhZk/ch-ch2.webp'
  },
  {
      name: 'Aman Kotecha', 
      title: 'CO  CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/G2SWq8b/co-ch1.webp'
  },
 
]

const  eb12 = [
  {
      name: 'Shayar Majumdar', 
      title: 'CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/fqKq0dM/chair.webp'
  },
  {
      name: 'Aryan Singh', 
      title: 'CO  CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/4FV1TvX/co-ch.webp'
  },
]


const  eb13 = [
  {
      name: 'Ashwath Komath', 
      title: 'PRESIDENT', 
      imgSource: 'https://i.ibb.co/vXzpvdT/presi.webp'
  },
  {
      name: 'Akash P Videsh', 
      title: 'VICE PRESIDENT', 
      imgSource: 'https://i.ibb.co/QNQYwmv/vice.webp'
  },
]

const  eb14 = [
  {
      name: 'Gowtham Srinivas', 
      title: 'CO  CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/X2x7sbF/NATO.webp'
  },
  {
      name: 'Sohan Swaastik Mohapatra', 
      title: 'CO  CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/zf00tjY/co-2.webp'
  },
]

const eb15 = [
  {
      name: 'Shikhar Tripathi', 
      title: 'CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/0ZTjnRK/chair.webp'
  },
  {
      name: 'Shakil Imtiaz', 
      title: 'VICE  CHAIRPERSON', 
      imgSource: 'https://i.ibb.co/GJyzYKP/vice.webp'
  },
]

type activelevelProps = {
  beginner: boolean
  intermediate: boolean
  advanced: boolean
}

const Committees = () => {
  const [activeLevel, setActiveLevel] = useState<activelevelProps>({
    beginner: true,
    intermediate: false,
    advanced: false,
  })
  const hanldeActiveLevel = (level: keyof activelevelProps) => {
    const newActiveLevel = {
      beginner: false,
      intermediate: false,
      advanced: false,
    }

    newActiveLevel[level] = true
    setActiveLevel(newActiveLevel)
  }
  return (
    <main className="bg-EventBackground">
      <Navbar />
      <div className="font-sans max-w-[1920px] mx-auto">
        <div className="lg:h-screen lg:w-screen max-w-full object-cover relative max-h-[900px]">
          <Image
            src="https://i.ibb.co/ZfyGC5F/committee.png"
            alt="commiittees hero image"
            width={1920}
            height={1080}
            quality={100}
            className="h-full w-full"
          ></Image>
          <div className="absolute z-10 inset-0 bg-blackBlur bg-blend-multiply mix-blend-multiply"></div>
          <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[9.5vw] 2xl:text-[150px]">
            Committees
          </h1>
        </div>
        <div className="h-[7px] bg-committeeLine"></div>
        <div className="w-full py-16">
          <div className="flex justify-center">
            <div className="text-black text-xs ssm:text-sm sm:text-base font-medium flex gap-0 md:gap-10 bg-[#D7E1E3] rounded-full">
              <div
                className={`py-2 px-2 ssm:px-4  sm:px-6 md:px-8 rounded-full cursor-pointer ${activeLevel.beginner ? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
                  `}
                onClick={() => hanldeActiveLevel('beginner')}
              >BEGINNER
              </div>
              <div
                className={`py-2 px-2 ssm:px-4  sm:px-6 md:px-8 rounded-full cursor-pointer ${activeLevel.intermediate ? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
                  `}
                onClick={() => hanldeActiveLevel('intermediate')}
              >INTERMEDIATE
              </div>
              <div
                className={`py-2 px-2 ssm:px-4  sm:px-6 md:px-8 rounded-full cursor-pointer ${activeLevel.advanced ? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
                  `}
                onClick={() => hanldeActiveLevel('advanced')}
              >ADVANCED
              </div>
            </div>
          </div>
          {activeLevel.beginner && (
            <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
              <CommitteesCard
                imgAlt="card 1"
                imgSource="https://i.ibb.co/Dgq7nQp/DISEC-4x-min.jpg"
                h1='DISEC'
                h2='Disarmament & International'
                h2span='Security Committee'
                single="Single Delegate"
                double="EB: T.B.A."
              EBs={eb1}
              />
              <CommitteesCard
                imgAlt="card 2"
                imgSource="https://i.ibb.co/bQjFKg4/UNHRC-4x-min.jpg"
                h1='UNHRC'
                h2='United Nations Human'
                h2span='Rights Council'
                single="Double Delegate"
                double="EB: T.B.A."
                EBs={eb2}
              />
              <CommitteesCard
                imgAlt="card 3"
                imgSource="https://i.ibb.co/3vcn5qL/ECOSOC-4x-min.jpg"
                h1='ECOSOC'
                h2='United Nations Economic and'
                h2span='Social Council'
                single="Double Delegate"
                double="EB: T.B.A."
                EBs={eb3}
              />
              <CommitteesCard
                imgAlt="card 4"
                imgSource="https://i.ibb.co/LJBcMst/WHA-4x-min.jpg"
                h1='WHA'
                h2='World Health Assembly'
                single="Double Delegate"
                double="EB: T.B.A."
                EBs={eb4}
              />
              <CommitteesCard
                imgAlt="card 5"
                imgSource="https://i.ibb.co/xHnKQ6s/IP-4x-min.jpg"
                h1='IP'
                h2='International Press'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb5}
              />
            </div>
          )}
          {activeLevel.intermediate && (
            <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
              <CommitteesCard
                imgAlt="card 1"
                imgSource="https://i.ibb.co/LSQBMSD/UNCSW-4x-min.jpg"
                h1='UNCSW'
                h2='United Nations Commission on the '
                h2span='Status of Women'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb6}

              />
              <CommitteesCard
                imgAlt="card 2"
                imgSource="https://i.ibb.co/2c8LdM9/UNFCCC-4x-min.jpg"
                h1='COP-28 UNFCCC'
                h2=' "Conference of the Parties" of United Nations Framework Convention on Climate Change'
                single="Double Delegate"
                double="EB: T.B.A."
                EBs={eb7}

              />
              <CommitteesCard
                imgAlt="card 3"
                imgSource="https://i.ibb.co/Wggc6yG/WB-4x-min.jpg"
                h1='WB'
                h2='World Bank'
                single="Double Delegate"
                double="EB: T.B.A."
                EBs={eb8}

              />
              <CommitteesCard
                imgAlt="card 4"
                imgSource="https://i.ibb.co/7nwZGJ4/UNESCO-4x-min.jpg"
                h1='UNESCO'
                h2='United Nations Educational, Scientific and Cultural Organization'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb9}

              />
              <CommitteesCard
                imgAlt="card 5"
                imgSource="https://i.ibb.co/rfFnWbq/UNCND-4x-min.jpg"
                h1='UNCND'
                h2='United Nations Commission on Narcotic Drugs'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb10}

              />
              <CommitteesCard
                imgAlt="card 6"
                imgSource="https://i.ibb.co/6wYVvfj/GA6-4x-min.jpg"
                h1='GA6 LEGAL'
                h2='United Nations General Assembly Sixth Committee'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb11}

              />
              <CommitteesCard
                imgAlt="card 7"
                imgSource="https://i.ibb.co/ggTq6rn/UNOOSA-4x-min.jpg"
                h1='UNOOSA'
                h2='United Nations Office for Outer Space Affairs'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb12}

              />
            </div>
          )}
          {activeLevel.advanced && (
            <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
              <CommitteesCard
                imgAlt="card 1"
                imgSource="https://i.ibb.co/wKLS6KD/UNSC-4x-min.jpg"
                h1='UNSC'
                h2='United Nations Security Council'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb13}

              />
              <CommitteesCard
                imgAlt="card 2"
                imgSource="https://i.ibb.co/gMtKQ5M/NATO-4x.jpg"
                h1='NATO'
                h2='North Atlantic Treaty Organization'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb14}

              />
              <CommitteesCard
                imgAlt="card 3"
                imgSource="https://i.ibb.co/gTBR3HV/ADHOC-4x.jpg"
                h1='AD HOC'
                h2='Ad Hoc Committee'
                single="Single Delegate"
                double="EB: T.B.A."
                EBs={eb15}

              />
            </div>
          )}

          <div className="flex justify-center md:justify-center">
            <p className="text-sm leading-5 mt-4 break-words whitespace-pre-line text-justify">
              For any Queries or Upgradation Requests, kindly <b>Fill out the Form</b>&emsp;
            </p>
            <Link href="https://forms.gle/vRZPrNXAaa4Yq7GbA" className="z-30" target="blank">
              <button className="mt-12  md:mt-3 rounded-full border-none bg-buttonBackground px-2 py-1 text-base outline-none text-l">
                Form for Change
              </button>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
};

export default Committees;
