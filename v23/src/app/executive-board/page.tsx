"use client";
import CommModalEbs from "@/components/CommModalEbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const DISEC = [
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
];

const ADHOC = [
  {
    name: 'Shikhar Tripathi',
    title: 'CHAIRPERSON',
    imgSource: 'https://i.ibb.co/0ZTjnRK/chair.webp',
  },
  {
    name: 'Shakil Imtiaz',
    title: 'VICE  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/GJyzYKP/vice.webp',
  },
];

const ECO = [
  {
    name: 'Vinayak Mishra',
    title: 'PRESIDENT',
    imgSource: 'https://i.ibb.co/nCs4wTZ/presi.webp',
  },
  {
    name: 'Arya Senapati',
    title: 'VICE PRESIDENT',
    imgSource: 'https://i.ibb.co/cCrpYfM/Photo.webp',
  },

];
const UNHRC = [
  
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
];

const WHA = [
  
  
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
];
const IP = [
  {
    name: 'Shreya Chatterjee',
    title: 'EDITOR IN CHIEF',
    imgSource: 'https://i.ibb.co/yhZzmTw/editor.webp',
  },
  {
    name: 'Samyabrata Chatterjee',
    title: 'PHOTOGRAPHER IN CHIEF',
    imgSource: 'https://i.ibb.co/jhYrtjN/photo.webp',
  },
];
const UNCSW = [
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
];
const UNFCCC = [
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
];

const WB = [
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
];
const UNESCO = [
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
];
const UNCND = [
  {
    name: 'Aditi Khuntia',
    title: 'VICE CHAIRPERSON',
    imgSource: 'https://i.ibb.co/1fDfZzD/vice.webp',
  },
];
const GA6 = [
  {
    name: 'Ayush Tanwar ',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/XDTKhZk/ch-ch2.webp',
  },
  {
    name: 'Aman Kotecha',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/G2SWq8b/co-ch1.webp',
  },
];

const UNOOSA = [
  {
    name: 'Shayer Majumdar',
    title: 'CHAIRPERSON',
    imgSource: 'https://i.ibb.co/fqKq0dM/chair.webp',
  },
  {
    name: 'Aryan Singh',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/4FV1TvX/co-ch.webp',
  },
];

const UNSC = [
  {
    name: 'Ashwath Komath',
    title: 'PRESIDENT',
    imgSource: 'https://i.ibb.co/vXzpvdT/presi.webp',
  },
  {
    name: 'Akash P Videsh',
    title: 'VICE PRESIDENT',
    imgSource: 'https://i.ibb.co/QNQYwmv/vice.webp',
  },
];

const NATO = [
  {
    name: 'Gowtham Srinivas',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/b60hhyg/s-1.webp',
  },
  {
    name: 'Sohan Swaastik Mohapatra',
    title: 'CO  CHAIRPERSON',
    imgSource: 'https://i.ibb.co/zf00tjY/co-2.webp',
  },
];

