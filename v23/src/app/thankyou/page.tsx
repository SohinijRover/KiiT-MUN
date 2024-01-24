import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
 
const ThankyouPage = () => {
  return (
    <>
    <Navbar />
    <div className="h-screen w-screen bg-EventBackground font-sans">
        <Image 
            src="/hero/GroupTop.png" 
            alt="thankyou hero"
            width={1920}
            height={1080}
        ></Image>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none" className="w-24 h-24 md:w-32 md:h-32">
                <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_496_3228)"/>
                <path d="M55.3786 83.4065L38.7493 66.7772C37.7502 65.7782 37.7502 64.1583 38.7493 63.1591L42.3673 59.5411C43.3663 58.5419 44.9863 58.5419 45.9853 59.5411L57.1876 70.7433L81.1817 46.7493C82.1808 45.7502 83.8007 45.7502 84.7998 46.7493L88.4178 50.3674C89.4168 51.3664 89.4168 52.9863 88.4178 53.9854L58.9967 83.4066C57.9975 84.4057 56.3777 84.4057 55.3786 83.4065Z" fill="#10373C"/>
                <defs>
                    <linearGradient id="paint0_linear_496_3228" x1="64" y1="-5.5" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F4F4F4"/>
                    <stop offset="0.46706" stop-color="#E3E2E2"/>
                    <stop offset="1" stop-color="#F5F4F4"/>
                    </linearGradient>
                </defs>
            </svg>
            <h1 className="text-2xl text-center md:text-3xl font-bold mt-4">Thank You for your overwhelming response!</h1>
            <h2 className="text-medium text-center mt-4 text-2xl">See you at the conference!</h2>
            <div className="mt-10 font-medium">
                Go to {" "}
                <Link href="/">
                    <span className="border-b cursor-pointer">Home</span>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
};
 
export default ThankyouPage;