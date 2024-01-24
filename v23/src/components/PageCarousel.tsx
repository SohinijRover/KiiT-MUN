'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const PageCarousel = () => {

	const carouselData = [
		{
			title: 'Satyajeet Das',
			description: "Serving as Deputy Secretary General for this year's event is a thrilling experience, and I am looking forward to seeing the transforming effects that KIIT International MUN 2023 will have on each participant. With its expansive scale and wide-ranging scope, this year's KIIT MUN holds the potential to profoundly transform the lives of all participants, offering an event of extraordinary magnitude and significance.",
			position: 'Deputy Secretary General',
			image: 'satyajeet.png',
			id: 1
		},
		{
			title: 'Ayush Kumar Srivastav',
			description: "Model United Nations has always held a special place in my heart and ever since I enrolled at KIIT, the thought of being a part of KIITMUN filled me with excitement and energy. From being a delegate to now hosting a conference, it has been an amazing journey and I sincerely hope that all participants of KIIT MUN 2023 will have as wonderful and enriching a learning experience as I have had throughout.",
			position: 'Director General',
			image: 'ayush1.png',
			id: 2
		},
		{
			title: 'Shubhadittya Roy',
			description: "KIIT International Model United Nations has always been a conference par excellence that is awaited all year long. From delegating as a fresher to serving the conference as a part of the Core Secretariat, it has been a literal embodiment of life coming to a full circle. I hope this edition of KIIT MUN beckons MUN enthusiasts from all over the globe and succeeds in adding a page to the golden book of diplomacy and dialogue.",
			position: 'Deputy Director General',
			image: 'shubh1.png',
			id: 3
		},
		{
			title: 'Shivram Krishna',
			description: "KIITMUN stands tall as one of Asia's most prominent Model United Nations conferences. Since its inception in 2013, it has continually evolved and grown. This conference has been a catalyst for countless passionate and ambitious individuals, and I sincerely hope that in this edition, we can extend our reach to more young minds, ensuring a profoundly meaningful experience for all.",
			position: "Charge D' Affairs",
			image: 'shivram1.png',
			id: 4
		},
		{
			title: 'Kshitij Singh',
			description: "As the Secretary General of KIIT MUN 2023, I am honoured to lead the Secretariat and participate in this prestigious conference. Throughout my years of involvement with Model United Nations, I have seen the conference and the passion of the participants grow exponentially, and the collaborative effort to organize KIIT International MUN has honed my organizational skills, which will carry over into the real world. It is an honour to work alongside passionate individuals who share a common vision of creating a transformative experience for participants.",
			position: 'Secretary General',
			image: 'kshitij.png',
			id: 5
		}

	]

	return (
		<div className='bg-cover bg-carouselBackground'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='uppercase text-transparent bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark py-12 text-center font-bold text-xl lg:text-2xl'>
					MESSAGE FROM OUR SECRETARY GENERAL
				</h2>
				<div className="flex flex-col mx-8 md:mx-12 lg:mx-16 items-center gap-2 md:gap-6 ">
					<div className='grow-0 shrink-0 basis-2/5 flex flex-col justify-center items-center'>
						<Image src={`/carousel/kshitij.png`} width={300} height={300} alt='carousel image' className={'w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]'} />
						<h2 className='text-transparent ml-2 bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark py-4 text-center font-bold text-xl lg:text-2xl'>
							Kshitij Singh,
							<br />
							Secretary-General,
							<br />
							KIIT International MUN 2023
						</h2>
					</div>
					<div className='w-full'>
						<p className='text-carouselTextDark text-sm lg:text-base text-justify'>
							<b>Respected faculty members, delegates, and my Secretariat,</b>
							<br />
							As Chinese philosopher Lao Tzu once said, &apos;The journey of a thousand miles begins with a single step&apos;. At KIIT International Model United Nations, we dare to embrace the steps that drive change. It brings me great joy to extend an invitation to the esteemed annual conference, representing our distinguished faculty and the dedicated Secretariat of Kalinga Institute of Industrial Technology. Building upon the triumphs of past editions, this year&apos;s KIIT International MUN promises an extraordinary journey, merging innovation and tradition to foster a transformative platform for global dialogue and collaboration.
							<br />
							In today&apos;s society, we face new challenges in the aftermath of the global pandemic. Conflict, social unrest, and human rights violations continue to disrupt the world. During these trying times, it is crucial to maintain a positive outlook and work towards safeguarding global peace and unity. Our secretariat is wholeheartedly dedicated to the KIIT International Model United Nations, motivated by the indomitable human spirit that transcends all obstacles. By advocating for peace and cooperative problem-solving, we aim to inspire millions worldwide to embrace goodwill and harmony.
							<br />
							The United Nations tackles global responsibilities for health, peace, security, and economic recovery. It promotes unity and cooperation to address civil unrest and challenges impacting humanity. Diplomatic dialogue, facilitated by world leaders, combats issues and upholds core principles of international cooperation. As the Secretary General of this edition of the KIIT International Model United Nations, I take great pride in leading the conference, fully dedicated to upholding the principles embodied by the United Nations. The Secretariat firmly supports every delegate and anyone who shares our vision and goal of fostering a united and harmonious world filled with hope and optimism. We eagerly anticipate your ideas that can make a meaningful impact and offer solutions to address the challenges of our time, paving the way for a fair, sustainable, and resilient future.
							<br />
							KIIT International Model United Nations is committed to upholding its reputation and legacy. Our utmost desire is for every delegate to embark upon an extraordinary journey, one that leaves an indelible mark in their minds and forever resides within the treasury of their cherished memories. Alongside acquiring valuable principles and honing skills, we aim for this experience to empower individuals to make a meaningful impact in the world.
							<br />
							As responsible global citizens, it is our duty to strive for excellence and personal growth. I extend my sincere regards and best wishes for the upcoming experience that awaits you. May your valuable participation and support in this edition of KIIT International MUN create memories worth cherishing.
						</p>
					</div>
				</div>

				<Image src="/carousel/divider.png" className='mx-auto' width={400} height={100} alt="divider" />
				<div>
					<h2 className='uppercase text-center text-transparent mx-auto bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark font-bold text-2xl lg:text-3xl -mt-16'>
						The KIIT MUN Insignia
					</h2>
				</div>
			</div>

			<div className='h-[800px] min-[500px]:h-[620px] sm:h-[600px] md:h-[430px] lg:h-[400px] max-w-7xl mx-auto'>
				<Carousel className='h-full overflow-y-hidden'>
					{carouselData.map(n => <div className='flex overflow-y-hidden h-full w-full items-center justify-center' key={n.id}>
						<div className='h-full w-full md:mx-24 mx-12'>
							<h2 className='uppercase text-transparent bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark mt-6 lg:mt-12 font-bold text-xl lg:text-2xl'>
								{n.position}
							</h2>
							<div className='flex flex-col md:flex-row h-full justify-between  items-center'>
								<div className='h-full order-last md:order-none'>
									<div className='mt-4 mx-6 lg:mt-8 text-carouselText text-center md:text-left'>
										<h2 className='capitalize font-semibold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-carouselTextDark to-carouselTextLight'>
											{n.title}
										</h2>
										<p className='text-carouselTextDark text-sm lg:text-base pr-4 pt-2'>{n.description}</p>
									</div>
								</div>
								<Image src={`/carousel/${n.image}`} width={300} height={300} alt='carousel image' className={'w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] md:-mt-32'} />
							</div>
						</div>
					</div>
					)}
				</Carousel>
			</div>
		</div>
	)
}

export default PageCarousel