const page = () => {
  return (
    <>
      <main className="bg-EventBackground relative">
        <Navbar />
        <div className="max-w-[1920px] mx-auto">
          <Image
            src="https://i.imgur.com/HQ8xVDI.png"
            alt="bottom-vector"
            width={1920}
            height={200}
            className="mx-auto absolute bottom-0 h-96 object-cover"
          ></Image>
          <div className="relative  w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-screen 4xl:h-[80vh] 4xl:max-h-[900px] overflow-hidden mx-auto ">
            {/* top gradient*/}
            <div className="absolute top-[-5%] w-full h-[70%] opacity-70 bg-gradient-to-b z-10 from-[#0e213f] to-transparent blur-3xl"></div>
            {/* bottom gradient*/}
            <div className="absolute bottom-[-10%] w-full h-[80%] bg-gradient-to-t z-10 from-[#001212] to-transparent blur-xl "></div>
            <div className="absolute bottom-[-10%] w-full h-[40%] bg-gradient-to-t z-10 from-[#001212] to-transparent blur-xl "></div>

            {/* right gradient*/}
            <div className="absolute right-0 -top-2 w-[5%] h-full bg-gradient-to-l z-10 from-[#001212] to-transparent blur-2xl "></div>
            <div className="absolute right-0 w-[5%] -top-2 h-full bg-gradient-to-l z-10 from-[#001212] to-transparent blur-3xl"></div>

            {/* left gradient*/}
            <div className="absolute -left-2 -top-2 w-[5%]  h-[111%] bg-gradient-to-r z-10 from-[#001212] to-transparent blur-lg "></div>
            <Image
              src="https://i.ibb.co/8Pf19b3/eb.jpg"
              alt="ebs-hero-image"
              width={1920}
              height={1080}
              quality={100}
              className={`absolute inset-0 z-5 translatey-[30px] opacity-1 w-full rounded-lg object-cover`}
            ></Image>
            <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-bold text-[9vw] 2xl:text-[120px] whitespace-nowrap">
              Executive Board
            </h1>
          </div>
          <div className="h-[7px] bg-committeeLine"></div>
          <div className="flex gap-12 py-36 flex-col">
            <div className="flex gap-4 justify-center px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/TRNN2sR/DISEC.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                Disarmament & International <br /> Security Committee
              </div>
            </div>
            <div className="flex justify-evenly gap-6 px-4 flex-wrap">
              {DISEC.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`DISEC-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                      // className="w-80 h-80"
                    />
                  )
              )}
            </div>

            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/txkscpW/ADHOC.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">ADHOC</div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {ADHOC.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`ADHOC-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>

            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/SVZzFw8/ECOSOC.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS <br /> ECONOMIC AND SOCIAL COUNCIL
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {ECO.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNESCO-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>

            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/wykQF3b/UNHRC.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS <br /> HUMAN RIGHT COUNCIL
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNHRC.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNHRC-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/6Y8m9fs/WHA.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                WORLD HEALTH ASSEMBLY
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {WHA.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`WHA-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/hfMyPfB/IP.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                INTERNATIONAL <br />
                PRESS
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {IP.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`IP-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/tY7pXkJ/UNSCW.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS COMMISIONS <br /> ON THE STATUS OF WOMEN
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNCSW.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNCSW-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/Sr2gDkG/UNFCCC.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                &quot; 28th CONFERENCE OF THE PARTIES &quot; <br /> UNITED NATIONS FRAMEWORK
                CONVENTION ON CLIMATE CHANGE
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNFCCC.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNFCCC-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/28sLB8P/WB.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                WORLD <br />
                BANK
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {WB.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`WB-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/KXs9qpn/UNESCO.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS EDUCATIONAL <br /> SCIENTIFIC AND CULTURAL
                ORGANIZATION
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNESCO.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNESCO-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/rxXRDm8/UNCND.webp"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS COMMISSION <br /> ON NARCOTIC DRUGS
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNCND.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNCND-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/BscfpsL/GA6-Legal.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS GENERAL ASSEMBLY <br /> SIXTH COMMITTEE
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {GA6.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`GA6-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/NYVDJ3w/UNOOSA.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS OFFICE FOR
                <br /> OUTER SPACE AFFAIRS
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNOOSA.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNOOSA-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/z2478Jc/UNSC.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                UNITED NATIONS <br /> SECURITY COUNCIL
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {UNSC.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`UNSC-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-10 px-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.ibb.co/gTLtTnB/NATO.png"
                  alt="ebs-disec-logo"
                  width={70}
                  height={70}
                  quality={100}
                ></Image>
              </div>
              <div className="bg-white w-2"></div>
              <div className="font-bold text-xl flex items-center">
                NORTH ATLANTIC
                <br /> TREATY ORGANIZATION
              </div>
            </div>
            <div className="flex gap-6 px-4 justify-evenly flex-wrap">
              {NATO.map(
                (item, index) =>
                  item.imgSource != "" && (
                    <CommModalEbs
                      key={`NATO-${index}`}
                      name={item.name}
                      title={item.title}
                      imgSource={item.imgSource}
                    />
                  )
              )}
            </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
