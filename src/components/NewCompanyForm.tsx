import { useState, useEffect, useContext } from "react"
import { FormContext } from '../context/FormContext'

	

const NewCompanyForm = () => {

	const context = useContext(FormContext);
  	if (!context) return null;
  	const { companies, setCompanies } = context;

	const [currentCompany, setCurrentCompany] = useState<null | Object>(null)

	const [name, setName] = useState<null | string>("")
	const [industry, setIndustry] = useState<null | string>("")
	const [email, setEmail] = useState<null | string>("")
	const [phoneNumber, setPhoneNumber] = useState<null | string>("")
	const [total, setTotal] = useState<null | number>(0)
	const [employee, setEmployee] = useState<null | string>("")

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setIndustry(e.target.value)
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(e.target.value)
	}

	const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTotal(Number(e.target.value))
	}

	const handleEmployeeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setEmployee(e.target.value)
	}

    const addNewCompany = () => {
		companies.push()
	}

	useEffect(() => {
		console.log(name, industry, email, phoneNumber, total, employee)
	}, [name, industry, email, phoneNumber, total, employee])

	return (
		<form>
			<label>Name:</label>
			<input onChange={handleNameChange}></input>

			<label>Industry:</label>
			<select onChange={handleIndustryChange}>
				<option>Healthcare</option>
				<option>IT</option>
				<option>Logistics</option>
				<option>Education</option>
				<option>Finance</option>
				<option>Marketing</option>
				<option>Real Estate</option>
				<option>E-commerce</option>
				<option>Construction</option>
			</select>

			<label>Email:</label>
			<input onChange={handleEmailChange}></input>

			<label>Phone number:</label>
			<input onChange={handlePhoneNumberChange}></input>

			<label>Total:</label>
			<input onChange={handleTotalChange}></input>

			<label>Employee:</label>
			<select onChange={handleEmployeeChange}>
				<option>Anna Nowak</option>
				<option>Piotr Kowalski</option>
				<option>Marta Zielińska</option>
				<option>Tomasz Wiśniewski</option>
				<option>Katarzyna Wójcik</option>
				<option>Michał Lewandowski</option>
			</select>
			<button>Add company</button>
		</form>
	)
}

export default NewCompanyForm
