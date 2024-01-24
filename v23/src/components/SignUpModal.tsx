'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import { AiOutlineClose } from "react-icons/ai";


export default function MyModal({isOpenModal, closeModal, setIsOpenModal, imgSource}) {
	console.log(isOpenModal)
	console.log(closeModal)
	console.log(setIsOpenModal)
	return (
		<>
			<Transition appear show={isOpenModal} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="  text-white max-w-md transform overflow-hidden rounded-2xl bg-ModalBg border-4 border-white p-6  text-left align-middle relative shadow-xl transition-all">
									<AiOutlineClose className='w-6 h-6 absolute right-1 top-1 hover:cursor-pointer' onClick={closeModal} />
									<div className="mt-2">
										<Image src={imgSource} alt="modal" height={100} width={800} className='object-contain rounded-xl' />
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
