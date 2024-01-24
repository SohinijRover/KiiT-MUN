'use client'

import DepartmentSecContainer from "@/components/department/DepartmentSecContainer";
import SecContainer from "@/components/department/SecContainer";
import React, { useState } from "react";
import Image from "next/image";
import { academics } from "./Academics";
import { CorporateRelations } from "./CorporateRelations";
import { broadcasting } from "./Broadcasting";
import {DelAffairs} from "@/app/department/DelAffairs";
import {Design} from "@/app/department/Design";
import {DigiMakreting} from "@/app/department/DigiMarketing";
import {Drafting} from "@/app/department/Drafting";
import {Hospitality} from "@/app/department/Hospitality";
import {Intoutreach} from "@/app/department/Intoutreach";
import {logistics} from "@/app/department/Logistics";
import {OfflineMaketing} from "@/app/department/OfflineMaketing";
import {Operations} from "@/app/department/Operations";
import {Publicrelation} from "@/app/department/Publicrelation"
import {transport} from "@/app/department/transport";
import {webtech} from "@/app/department/webtech";
import Navbar from "@/components/Navbar";

const teams = [
  { label: 'Team 1', value: 'team1' },
  { label: 'Team 2', value: 'team2' },
  { label: 'Team 3', value: 'team3' },
  { label: 'Team 4', value: 'team4' },
  { label: 'Team 5', value: 'team5' },
  { label: 'Team 6', value: 'team6' },
  { label: 'Team 7', value: 'team7' },
  { label: 'Team 8', value: 'team8' },
  { label: 'Team 9', value: 'team9' },
  { label: 'Team 10', value: 'team10' },
  { label: 'Team 11', value: 'team11' },
  { label: 'Team 12', value: 'team12' },
  { label: 'Team 13', value: 'team13' },
  { label: 'Team 14', value: 'team14' },
  { label: 'Team 15', value: 'team15' },
];

type teamType = {
  team1: boolean;
  team2: boolean;
  team3: boolean;
  team4: boolean;
  team5: boolean;
  team6: boolean;
  team7: boolean;
  team8: boolean;
  team9: boolean;
  team10: boolean;
  team11: boolean;
  team12: boolean;
  team13: boolean;
  team14: boolean;
  team15: boolean;
}

const Department = () => {
  const [selectTeam, setSelectTeam] = useState<teamType>({
    team1: true,
    team2: false,
    team3: false,
    team4: false,
    team5: false,
    team6: false,
    team7: false,
    team8: false,
    team9: false,
    team10: false,
    team11: false,
    team12: false,
    team13: false,
    team14: false,
    team15: false,
  })
  console.log('select', selectTeam)
  const hanldeSelectTeam = (newTeam: keyof teamType) => {
    const newSelectTeam = {
      team1: false,
      team2: false,
      team3: false,
      team4: false,
      team5: false,
      team6: false,
      team7: false,
      team8: false,
      team9: false,
      team10: false,
      team11: false,
      team12: false,
      team13: false,
      team14: false,
      team15: false,
    }
    newSelectTeam[newTeam] = true;

    setSelectTeam(newSelectTeam)
  }
  return (
  <>
    <Navbar/>
  <main className="bg-EventBackground min-h-screen">
    <Image
      src="/hero/GroupTop.png" 
      alt="hero vector"
      width={1920}
      height={400}
      className="absolute"
    ></Image>
    <div className="flex flex-col gap-12 w-[80vw] max-w-[1240px] mx-auto py-24">
      <div className="flex gap-5 justify-center flex-wrap mx-4 ">
        <DepartmentSecContainer 
          imgSource="https://i.ibb.co/SXL1QYv/SHUBHADITTYA-ROY.webp"
          name="Shubhadittya Roy"
          position="DEPUTY DIRECTOR GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://i.ibb.co/0GBzXcb/AYUSH-KUMAR-SRIVASTAV.webp"
          name="Ayush  K Srivastav"
          position="DIRECTOR GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://i.ibb.co/nfBw5cF/38373-A-375-KSHITIJ-SINGH-1.webp"
          name="Kshitij Singh"
          position="SECRETARY-GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://i.ibb.co/5FHh65c/SATYAJEET-DAS.webp"
          name="Satyajeet Das"
          position="DEPUTY SECRETARY GENERAL"
        />
        <DepartmentSecContainer 
          imgSource="https://i.ibb.co/sm5ZcBW/SHIVRAM-KRISHNA.webp"
          name="Shivram Krishna"
          position="CHARGE D, AFFAIRS"
        />
      </div>
      <div className="flex md:justify-between gap-8 flex-wrap justify-center items-center mx-8">
        <h1 className="font-semibold text-2xl">MEET THE SECRETARIAT</h1>
        <div className="w-[80vw] md:w-[30vw] min-w-[250px] lg:max-w-[400px]">
          <select
            id="team"
            name="team"
            className="mt-1 block px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 text-gray-500 w-full"
            onChange={(e) => hanldeSelectTeam(e.target.value as keyof teamType)}
            value={Object.keys(selectTeam).find((key) => selectTeam[key as keyof teamType])}
          >
            <option value="" disabled selected>
              Select a team
            </option>
              <option value="team1">
                Academics
              </option>
            <option value ="team2">
              Broadcasting
            </option>
              <option value="team3">
                Corporate Relations
              </option>
              <option value="team4">
                Delegate Affairs
              </option>
              <option value="team5">
                Design
              </option>
              <option value="team6">
                Digital Marketing
              </option>
              <option value="team7">
                Drafting
              </option>
            <option value="team8">
              Hospitality
            </option>
            <option value="team9">
              International Outreach
            </option>
            <option value="team10">
              Logistics
            </option>
            <option value="team11">
              Offline Marketing
            </option>
            <option value="team12">
              Operations
            </option>
            <option value="team13">
              Public Relations
            </option>
            <option value="team14">
              Transport
            </option>
            <option value="team15">
              Web & App Technology
            </option>

          </select>
        </div>
      </div>
    <div className="flex gap-4 justify-center flex-wrap w-full">
      {selectTeam.team1 && (
        <SecContainer teamMembers={academics}/>
      )}
      {selectTeam.team2 && (
        <SecContainer teamMembers={broadcasting}/>
      )}
      {selectTeam.team3 && (
        <SecContainer teamMembers={CorporateRelations}/>
      )}
      {selectTeam.team4 && (
          <SecContainer teamMembers={DelAffairs}/>
      )}
      {selectTeam.team5 && (
          <SecContainer teamMembers={Design}/>
      )}
      {selectTeam.team6 && (
          <SecContainer teamMembers={DigiMakreting}/>
      )}
      {selectTeam.team7 && (
          <SecContainer teamMembers={Drafting}/>
      )}
      {selectTeam.team8 && (
          <SecContainer teamMembers={Hospitality}/>
      )}
      {selectTeam.team9 && (
          <SecContainer teamMembers={Intoutreach}/>
      )}
      {selectTeam.team10 && (
          <SecContainer teamMembers={logistics}/>
      )}
      {selectTeam.team11 && (
          <SecContainer teamMembers={OfflineMaketing}/>
      )}
      {selectTeam.team12 && (
          <SecContainer teamMembers={Operations}/>
      )}
      {selectTeam.team13 && (
          <SecContainer teamMembers={Publicrelation}/>
      )}
      {selectTeam.team14 && (
          <SecContainer teamMembers={transport}/>
      )}
      {selectTeam.team15 && (
          <SecContainer teamMembers={webtech}/>
      )}
    </div>
    </div>
  </main>
  </>
  )
};

export default Department ;
