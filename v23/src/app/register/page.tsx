'use client'
import React, {  useEffect, useState } from "react";
import { initialValuesDoubleDelegate, initialValuesSingleDelegate } from "@/utils";
import Image from "next/image";
import Delegate from "@/components/register/Delegate";
import Committee from "@/components/register/Committee";
import Navbar from "@/components/Navbar";
import { Form, Formik } from "formik";
import { formValidationDoubleDelegate, formValidationSingleDelegate } from "./schema";
import backendService from '@/service'
import { useRouter } from "next/navigation";
import { DelegateNum } from "@/components/register/Committee";
import IssueModal from "@/components/IssueModal";

type headingProps = {
    delegateStatus: boolean;
    handleDelegateStatus: () => void;
    load: boolean
}

const Heading = ({ delegateStatus, load, handleDelegateStatus }: headingProps) => {
    return (
        <div className={`${delegateStatus ? "mb-10" : "mb-0"}`}>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">REGISTRATION FORM</h1>
            <div className="flex justify-center mt-2">
                <div className="flex gap-4 bg-buttonBackground text-white px-4 py-1 relative font-medium rounded-full text-sm">
                    {/* <div
                        className={`absolute w-1/2 h-full px-1 py-1 transition-transform duration-200 rounded-full bg-buttonBackground inset-0 justify-center items-center flex
                        ${!delegateStatus ? "translate-x-[100%]" : ""} 
                        `}>
                        {!delegateStatus ? "" : "SINGLE DELEGATE"}
                    </div>
                    <button disabled={load} className="cursor-pointer text-black" onClick={handleDelegateStatus} >
                        SINGLE DELEGATE
                    </button>
                    <button
                        className="cursor-pointer text-black"
                        onClick={handleDelegateStatus}
                        disabled={load}
                    >
                        DOUBLE DELEGATE
                    </button> */}
                         <div className="cursor-pointer bg-buttonBackground h-full w-full  text-white" onClick={handleDelegateStatus} >
                        SINGLE DELEGATE
                    </div>
                </div>
            </div>
        </div>
    )
}

const SubmitButton = ({ load }: { load: boolean }) => {
    return (
        <div className="flex justify-center">  <button type="submit" disabled={load} className={`w-36 transition-all duration-300 hover:translate-y-2 py-1 font-bold text-lg border-none outline-none  ${load ? 'opacity-50' : ''} bg-buttonBackground rounded-full`}>{load ? "loading" : 'Submit'}</button></div>
    )
}

const Register = () => {
    const [singleDelegate, setSingleDelegate] = useState(true)
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(false)
    const handleSingleDelegate = () => {
        setSingleDelegate(singleDelegate);
        setError(null)
    };

    
	let [isOpenModal, setIsOpenModal] = useState(false)

    function openModal(){
		setIsOpenModal(true)
    }
	function closeModal() {
		setIsOpenModal(false)
	}
 //line 77-80 triggers rerender if someone tries to go to /register uncomment when active
    const router = useRouter()
 
   
    useEffect(() => {
        router.push('/thankyou')
    },  )

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="bg-RegisterationBG w-screen relative pt-[100px] md:pt-[120px] pb-[50px] md:pb-[100px] overflow-x-hidden">
                <Image
                    src="/hero/GroupTop.png"
                    alt="registration top vector"
                    width={1920}
                    height={1080}
                    className="absolute top-0 w-screen"
                ></Image>
                <div className="w-[95vw] py-4 rounded-xl shadow-2xl mx-auto md:py-[4%] lg:pb-8 xl:px-8 max-w-[1440px] overflow-x-hidden">
                    <Heading load={load} delegateStatus={singleDelegate} handleDelegateStatus={handleSingleDelegate} />
                    {singleDelegate ? (
                        <Formik initialValues={initialValuesSingleDelegate}
                            validationSchema={formValidationSingleDelegate}
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                setLoad(true)
                                const data = await backendService.singleDelegatePost(values)
                                if (data.error) {
                                    setLoad(false)
                                    return setError(data.error)
                                }
                                return router.push('/thankyou')
                            }}
                        >
                            <Form>
                                <Delegate />
                                <DelegateNum name="Committee Details" />
                                <Committee delegate="single"/>
                                {error && <div className="flex justify-center text-center my-4 text-red-500">{error} Please try Again.</div>}
                                <div className="flex justify-center gap-4">
                                <SubmitButton load={load} />
                                <button type="button" disabled={load} onClick={openModal} className={`transition-all duration-300 hover:translate-y-2 py-1 font-bold text-lg border-none outline-none px-4 ${load ? 'opacity-50' : ''} bg-buttonBackground rounded-full`}>Had an issue?</button>
                                </div>
                            </Form>
                        </Formik>
                    ) : (
                        <Formik initialValues={initialValuesDoubleDelegate}
                            validationSchema={formValidationDoubleDelegate}
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                setLoad(true)
                                const data = await backendService.doubleDelegatePost(values)
                                if (data.error) {
                                    setLoad(false)
                                    return setError(data.error)
                                }
                                setLoad(false)
                                return router.push('/thankyou')
                            }
                            }
                        >
                            <Form>
                                <DelegateNum name="Delegate 1" />
                                <Delegate delegate="s_" />
                                <DelegateNum name="Delegate 2" />
                                <Delegate delegate="d_" />
                                <DelegateNum name="Committee Details" />
                                <Committee delegate="double"/>
                                {error && <div className="flex justify-center text-center my-4 text-red-500">{error} Please try Again.</div>}
                                <div className="flex justify-center gap-4">
                                <SubmitButton load={load} />
                                <button type="button" disabled={load} onClick={openModal} className={`transition-all duration-300 hover:translate-y-2 py-1 font-bold text-lg border-none outline-none px-4 ${load ? 'opacity-50' : ''} bg-buttonBackground rounded-full`}>Had an issue?</button>
                                </div>
                            </Form>
                        </Formik>
                    )
                    }
                </div>
            </div>
        </div>
    )
};

export default Register;
