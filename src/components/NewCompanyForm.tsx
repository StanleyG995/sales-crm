import { useState, useEffect, useContext } from "react"
import { CompaniesContext } from "../context/CompaniesContext"

const NewCompanyForm = () => {
	const context = useContext(CompaniesContext)
	if (!context) return null
	const { addCompany, sortByDate } = context

	const [name, setName] = useState<string>("")
	const [industry, setIndustry] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [phoneNumber, setPhoneNumber] = useState<string>("")
	const [total, setTotal] = useState<number>(0)
	const [employee, setEmployee] = useState<string>("")

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

	useEffect(() => {
		console.log(name, industry, email, phoneNumber, total, employee)
	}, [name, industry, email, phoneNumber, total, employee])

	return (
		<form className='company-form'>
			<label htmlFor='company-name'>Name:</label>
			<input
				id='company-name'
				placeholder='Company name'
				onChange={handleNameChange}
				value={name}></input>

			<label htmlFor='company-industry'>Industry:</label>
			<select
				id='company-industry'
				onChange={handleIndustryChange}
				value={industry}>
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

			<label htmlFor='company-email'>Email:</label>
			<input
				id='company-email'
				placeholder='Email address'
				onChange={handleEmailChange}
				value={email}></input>

			<label htmlFor='company-phonenumber'>Phone number:</label>
			<input
				id='company-phonenumber'
				placeholder='Phone number'
				onChange={handlePhoneNumberChange}
				value={phoneNumber}></input>

			<label htmlFor='company-total'>Total:</label>
			<input
				id='company-total'
				placeholder='Total revenue'
				onChange={handleTotalChange}
				value={total}></input>

			<label htmlFor='company-employee'>Employee:</label>

			<select
				id='company-employee'
				onChange={handleEmployeeChange}
				value={employee}>
				<option value='' disabled selected hidden>
					Assigned employee
				</option>
				<option>Anna Nowak</option>
				<option>Piotr Kowalski</option>
				<option>Marta Zielińska</option>
				<option>Tomasz Wiśniewski</option>
				<option>Katarzyna Wójcik</option>
				<option>Michał Lewandowski</option>
			</select>

			<div className='company-form-controls'>
				<button
					onClick={e => {
						e.preventDefault()
						if (!name || !industry || !email || !phoneNumber || !employee)
							return

						addCompany({
							id: Date.now(),
							companyName: name,
							industry: industry,
							email: email,
							phone: phoneNumber,
							totalSales: total,
							assignedEmployee: employee,
							createdAt: new Date().toISOString(),
						})

						setName("")
						setIndustry("")
						setEmail("")
						setPhoneNumber("")
						setTotal(0)
						setEmployee("")
					}}>
					Add company
				</button>

				<button
					onClick={e => {
						e.preventDefault()
						sortByDate()
					}}>
					Sortuj po dacie
				</button>
			</div>
		</form>
	)
}

export default NewCompanyForm
