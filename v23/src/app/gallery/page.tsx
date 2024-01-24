'use client'


import Footer from '@/components/Footer';
import GalleryNavigation from '@/components/GalleryNavigation';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image'



export type activelevelProps = {
  starNight: boolean;
  delegation: boolean;
  committee: boolean;
  topFive: boolean;
  winning: boolean;
  inaugration: boolean;
};

const Gallery = () => {
  const imageUrls: { [key: string]: string[] } = {

    starNight: [
      "https://i.imgur.com/Mlt4irJm.jpg",
      "https://i.imgur.com/NInuD8xm.jpg",
      "https://i.imgur.com/YkJrPDIm.jpg",
      "https://i.imgur.com/24DLDnem.jpg",
      "https://i.imgur.com/R7mQtMWm.jpg",
      "https://i.imgur.com/0K7PRUEm.jpg",
      "https://i.imgur.com/Xnokqi1m.jpg",
      "https://i.imgur.com/G0UGWRGm.jpg",
      "https://i.imgur.com/mUkf7uZm.jpg",
      "https://i.imgur.com/nC0IBy9m.jpg",
      "https://i.imgur.com/IXRAuxZm.jpg",
      "https://i.imgur.com/xec4qA3m.jpg",
      "https://i.imgur.com/2US1Im9m.jpg",
      "https://i.imgur.com/Q88qqCFm.jpg",
      "https://i.imgur.com/SXws5q7m.jpg",
      "https://i.imgur.com/jf9c05em.jpg",
    ],
    delegation: [
      "https://i.imgur.com/MsntwCHm.jpg",
      "https://i.imgur.com/cjzTRIJm.jpg",
      "https://i.imgur.com/03v9xn9m.jpg",
      "https://i.imgur.com/lZH1Ff0m.jpg",
      "https://i.imgur.com/IcEeB8zm.jpg",
      "https://i.imgur.com/u9tzRREm.jpg",
      "https://i.imgur.com/CY4AZyhm.jpg",
      "https://i.imgur.com/cqgvzNHm.jpg",
      "https://i.imgur.com/CpIgpZam.jpg",
      "https://i.imgur.com/0JgMn4Om.jpg",
      "https://i.imgur.com/Mj5n0Xmm.jpg",
      "https://i.imgur.com/rxttim9m.jpg",
      "https://i.imgur.com/eDGsSG6m.jpg",
      "https://i.imgur.com/Xmwj0gcm.jpg",
      "https://i.imgur.com/zjieypkm.jpg",
      "https://i.imgur.com/TccpIkym.jpg",

    ],
    committee: [
      "https://i.imgur.com/9FrrG4hm.jpg",
      "https://i.imgur.com/5feJGFDm.jpg",
      "https://i.imgur.com/D9bydxrm.jpg",
      "https://i.imgur.com/BibOtBEm.jpg",
      "https://i.imgur.com/VqqCkkvm.jpg",
      "https://i.imgur.com/QrwJq24m.jpg",
      "https://i.imgur.com/rKWnMb1m.jpg",
      "https://i.imgur.com/oRTCQXCm.jpg",
      "https://i.imgur.com/HA0bJQvm.jpg",
      "https://i.imgur.com/4c4Uypfm.jpg",
      "https://i.imgur.com/vFwymT7m.jpg",
      "https://i.imgur.com/YlPfbmlm.jpg",
      "https://i.imgur.com/L3JHTRMm.jpg",
      "https://i.imgur.com/Oh67OBBm.jpg",
      "https://i.imgur.com/rh2C3wwm.jpg",
      "https://i.imgur.com/bM3WUknm.jpg",
    ],

    topFive: [
      "https://i.imgur.com/HgE83eYm.jpg",
      "https://i.imgur.com/xhQNeYfm.jpg",
      "https://i.imgur.com/7uZbfLrm.jpg",
      "https://i.imgur.com/hlwHQnSm.jpg",
      "https://i.imgur.com/Ru4kfQxm.jpg",
      "https://i.imgur.com/TtPXUZxm.jpg",
      "https://i.imgur.com/1U2MT9Ym.jpg",
      "https://i.imgur.com/4J4dyrpm.jpg",
      "https://i.imgur.com/V8AEmwjm.jpg",
      "https://i.imgur.com/iQUiNLmm.jpg",
      "https://i.imgur.com/pGKpPjZm.jpg",
      "https://i.imgur.com/ZocAhbWm.jpg",
      "https://i.imgur.com/Ru4kfQxm.jpg",
      "https://i.imgur.com/TtPXUZxm.jpg",
      "https://i.imgur.com/1U2MT9Ym.jpg",
      "https://i.imgur.com/4J4dyrpm.jpg",
      "https://i.imgur.com/V8AEmwjm.jpg",

    ],
    winning: [
      "https://i.imgur.com/xzEA1X5m.jpg",
      "https://i.imgur.com/TYBzC4vm.jpg",
      "https://i.imgur.com/m6a7X13m.jpg",
      "https://i.imgur.com/QTMBcJYm.jpg",
      "https://i.imgur.com/MAyeZENm.jpg",
      "https://i.imgur.com/oTUOafSm.jpg",
      "https://i.imgur.com/tb3nyi3m.jpg",
      "https://i.imgur.com/YySTNjFm.jpg",
      "https://i.imgur.com/ysTQ0cBm.jpg",
      "https://i.imgur.com/WMVWR8sm.jpg",
      "https://i.imgur.com/2E07ehNm.jpg",
      "https://i.imgur.com/4bhKchFm.jpg",
      "https://i.imgur.com/ueOSW2Lm.jpg",
      "https://i.imgur.com/ysTQ0cBm.jpg",
      "https://i.imgur.com/YySTNjFm.jpg",
      "https://i.imgur.com/tb3nyi3m.jpg",
    ],
    inaugration: [
      "https://i.imgur.com/uyAK0DQm.jpg",
      "https://i.imgur.com/DIfMC6om.jpg",
      "https://i.imgur.com/i0IaxTjm.jpg",
      "https://i.imgur.com/ZGYyZmOm.jpg",
      "https://i.imgur.com/OHZueumm.jpg",
      "https://i.imgur.com/vMeFcc3m.jpg",
      "https://i.imgur.com/P4iFJMHm.jpg",
      "https://i.imgur.com/UPJG3RQm.jpg",
      "https://i.imgur.com/xZy7WlUm.jpg",
      "https://i.imgur.com/E5mq7K7m.jpg",
      "https://i.imgur.com/ok5n0K5m.jpg",
      "https://i.imgur.com/H0fz2ZYm.jpg",
      "https://i.imgur.com/mY3vN2Tm.jpg",
      "https://i.imgur.com/FANDwlPm.jpg",
      "https://i.imgur.com/w92Qprom.jpg",
      "https://i.imgur.com/STMH4G4m.jpg",
    ],
  };


  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [activeLevel, setActiveLevel] = useState<activelevelProps>({
    starNight: true,
    delegation: false,
    committee: false,
    topFive: false,
    winning: false,
    inaugration: false,
  });

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setSelectedImage('');
    setLightboxOpen(false);
  };

  const hanldeActiveLevel = (level: keyof activelevelProps) => {
    const newActiveLevel = {
      starNight: false,
      delegation: false,
      committee: false,
      topFive: false,
      winning: false,
      inaugration: false,
    };

    newActiveLevel[level] = true;
    setActiveLevel(newActiveLevel);
  };

  return (
      <>
        <Navbar />
        <div
            id="footer"
            className="bg-[url('https://i.imgur.com/zksQZhn.png')] w-full h-full bg-no-repeat bg-cover relative pt-[100px]"
        >
          <div className="h-full bg-cover bg-center flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white mb-10 mt-4">Gallery</h1>
            <div className="rounded bg-[url('https://i.imgur.com/zksQZhn.png')] bg-no-repeat bg-cover shadow-2xl p-4 mb-4 mx-4 md:mx-20">
              <GalleryNavigation
                  activeLevel={activeLevel}
                  handleActiveLevel={hanldeActiveLevel}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {activeLevel.starNight && (
                    imageUrls.starNight.map((url, i) => (
                        <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                          <Image
                              className="w-full h-full object-cover cursor-pointer rounded"
                              src={url}
                              alt={`Image ${i + 1}`}
                              width={300}
                              height={200}
                              onClick={() => handleImageClick(url)}
                          />
                        </div>
                    ))
                )}
                {activeLevel.delegation && (
                    imageUrls.delegation.map((url, i) => (
                        <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                          <Image
                              className="w-full h-full object-cover cursor-pointer rounded"
                              src={url}
                              alt={`Image ${i + 1}`}
                              width={300}
                              height={200}
                              onClick={() => handleImageClick(url)}
                          />
                        </div>
                    ))
                )}
                {activeLevel.committee && (
                    imageUrls.committee.map((url, i) => (
                        <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                          <Image
                              className="w-full h-full object-cover cursor-pointer rounded"
                              src={url}
                              alt={`Image ${i + 1}`}
                              width={300}
                              height={200}
                              onClick={() => handleImageClick(url)}
                          />
                        </div>
                    ))
                )}
                {activeLevel.topFive && (
                    imageUrls.topFive.map((url, i) => (
                        <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                          <Image
                              className="w-full h-full object-cover cursor-pointer rounded"
                              src={url}
                              alt={`Image ${i + 1}`}
                              width={300}
                              height={200}
                              onClick={() => handleImageClick(url)}
                          />
                        </div>
                    ))
                )}
                {activeLevel.winning && (
                    imageUrls.winning.map((url, i) => (
                        <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                          <Image
                              className="w-full h-full object-cover cursor-pointer rounded"
                              src={url}
                              alt={`Image ${i + 1}`}
                              width={300}
                              height={200}
                              onClick={() => handleImageClick(url)}
                          />
                        </div>
                    ))
                )}
                {activeLevel.inaugration && (
                    imageUrls.inaugration.map((url, i) => (
                        <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                          <Image
                              className="w-full h-full object-cover cursor-pointer rounded"
                              src={url}
                              alt={`Image ${i + 1}`}
                              width={300}
                              height={200}
                              onClick={() => handleImageClick(url)}
                          />
                        </div>
                    ))
                )}
              </div>
            </div>
            {lightboxOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10 px-4 md:px-0">
                  <div className="max-w-lg p-2 bg-white rounded-lg relative">
                    <Image
                        className="w-full rounded"
                        src={selectedImage}
                        alt="Selected"
                        width={600}
                        height={800}
                    />
                    <button
                        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 cursor-pointer"
                        onClick={handleCloseLightbox}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
            )}
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Gallery;