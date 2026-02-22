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
    const [sortByDateDirection, setSortByDateDirection] = useState<string>('ascending')

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const deleteCompany = (id:number):void => {
      setCompanies(prev => prev.filter((company) => company.id != id))
    }

    const addCompany = (company: CompanyType) => {
      setCompanies(prev => [...prev, company])
    }

    const sortByDate = () => {
      if(sortByDateDirection === 'ascending'){
        setCompanies(prev => [...prev].sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))
        setSortByDateDirection('descending')
      } 
      else {
        setCompanies(prev => [...prev].sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
        setSortByDateDirection('ascending')
      }
    }
    
    const toggleModalVisibility = () => {
      isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
    }

    
    return (
        <CompaniesContext.Provider value={{ companies, deleteCompany, addCompany, sortByDate, toggleModalVisibility, isModalOpen }}>
          {children}
        </CompaniesContext.Provider>
    )
}

