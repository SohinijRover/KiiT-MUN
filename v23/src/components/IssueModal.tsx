'use client'
import { useState } from 'react'
import { BsBookFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { TextAreaField, TextField } from './register/Fields'
import { VscMail } from 'react-icons/vsc'
import { Form, Formik } from "formik";
import { ticketInitial, ticketValidation } from '@/issueUtils'
import { MdSubject } from 'react-icons/md'
import backendService from '@/service'
import { useRouter } from "next/navigation";


export default function IssueModal() {
	const [load, setLoad] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState(false)

	const router = useRouter()
	return (
			<div>
				<Formik initialValues={ticketInitial}
					validationSchema={ticketValidation}
					enableReinitialize={true}
					onSubmit={async (values) => {
						setLoad(true)
						const data = await backendService.ticketManage(values)
						if (data.error) {
							setLoad(false)
							return setError(data.error)
						}
						setLoad(false)
						setSubmitted(true)
						setTimeout(()=>router.push('/'), 1000)
					}
					}
				>
					<Form>
						<div className="w-full">
							<div className='text-center text-2xl mb-4 font-bold'>Feedback or Issue Form</div>
							<p className='text-red-500 text-center my-4'>{error}</p>
							<div className="flex flex-wrap gap-3 lg:gap-6 justify-around md:justify-center w-full mx-auto">
								<TextField
									icon={<BsFillPersonFill />}
									name="name"
									type="text"
									className="w-3/4"
									placeholder="Name" />
								<TextField
									icon={<VscMail />}
									type='email'
									placeholder="Email"
									className="w-3/4"
									name='email'
								/>
								<TextField
									icon={<BsFillTelephoneFill />}
									type="tel"
									placeholder="Contact No."
									className="w-3/4"
									name='phone'
								/>
								<TextField
									icon={<BsBookFill />}
									type="text"
									placeholder="Subject"
									className="w-3/4"
									name='subject'
								/>
								<TextAreaField
									icon={<MdSubject />}
									placeholder="Describe your feedback or issue"
									className="w-3/4 h-[75px]"
									name="description"
								/>
							</div>
						</div>

						<div className="mt-4 w-full mx-auto">
							<div>
								{load && <p className='text-center m-4'>Please wait while your form is getting submitted.</p>}
							</div>
							<div className='flex flex-col items-center'>
								<button type='submit' disabled={load} className={`rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none w-36 focus-visible:ring-2 ${load ? 'opacity-50' : ''}  focus-visible:ring-offset-2 border-none bg-buttonBackground outline-none`}>
									Submit
								</button>
							</div>
							<div>
								{submitted && <p className='text-center m-4'>Form submitted successfully. Navigating you back...</p>}
							</div>
						</div>
					</Form>
				</Formik>
			</div>
	)
}
