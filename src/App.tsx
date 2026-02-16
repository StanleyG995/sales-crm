import { FormContext } from './context/FormContext'
import { companiesData } from "./data/companies"

import NewCompanyForm from './components/NewCompanyForm'
import Table from './components/Table'

import { useState } from "react"

import type { CompanyType } from "./types/CompanyType"

function App() {

  const [companies, setCompanies] = useState<CompanyType[]>(companiesData)

  return (
    <>
      <FormContext.Provider value = {{companies, setCompanies}}>
        <NewCompanyForm/>
        <Table></Table>
      </FormContext.Provider>
    </>
  )
}

export default App
