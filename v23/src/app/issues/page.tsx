import IssueModal from '@/components/IssueModal'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
	return (

		<div className="bg-[url('https://i.imgur.com/zksQZhn.png')] w-full h-full bg-no-repeat bg-cover">
			<Navbar />
			<div className="flex flex-col items-center justify-center min-h-screen">
				<IssueModal />
			</div>
		</div>
	)
}

export default page