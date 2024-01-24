const baseUrl = 'https://kiitmunbackend.onrender.com'


const singleDelegatePost = async (values: any) => {
	const { firstName, lastName, middleName, committeeOne,
		committeeOne_countryOne,
		committeeOne_countryTwo,
		committeeOne_countryThree,
		committeeTwo,
		committeeTwo_countryOne,
		committeeTwo_countryTwo,
		committeeTwo_countryThree,
		committeeThree,
		committeeThree_countryOne,
		committeeThree_countryTwo,
		committeeThree_countryThree, age, ...rest } = values
	const committees = {
		committeeOne,
		committeeOne_countryOne,
		committeeOne_countryTwo,
		committeeOne_countryThree,
		committeeTwo,
		committeeTwo_countryOne,
		committeeTwo_countryTwo,
		committeeTwo_countryThree,
		committeeThree,
		committeeThree_countryOne,
		committeeThree_countryTwo,
		committeeThree_countryThree
	}
	const newValues = { name: `${firstName} ${middleName} ${lastName}`, age: Number(age), committees, ...rest }

	const response = await fetch(`${baseUrl}/api/singleDelegates`, {
		method: "POST",
		body: JSON.stringify(newValues),
		headers: {
			"Content-Type": 'application/json'
		}
	})
	return await response.json()
}

const doubleDelegatePost = async (values: any) => {
	const { s_firstName, s_lastName, s_middleName, d_firstName, d_lastName, d_middleName, committeeOne,
		committeeOne_countryOne,
		committeeOne_countryTwo,
		committeeOne_countryThree,
		committeeTwo,
		committeeTwo_countryOne,
		committeeTwo_countryTwo,
		committeeTwo_countryThree,
		committeeThree,
		committeeThree_countryOne,
		committeeThree_countryTwo,
		committeeThree_countryThree, s_age, d_age, ...rest } = values
	const committees = {
		committeeOne,
		committeeOne_countryOne,
		committeeOne_countryTwo,
		committeeOne_countryThree,
		committeeTwo,
		committeeTwo_countryOne,
		committeeTwo_countryTwo,
		committeeTwo_countryThree,
		committeeThree,
		committeeThree_countryOne,
		committeeThree_countryTwo,
		committeeThree_countryThree
	}
	const newValues = { s_name: `${s_firstName} ${s_middleName} ${s_lastName}`, d_name: `${d_firstName} ${d_middleName} ${d_lastName}`, s_age: Number(s_age), d_age: Number(d_age), committees, ...rest }

	const response = await fetch(`${baseUrl}/api/doubleDelegates`, {
		method: "POST",
		body: JSON.stringify(newValues),
		headers: {
			"Content-Type": 'application/json'
		}
	})
	return await response.json()
}

const ticketManage = async(values)=>{
	const response = await fetch(`${baseUrl}/api/tickets`, {
		method: "POST",
		body: JSON.stringify(values),
		headers: {
			"Content-Type": 'application/json'
		}
	})
	return await response.json()
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { singleDelegatePost, doubleDelegatePost, ticketManage}