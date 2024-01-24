"use client"

import { useState, useEffect } from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const GALLERY = [
    {
        url: "/about/hero.png"
    },
    {
        url: "/about/hero2.png"
    },
    {
        url: "/about/hero3.png"
    },
    {
        url: "/about/hero4.png"
    },
]


const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY.length);
    }, 5000); // Set the desired interval time (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
    <Navbar/>
    <div className=" w-screen bg-HeroBackground max-w-full my-custom-text">
        <div className="mx-auto w-full overflow-x-hidden">
            <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-screen 4xl:h-[80vh] 4xl:max-h-[900px] overflow-hidden max-w-[1920px] mx-auto ">
                {/* top gradient*/}
                <div className="absolute top-[-5%] w-full h-[70%] opacity-70 bg-gradient-to-b z-10 from-[#0e213f] to-transparent blur-3xl"></div>

                <div className="absolute w-full bottom-[-10%] overflow-hidden h-[40%] z-20">
                    <Image 
                        src="https://i.imgur.com/HQ8xVDI.png" 
                        alt="About Hero img"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="w-full h-full hidden md:block"
                        loading="lazy"
                    ></Image>
                </div>
                {/* bottom gradient*/}
                <div className="absolute bottom-[-10%] w-full h-[80%] bg-gradient-to-t z-10 from-[#001212] to-transparent blur-xl "></div>
                <div className="absolute bottom-[-10%] w-full h-[40%] bg-gradient-to-t z-10 from-[#001212] to-transparent blur-xl "></div>

                {/* right gradient*/}
                <div className="absolute right-0 -top-2 w-[5%] h-full bg-gradient-to-l z-10 from-[#001212] to-transparent blur-2xl "></div>
                <div className="absolute right-0 w-[5%] -top-2 h-full bg-gradient-to-l z-10 from-[#001212] to-transparent blur-3xl"></div>

                {/* left gradient*/}
                <div className="absolute -left-2 -top-2 w-[5%] h-[111%] bg-gradient-to-r z-10 from-[#001212] to-transparent blur-lg "></div>

                {GALLERY.map((image, index) => (
                    <Image 
                        key={index}
                        src={image.url}
                        alt={image.url}
                        width={1920}
                        height={1080}
                        quality={100}
                        className={`animate-fade-in absolute inset-0 z-5 translatey-[30px] opacity-1 ease-out w-full rounded-lg object-cover transform
                            ${currentIndex === 2 ? "animate-from-bottom":""}
                            ${index === currentIndex ? "block" : "hidden"}
                        `}
                    ></Image>
                ))}
                <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-bold text-[9.5vw] 2xl:text-[150px]">About Us</h1>
            </div>
            <div className="bg-[#D7E1E3] w-full py-8 md:py-[60px]">
                <h1 className="bg-textBG text-transparent mb-6 bg-clip-text text-2xl lg:text-3xl  text-center font-bold 3xl:text-[2vw] 4xl:text-3xl">
                ABOUT KIIT International Model United Nations</h1>
                <p className="text-[#051418] max-w-[1920px] w-[90%] lg:w-[80%] mx-auto lg:text-lg mt-4 pb-12 3xl:text-[1.3vw] 3xl:leading-[2vw] 4xl:text-xl " 
                    style={{
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify', 
                    }}
                >
                    KIIT International Model United Nations (MUN) stands as one of the most prominent United Nations simulations on a global scale, with coordination led by the Secretariat, the dedicated student body of the Kalinga Institute of Industrial Technology. Since its advent in 2013, the conference has continuously raised the bar, setting new standards with each subsequent edition. In 2016, KIIT MUN garnered international recognition as the largest MUN ever hosted, boasting an impressive participation of around 2,500 delegates.
                    <br /><br />
                    The conference offers a remarkable opportunity to engage with delegates from diverse backgrounds, facilitating the acquisition of invaluable diplomatic skills and a comprehensive understanding of governance and policies. Guided by a carefully selected group of highly experienced and knowledgeable Executive Board Members, this three-day conference features interactive sessions infused with profound research and diplomatic perspectives that ignite intellectual discourse and critical thinking. Cultural shows and networking dinners serve as the vibrant highlights of the KIIT International MUN, fostering connections among like-minded intellectuals.
                    <br /><br />
                    In the wake of the unprecedented pandemic in 2020, the Secretariat of KIIT International MUN displayed unwavering determination and adaptability. Undeterred by the circumstances, the conference transitioned to the virtual realm, utilizing platforms like Zoom for two consecutive editions. In 2021, KIIT International eMUN etched its name in history, achieving the remarkable distinction of being the largest virtual MUN conference in Asia and possibly the globe. Despite the prevailing speculations and doubts regarding the feasibility of hosting the conference in offline mode post-pandemic as the world recovered, in 2022, the 10th edition of KIIT International MUN has defied all uncertainties to stage success with around 1200 delegates across fifteen committees. Organising an event of this magnitude posed immense challenges, and yet the Secretariat&apos;s unwavering dedication and commitment ensured that the conference&apos;s legacy remained intact. Through fruitful collaborations with international MUNs such as PHIMUN, MASMUN, HALMUN, and esteemed organizations and NGOs like Child Help Foundation, ADiBha She Vision, Pinkishe Foundation, KIIT International MUN has deepened its roots globally, spreading the vital message of international cooperation and world peace.

                </p>
            </div>
            <div className="bg-HeroBackground w-full relative">
                <Image
                    src="/hero/GroupTop.png" 
                    alt="KIIT logo"
                    width={1920}
                    height={1080}
                    className="absolute w-full top-0"
                ></Image>
                {/* <Image
                    src="https://i.imgur.com/HQ8xVDI.png" 
                    alt="KIIT logo"
                    width={1920}
                    height={1080}
                    className="absolute w-full bottom-0"
                ></Image> */}
                <div className="flex flex-col md:flex-row w-[95%] lg:w-[80%] mx-auto pt-12 gap-12 md:gap-12 max-w-[1920px] lg:gap-16 pb-[70px] 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
                    <div className="w-full ">
                        <h1 className="text-center text-2xl font-bold">ABOUT KIIT</h1> 
                        <div className="flex justify-center">
                            <Image
                                src="/about/kiitLogo.png" 
                                alt="KIIT logo"
                                width={300}
                                height={300}
                                className="w-[100px] h-[75px] mt-8 mb-4 flex-shrink-0"
                            ></Image>
                        </div>
                        <p 
                            style={{ 
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-line',
                                textAlign: 'justify', 
                            }}
                        >
                            Kalinga Institute of Industrial Technology (KIIT), a household name in the education sector, has become a sought-after destination in India for professional studies. It is admired all over for the quality of its academic courses, its community outreach work and as a university of compassion and humanitarianism. It has become a case study because no other educational institution in India has grown in its scope and scale as much as KIIT has in a short span of 25 years. Its incredible transformation is truly a journey from Soil to Silver. KIIT started in 1992-93 as an Industrial Training Institution. However, 1997 is considered the base year for the University as undergraduate and postgraduate courses in Engineering, Management and Computer Applications were added. In 2007, many new schools were added to its umbrella - School of Law, Biotechnology, Medical Sciences, DIntental Sciences, Nursing, Mass Communication, Film and Media, Fashion and KIIT International School. Since then, there has been no looking back! Today, KIIT offers professional education to around 40,000 students from across India. <br /><br/>This includes 2000 international students from 65 countries. The alumni of KIIT, over a lakh of them, have made their mark in their respective careers in academics, corporate organisations, civil services and enterprise. One would find it difficult to imagine that such a celebrated institution with a global reputation was established by an unassuming humble being, Dr Achyuta Samanta, the Founder of KIIT and KISS, who started the institute with all of Rs 5000 as the initial investment. He had big dreams and a passion to make a difference. Dr Samanta started KIIT in two rented rooms with 12 students and 2 staff. The modest institution has now grown to incomprehensible propositions and is spread over a vast 25-square-kilometre academic township. Its 25 lush green campuses employ over 2500 eminent faculty and researchers and 15000 staff. KIIT and KISS together is a family of over a lakh people. The campus houses a 2600-bedded super speciality hospital, KIMS, a multi-storey central library, a central research facility, a 22-storey research and innovation wing, auditoriums - the largest one with 5000 seating capacity, 16 sports complexes, many international standard stadiums covering all sports, 30 food courts, and a rose garden.<br/><br/> The institution takes pride in being the greenest campus in India. It has received all accreditations and affiliations from prestigious national and international bodies such as the Accreditation Board for Engineering and Technology (ABET), USA and the Institution of Engineering and Technology, (IET), UK because of its quality research, innovation, and publications and citations. KIIT has had an excellent placement record since its inception owing to its quality teaching and learning process, and the brand value that it carries. KIIT is ranked in the cohort of 601-800 in the Times Higher Education World University Ranking. Its Computer Science Engineering ranks in the cohort of 301-400 and its overall Engineering ranking is 401-500 in the world.  KIIT has been accredited with an A++ grade by the National Assessment and Accreditation Council (NAAC) with an all-India 20th rank by the National Institution of Ranking Framework, NIRF, Ministry of Education. It has also been the top university for innovation among private institutions for two consecutive years (2020, 2021) according to AICTE, Government of India. KIIT has made colossal contributions to Sports. Currently, 12 Olympians pursue their education at KIIT. The University has been conferred the Sportstar Award and FICCI India Sports Award for the promotion of sports. KIIT and KISS are the nodal centres for the FIFA Football For Schools Programme in Asia. KIIT has been chosen for the Rashtriya Khel Protsahan Puruskar 2022 for encouraging sports through Corporate Social Responsibility. Besides its immense contribution to the development of the state and the city, KIIT has also promoted local art, culture, sculpture, rural development, literature and spiritualism. All the achievements of KIIT have been possible because of its founder - Dr Achyuta Samanta - lovingly called Samanta Sir - the epitome of principles, discipline, hard work, and selfless service. It truly is an inspiring story of a humble man steering two institutions to glory despite all the hardships and struggles.

                        </p>
                    </div> 
                    <div className="w-full">
                        <h1 className="text-center text-2xl font-bold">ABOUT KISS</h1> 
                        <div className="flex justify-center">
                            <Image
                                src="/about/kissLogo.png" 
                                alt="KIIT logo"
                                width={300}
                                height={300}
                                className="w-[93px] h-[85px] mt-6 mb-3.5"
                            ></Image>
                        </div>
                        <p 
                        style={{
                            wordWrap: 'break-word',
                            whiteSpace: 'pre-line',
                            textAlign: 'justify', 
                        }}
                        >
                            9% of India&apos;s population is tribal. Despite the constitutional promise of social justice, the tribal population in India lives in deplorable conditions in the dense forests and remote hinterlands. In Odisha, over 22.8 percent of the population is tribal and live in utmost poverty with low literacy rates, rampant child marriage and superstition, and no access to school and healthcare facilities. Poor infrastructure, teacher absenteeism, lack of toilets, and pressure to handle siblings bedevil the education system in tribal areas in India and Odisha. In such a scenario, Dr Achyuta Samanta came up with a revolutionary initiative with his strong passion & commitment, called Kalinga Institute of Social Sciences (KISS), aiming to empower tribal communities through education. Right from his poverty-stricken childhood to his struggle-filled youth, he has worked towards arresting poverty & hunger, the two social ills that he faced from the age of five to twenty. When he thought of establishing a self-financing institution, Kalinga Institute of Industrial Technology (KIIT), he also started implementing to bring to fruition his dream, Kalinga Institute of Social Sciences (KISS) to bring a smile on the faces of thousands of indigenous children. In 1992-93, India was just starting to integrate with the global economy and progress in education was missing in Odisha, let alone education for tribal children. It was a grey area where the Government chose not to intervene and private organisations could not muster up the courage to create waves of change.  It was at that time, with limited or no finances, KISS was founded by Dr Achyuta Samanta with a belief that education can empower the people. It was not an easy start and he had to overcome several setbacks.<br/><br/>
                            The first ten years were extremely difficult for him and his team. The common man considered KISS&apos; initiative as an intrusion. However, he continued overcoming all adversities and the rest is history. But his thought process was very clear and based on two important pillars - a) Procedural - Free education from KG to PG and beyond in a fully residential campus b) Substantive - A unique financial model for the sustainable functioning of KlSS, contributed by the stakeholders of KIIT, another institution founded by him KISS started with 125 poor indigenous students in 1992-93 and has now grown in scale and scope, catering to 80,000 indigenous children. Of these, 30,000 students study at the main campus in Bhubaneswar, 40,000 are alumni and 10,000 study at 10 satellite centres of KISS across Odisha.<br/><br/> It has indirectly impacted over eight million tribal children and youth. The students come from 62 different tribal groups within the region, of which 13 are Particularly Vulnerable Tribal Groups (PVTGs). In its course of inception, evolution and existence, KISS has been promoting quality, holistic education, girl child empowerment, vocational and life skill education, healthcare, scientific temper and humanism and sustainable development. It has arrested naxalism, hunger and malnutrition, child labour and trafficking, early girl child marriage and dropout to a large extent. The contribution of KISS in the field of sports is immense. KISS has groomed around 5000 sportspersons who have participated and excelled in prestigious national and international events. Since 2015, KISS has been accorded Special Consultative Status by UN ECOSOC. It is associated with UNDPI and has worked in close collaboration with many agencies of the UN including UN Women, UNFPA, WFP, UNDP, UN Volunteers, UNICEF and other international organisations to implement the common objectives.  KISS proudly adheres to a 3E approach - Educate, Enable, Empower while ensuring that the model prioritises indigenous control of education, to preserve the culture, heritage and traditions of India&apos;s diverse tribal communities and fulfil the Sustainable Development Goals 2030 in its entirety. The institution aims to reach over 2 million directly in the next decade with a dedicated vision of &apos;no child should be deprived of education because of poverty&apos;.

                        </p>
                    </div> 
                </div>
            </div>
            <div className="w-full bg-[#D7E1E3] py-[50px] px-[30px] lg:py-[80px] lg:px-[60px] overflow-hidden">
                <div className="max-w-[1750px] mx-auto ">
                    <h1 className="bg-textBG text-transparent bg-clip-text text-2xl lg:text-3xl text-center font-bold">ABOUT FOUNDER</h1>
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
                        <Image 
                        src="/about/founder.png"
                        alt="founder"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-[350px] h-[450px] mt-8 md:mt-0 2xl:w-[30vw] 2xl:h-[70vh] 4xl:w-[20vw] 4xl:max-w-[700px] 4xl:h-[50vh] 4xl:max-h-[700px] md:w-[40vw] md:h-[50vh] lg:w-[40vw] lg:h-[50vh]"
                        ></Image>
                        <div>
                            <p 
                                style={{ 
                                    wordWrap: 'break-word',
                                    whiteSpace: 'pre-line',
                                    textAlign: 'justify', 
                                }} 
                                className="md:w-[95%] text-[#020B10] max-w-[1920px] mx-auto lg:text-lg mt-4 3xl:text-[1.3vw] 3xl:leading-[2vw] 4xl:text-xl"
                            >
                                Prof Achyuta Samanta&apos;s life story reads like a powerful saga of grit, determination, and social responsibility. Born and brought up in poverty in a remote village in Odisha, he was dealt a cruel blow at the tender age of four when he lost his father, after which his life became a struggle for food and education for 15 long years. However, he persevered, and at the age of 22, joined teaching. At 25, he embarked on a journey that would change his own life, and the lives of thousands of people. With just Rs 5000 in his pocket, he started KIIT (Kalinga Institute of Industrial Technology) and KISS (Kalinga Institute of Social Sciences) in two rented houses. Today, these institutions are beacons of hope, providing world-class education, decorated with all possible national and international accolades and global reputation. KIIT has become one of the most sought-after universities in India for professional education. It currently has 40,000 students and representation from 65 countries. KISS is a ray of hope for tribals, providing education, healthcare, sports, and vocational training to 80,000 disadvantaged students - all fully free in a residential campus. KISS has a school, a college, and a university - KISS Deemed to be University, which is the first and only university exclusively for tribal scholars providing innovative tribal courses. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-HeroBackground w-full relative">
                <Image
                    src="/hero/GroupTop.png" 
                    alt="KIIT logo"
                    width={1920}
                    height={1080}
                    className="absolute w-full top-0"
                ></Image>
                <div className="w-full h-[250px] overflow-hidden absolute bottom-0">
                    <Image
                        src="https://i.imgur.com/HQ8xVDI.png" 
                        alt="KIIT logo"
                        width={1920}
                        height={1080}
                        className="h-full w-full"
                    ></Image>
                </div>
                <div className="w-[95%] lg:w-[80%] mx-auto max-w-[1920px] pb-12"
                    style={{
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify', 
                    }} 
                >
                    <h1 className="text-2xl lg:text-3xl pt-[50px] text-center font-bold">ABOUT ART OF GIVING</h1>
                    <p className="mt-8 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
                    Art of Giving is all about creating an unconditional and sustainable abundance of love, peace and happiness, and contentment for others through gestures of kindness and generosity. It was founded by Shri Achyuta Samanta on 17 May 2013. The key to peace and happiness lies in unlocking the Art of Giving in each individual. It is a not-for-profit initiative for spreading, supporting, and promoting the practice of the art of giving around the world. <br />
                    VISION: To bring together the sense of peace and happiness among people of all ages, especially children and youth through genuine acts of giving back to society by the practice of empathy and compassion to the distressed without any discrimination.<br />
                    MISSION: To make people aware and spread the philosophy of the Art of Giving across all sections of human society worldwide through activities of sharing love, care, compassion, wisdom, knowledge, skills, and talents. 
                    </p>
                    <h1 className="text-2xl lg:text-3xl pt-[50px] text-center font-bold">ABOUT INCREDIBLE INDIA</h1>
                    <p className="mt-8 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
                    One of the oldest civilizations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity. Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history, and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveler can get the best of both worlds. Head to the mountains, enjoy a beach retreat, or cruise through the golden Thar, India has options galore for all. India is home to the finest architectural heritage, serene ghats, spectacular landscapes, and the largest tiger reserve.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  )
};

export default About;
