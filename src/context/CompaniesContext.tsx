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

    return (
        <CompaniesContext.Provider value={{ companies, setCompanies }}>
          {children}
        </CompaniesContext.Provider>
    )
}

