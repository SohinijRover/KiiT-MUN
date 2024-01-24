"use client";
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import SignUpModal from './SignUpModal';


type EventDetailProps = {
  day: number | string;
  year: string;
  title: string;
  paragraph: string;
  imgSource?: string;
};


const EventDetail = ({ day, year, title, paragraph, imgSource }: EventDetailProps) => {

	let [isOpenModal, setIsOpenModal] = useState(false)

	function openModal() {
		setIsOpenModal(true)
	}

	function closeModal() {
		setIsOpenModal(false)
	}
    return (
    <div className="flex gap-2 sm:gap-4 xl:gap-8 items-center">
      <div className="rounded-full  lg:w-[132px] w-[95px] h-[95px] sm:w-[100px] sm:h-[100px] md:w-[115px] md:h-[115px] flex-shrink-0 lg:h-[132px] bg-gradient-to-b from-[#B0693B] to-[#C0896A] p-[2px]">
        <div className="h-full rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#093338] to-[#1A4D54]">
          <span className="text-2xl sm:text-3xl md:text-4xl x1A4D54l:text-4xl font-bold bg-gradient-to-r from-[#B0693B] to-[#C0896A] text-transparent bg-clip-text">
            {day}
          </span>
          <span className="text-xs lg:text-base">{year}</span>
        </div>
      </div>
      <div>
        <h1 className="text-xl sm:text-xl lg:text-2xl font-semibold">
          {title}
        </h1>
        <p className="text-[10px] md:text-sm md:mt-5 mt-1">{paragraph}</p>

        <button onClick={openModal}  className={`${isOpenModal ? 'hidden' : '' } relative z-10 outline-none mt-2 md:mt-3.5 border-none pb-1 font-medium text-sm md:py-1 px-4 bg-buttonBackground rounded-full`}>
          Click Here
        </button>
        <SignUpModal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} closeModal={closeModal} imgSource={imgSource} />
      </div>
    </div>
  );
};

export default EventDetail;
