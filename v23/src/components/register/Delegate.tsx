import React from "react";
import { Select, TextAreaField, TextField } from "./Fields";
import Image from "next/image";
import { BsCalendar2Day, BsFillPersonFill, BsFillTelephoneFill, BsFlagFill, BsGenderAmbiguous } from 'react-icons/bs'
import { LiaUniversitySolid } from "react-icons/lia"
import { VscMail } from "react-icons/vsc"
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { BiSolidBook, BiSolidTrophy } from "react-icons/bi";
import { COUNTRIES } from "../../app/register/countries"
import { AGE, YEAR } from "../../app/register/age"

const gender = ["Male", "Female", "Other"]

const Delegate = ({ delegate }: { delegate?: string }) => {

  const delegateValue = delegate ? delegate : ''
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 lg:gap-6 justify-around md:justify-center w-full mx-auto">
        <TextField
          icon={<BsFillPersonFill />}
          name={`${delegateValue}firstName`}
          type="text"
          className="w-[48%] md:w-[49%] lg:w-[30%]"
          placeholder="First Name" />
        <TextField
          icon={<BsFillPersonFill />}
          name={`${delegateValue}middleName`}
          type="text"
          className="w-[48%] md:w-[49%] lg:w-[30%]"
          placeholder="Middle Name" />
        <TextField
          icon={<BsFillPersonFill />}
          name={`${delegateValue}lastName`}
          placeholder="Last Name"
          className="w-full md:w-[49%] lg:w-[30%]"
          type='text'
        />
        <TextField
          icon={<VscMail />}
          type='email'
          placeholder="Email"
          className="w-full md:w-[49%] lg:w-[30%]"
          name={`${delegateValue}email`}
        />
        <Select icon={<BsGenderAmbiguous />}
          className="w-[48%] md:w-[49%] lg:w-[30%]"
          name={`${delegateValue}gender`}
        >
          <option value="">Gender</option>
          {gender.map((g, index) => (
            <option key={index} value={g}>{g}</option>
          ))}
        </Select>
        <Select icon={<BsFlagFill />}
          className="w-[48%] md:w-[49%] lg:w-[30%]"
          name={`${delegateValue}country`}
        >
          <option value="">Nationality</option>
          {COUNTRIES.map((c, index) => (
            <option key={index} value={c}>{c}</option>
          ))}
        </Select>
        <TextField
          icon={<BsFillTelephoneFill />}
          type="tel"
          placeholder="Contact No.1"
          className="w-[48%] md:w-[49%] lg:w-[35%]"
          name={`${delegateValue}phone1`}
        />
        <TextField
          icon={<BsFillTelephoneFill />}
          type="tel"
          placeholder="Contact No.2"
          className="w-[48%] md:w-[49%] lg:w-[35%]"
          name={`${delegateValue}phone2`}
        />
        <Select icon={<BsCalendar2Day />}
          name={`${delegateValue}age`}
          className="w-[30%] lg:w-[20%]">
          <option value="">Age</option>
          {AGE.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </Select>
        <TextField
          icon={<FaGraduationCap />}
          placeholder="Course"
          type="text"
          className="w-[65%] md:w-[68%] lg:w-[30%]"
          name={`${delegateValue}course`}
        />
        <TextField
          icon={<LiaUniversitySolid />}
          placeholder="College"
          type="text"
          className="w-[71%] md:w-[73%] lg:w-[50%]"
          name={`${delegateValue}college`}
        />
        <Select icon={<BiSolidBook />}
          name={`${delegateValue}year`}
          className="w-[25%] lg:w-[10%]">
          <option value="">Year</option>
          {YEAR.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </Select>
        <TextAreaField
          icon={<Image
            src="/speak.png"
            alt="experience"
            width={30}
            height={30}
            className="w-4 h-3.5"
          />}
          placeholder="Previous Experience"
          className="w-full lg:w-[46%] h-[75px]"
          name={`${delegateValue}prevExp`}
        />
        <TextAreaField
          icon={<BiSolidTrophy />}
          placeholder="Awards"
          className="w-full lg:w-[46%] h-[75px]"
          name={`${delegateValue}awards`}
        />
      </div>
    </div>
  )
};

export default Delegate;
