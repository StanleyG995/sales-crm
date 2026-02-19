import { createContext, useState, type ReactNode } from 'react'
import type { CompaniesContextType } from '../types/CompaniesContextType'
import type { CompanyType } from '../types/CompanyType'
import { companiesData } from '../data/companies'

type Props = {
    children: ReactNode;
  };

export const CompaniesContext = createContext<CompaniesContextType | null>(null)

export const CompaniesProvider = ({ children }:Props) => {
    const [companies, setCompanies] = useState<CompanyType[]>(companiesData)

    const deleteCompany = (id:number):void => {
      setCompanies(prev => prev.filter((company) => company.id != id))
    }

    const addCompany = (company: CompanyType) => {
      setCompanies(prev => [...prev, company])
    }

    const sortByDate = () => {
      setCompanies(prev => [...prev].sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))
    }

    return (
        <CompaniesContext.Provider value={{ companies, deleteCompany, addCompany, sortByDate }}>
          {children}
        </CompaniesContext.Provider>
    )
}

