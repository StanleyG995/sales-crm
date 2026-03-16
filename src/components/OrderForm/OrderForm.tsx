import { useState, useEffect } from "react"
import type { CompanyFormProps } from "../CompanyForm/CompanyForm.types"

const CompanyForm = ({ addCompany, editCompany, onSuccess, editedCompany }: CompanyFormProps) => {
  const [name, setName] = useState("")
  const [industry, setIndustry] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [total, setTotal] = useState(0)
  const [employee, setEmployee] = useState("")

  const mode = editedCompany ? "edit" : "add"

  const resetForm = () => {
    setName("")
    setIndustry("")
    setEmail("")
    setPhoneNumber("")
    setTotal(0)
    setEmployee("")
  }

  useEffect(() => {
    if (editedCompany) {
      setName(editedCompany.companyName)
      setIndustry(editedCompany.industry)
      setEmail(editedCompany.email)
      setPhoneNumber(editedCompany.phone)
      setTotal(Number(editedCompany.totalSales))
      setEmployee(editedCompany.assignedEmployee)
    } else {
      resetForm()
    }
  }, [editedCompany])

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !industry || !email || !phoneNumber || !employee) return

    const companyData = {
      id: editedCompany?.id ?? Date.now(),
      companyName: name,
      industry,
      email,
      phone: phoneNumber,
      totalSales: total,
      assignedEmployee: employee,
      createdAt: editedCompany?.createdAt ?? new Date().toISOString(),
    }

    if (mode === "edit") {
      editCompany(companyData)
    } else {
      addCompany(companyData)
    }

    onSuccess()
    resetForm()
  }

  return (
    <form className="company-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{mode === "edit" ? "Edit company" : "Add new company"}</h2>

      <label htmlFor="company-name">Name:</label>
      <input id="company-name" placeholder="Company name" value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="company-industry">Industry:</label>
      <select id="company-industry" value={industry} onChange={e => setIndustry(e.target.value)}>
        <option value="" disabled hidden>Company's industry</option>
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

      <label htmlFor="company-email">Email:</label>
      <input id="company-email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />

      <label htmlFor="company-phonenumber">Phone number:</label>
      <input id="company-phonenumber" placeholder="Phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />

      <label htmlFor="company-total">Total:</label>
      <input id="company-total" placeholder="Total revenue" value={total} onChange={e => setTotal(Number(e.target.value))} />

      <label htmlFor="company-employee">Employee:</label>
      <select id="company-employee" value={employee} onChange={e => setEmployee(e.target.value)}>
        <option value="" disabled hidden>Assigned employee</option>
        <option>Anna Nowak</option>
        <option>Piotr Kowalski</option>
        <option>Marta Zielińska</option>
        <option>Tomasz Wiśniewski</option>
        <option>Katarzyna Wójcik</option>
        <option>Michał Lewandowski</option>
      </select>

      <div className="modal-controls">
        <button className="button" type="button" onClick={() => { onSuccess(); resetForm() }}>Cancel</button>
        <button className="button button--primary" type="submit">
          {mode === "edit" ? "Save changes" : "Add company"}
        </button>
      </div>
    </form>
  )
}

export default CompanyForm