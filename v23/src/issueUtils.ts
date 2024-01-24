import * as Yup from 'yup'

export const ticketValidation = Yup.object({
	name: Yup.string()
		.max(25, 'Must be 25 characters or less')
		.required('Required'),
	email: Yup.string().email('Invalid').required('Required'),
	phone: Yup.string().required('Required'),
	subject: Yup.string().required('Required'),
	description: Yup.string().required('Required'),
})


export const ticketInitial = {
	name: "",
	email: "",
	subject: "",
	phone: "",
	description: ""
}