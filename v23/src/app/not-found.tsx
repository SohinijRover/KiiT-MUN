import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

export default function NotFound() {
  return (
    <div className="bg-[url('https://i.imgur.com/zksQZhn.png')] w-full h-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center relative justify-center min-h-screen">
        <Link href='/'><Image src={logo} alt="MUN LOGO" className={'w-[60px] h-[60px] lg:h-[90px] lg:w-[90px]'} /></Link>
        <h2 className="text-3xl text-center absolute">Page Not Found</h2>
        <img src="/Error/plugs_1.png" alt="Image" className="mt-8" />
        <p className='w-84 pt-12 text-center mx-4'>We&apos;re sorry, the page you requested could not be found Please go back to the homepage</p>
        <Link href='/'><button className="rounded-full border-none bg-buttonBackground mt-12 px-8 py-3 outline-none font-bold">
          RETURN TO HOMEPAGE
        </button></Link>
      </div>
    </div>
  )
}

