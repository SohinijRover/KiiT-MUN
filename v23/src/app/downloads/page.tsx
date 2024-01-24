'use client'


import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
const DownloadPage = () => {
  const downloadData = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/q7d5f26/DISEC.png",
      pdfurl: "https://drive.google.com/file/d/1_jdk0WnnpBUssKSdEZoiW6EJ5Oen9PYS/view?usp=drive_link",
      heading: "DISEC Study Guide",
      paragraph:
        "Disarmament & International Security Committee",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/nQM9t8S/ECOSOC.png",
            pdfurl: "https://drive.google.com/file/d/1kJTyRJ8uiNCitd4roMCKa7PxIeGhs0__/view?usp=drive_link",
      heading: "ECOSOC Study Guide",
      paragraph:
        "United Nations Economic and Social Council",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/r22VtFf/GA6-legal.png",
            pdfurl: "https://drive.google.com/file/d/11HIWbvzBrN_yHoPsP8KulIAZ70-WiMM-/view?usp=drive_link",
      heading: "GA6 LEGAL Study Guide",
      paragraph:
        "United Nations General Assembly Sixth Committee",
    },
    {
      id: 4,
      imageUrl: "/committees/IP@4x.png",
            pdfurl: "https://drive.google.com/file/d/1nzm25O2pFawE_3UwG3EJfHRq0TP0HH9Z/view?usp=drive_link",
      heading: "IP Study Guide",
      paragraph:
        "International Press",
    },
    {
      id: 5,
      imageUrl: "https://i.ibb.co/s9LvG1s/WHA.png",
            pdfurl: "https://drive.google.com/file/d/1j8ygaDuBdZoflYpYn6wcF05MxYFeJNxL/view?usp=sharing",
      heading: "WHA Study Guide",
      paragraph:
        "World Health Assembly",
    },
    {
      id: 6,
      imageUrl: "https://i.ibb.co/FXxStgC/WB.png",
            pdfurl: "https://drive.google.com/file/d/16Mwsjm9MnGsVWXaCm3zsZv398vSqKiV4/view?usp=sharing",
      heading: "WB Study Guide",
      paragraph:
        "World Bank",
    },
    {
      id: 7,
      imageUrl: "https://i.ibb.co/9sQfBQC/UNFCCC.png",
            pdfurl: "https://drive.google.com/file/d/1ghtqSrT5Vr5lajZIzBjYo7uGhxAtKLEg/view?usp=drive_link",
      heading: "COP-28 UNFCCC Study Guide",
      paragraph: "Conference of the Parties of United Nations Framework Convention on Climate Change",
    },
    {
      id: 8,
      imageUrl: "https://i.ibb.co/ynkTp1V/UNSC.png",
            pdfurl: "https://drive.google.com/file/d/1jBz1Y1p9ZR0rU1sHLFpe7uUxUq9jFBAQ/view?usp=drive_link",
      heading: "UNSC Study Guide",
      paragraph:
        "United Nations Security Council",
    },
    {
      id: 9,
      imageUrl: "https://i.ibb.co/Vj7JTvr/UNCSW.png",
            pdfurl: "https://drive.google.com/file/d/1wwv1I0Gkk7jNCddzokgbcNyM3u4d41eC/view?usp=drive_link",
      heading: "UNCSW Study Guide",
      paragraph:
        "United Nations Commission on the Status of Women",
    },
    {
      id: 10,
      imageUrl: "https://i.ibb.co/NtJLwGW/UNHRC.png",
            pdfurl: "https://drive.google.com/file/d/14kc2EOweJtR6P3-UwrUCa0vm4abKUZLE/view?usp=drive_link",
      heading: "UNHRC Study Guide",
      paragraph:
        "United Nations Human Rights Council",
    },
    {
      id: 11,
      imageUrl: "/committees/NATO@4x.png",
            pdfurl: "https://drive.google.com/file/d/1czO_U4-3_zkhb7gwHffqDPOsuSfIfeBG/view?usp=drive_link",
      heading: "NATO Study Guide",
      paragraph:
        "North Atlantic Treaty Organization",
    },
    {
      id: 12,
      imageUrl: "/committees/ADHOC@4x.png",
            pdfurl: "https://drive.google.com/file/d/1YmEA_ikpnkk7wUFJbgCs5-2Z8UB7hB8l/view?usp=drive_link",
      heading: "Ad-Hoc Study Guide",
      paragraph:
        "Secretary General's Ad-Hoc",
    },
    {
      id: 13,
      imageUrl: "https://i.ibb.co/0Yh1rfW/UNCND.png",
            pdfurl: "https://drive.google.com/file/d/1ItDZLg7Yu3nmtXahFqbyMoxoZZ33k3S-/view?usp=drive_link",
      heading: "UNCND Study Guide",
      paragraph:
        "United Nations Commission on Narcotic Drugs",
    },
    {
      id: 14,
      imageUrl: "https://i.ibb.co/S0HhDmv/UNESCO-4x-min.png",
            pdfurl: "https://drive.google.com/file/d/1EweDlGmm-E-_9RUtkJjn4tDmF8_zcYuo/view?usp=drive_link",
      heading: "UNESCO Study Guide",
      paragraph:
        "United Nations Educational, Scientific and Cultural Organization",
    },
    {
      id: 15,
      imageUrl: "https://i.ibb.co/Ld2Rw3y/UNOOSA-4x-min.png",
            pdfurl: "https://drive.google.com/file/d/1tMsHaTFYYu7d6ji170s7U7-Yksh7SuI3/view?usp=drive_link",
      heading: "UNOOSA Study Guide",
      paragraph:
        "United Nations Office for Outer Space Affairs",
    },
  ];

  const documentData = [
    {
      id: 1,
      imageUrl: "/committees/UNCHARTER.png",
      pdfurl: "https://drive.google.com/file/d/1ti-qM692kNtXlQU26HB8njEzz0WK-p-N/view?usp=drive_link",
      heading: "UN CHARTER",
      paragraph: "The foundational treaty of the United Nations, an intergovernmental organization",
    },
    {
      id: 2,
      imageUrl: "/committees/NATO.png",
            pdfurl: "https://drive.google.com/file/d/1gwCWhufaDtWz4HwUTE2T8xAbujdvgykk/view?usp=drive_link",
      heading: "NATO CHARTER",
      paragraph:"The pact of mutual assistance to counter the risk that the Soviet Union would seek to extend its control of Eastern Europe to other parts of the continent",
    },
  ];

  return (
  
    <main className="bg-EventBackground">
      <Navbar />
      <div className="font-sans">
        <div className="lg:h-screen lg:w-screen max-w-full object-cover relative">
          <Image
            src="/committees/committee.png" 
            alt="commiittees hero image"
            width={1920}
            height={1080}
            quality={100}
            className="h-full w-full"
          ></Image>
            <div className="absolute z-10 inset-0 bg-blackBlur bg-blend-multiply mix-blend-multiply"></div>
            <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[9.5vw] 2xl:text-[150px]">
              Downloads
            </h1>
        </div>

        <div className="text-3xl text-center font-bold text-left mx-8 mb-12 mt-16">
          UN DOCUMENTS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 ">
          {documentData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center rounded-lg shadow-lg p-4 bg-[#d7e1e3] text-black"
            >
              <img
                src={item.imageUrl}
                alt={item.heading}
                className="w-full rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{item.heading}</h2>
                <p className="text-gray-700">{item.paragraph}</p>
                <button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none mt-4" >
                  <a href = {item.pdfurl} target="_blank">
                  Download
                </a>
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="text-3xl text-center font-bold text-left mx-8 mb-12 mt-16">
          STUDY GUIDES
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 ">
          {downloadData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center rounded-lg shadow-lg p-4 bg-[#d7e1e3] text-black"
            >
              <img
                src={item.imageUrl}
                alt={item.heading}
                className="w-full rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{item.heading}</h2>
                <p className="text-gray-700">{item.paragraph}</p>
                <button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none mt-4" >
                  <a href = {item.pdfurl} target="_blank">
                  Download
                </a>
                </button>
              </div>
            </div>
          ))}
        </div>



        


        <div className="mt-8" />
        <Footer />
      </div>
    </main>
  );
};

export default DownloadPage;
