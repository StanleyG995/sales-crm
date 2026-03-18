import { useState, useEffect } from "react"
import type { OrderFormProps } from "../OrderForm/OrderForm.types"

const OrderForm = ({ addOrder, editOrder, onSuccess, editedOrder }: OrderFormProps) => {
  const [name, setName] = useState("")

  const mode = editedOrder ? "edit" : "add"

  const resetForm = () => {
    setName("")
  }

  useEffect(() => {
    if (editedOrder) {
      setName(editedOrder.companyName)
    } else {
      resetForm()
    }
  }, [editedOrder])

  

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
    <form className="order-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{mode === "edit" ? "Edit order" : "Add new order"}</h2>

      <label htmlFor="company-name">Name:</label>
      <input id="company-name" placeholder="Company name" value={name} onChange={e => setName(e.target.value)} />

      <div className="modal-controls">
        <button className="button" type="button" onClick={() => { onSuccess(); resetForm() }}>Cancel</button>
        <button className="button button--primary" type="submit">
          {mode === "edit" ? "Save changes" : "Add company"}
        </button>
      </div>
    </form>
  )
}

export default OrderForm