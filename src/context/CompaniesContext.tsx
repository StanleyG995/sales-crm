import { createContext, useState, useMemo, type ReactNode } from 'react'
import type { CompaniesContextType } from '../types/CompaniesContextType'
import type { CompanyType } from '../types/CompanyType'
import { companiesData } from '../data/companies'

type Props = {
    children: ReactNode;
  };

export const CompaniesContext = createContext<CompaniesContextType | null>(null)

export const CompaniesProvider = ({ children }:Props) => {
    const [companies, setCompanies] = useState<CompanyType[]>(companiesData)

    const [sortByDateDirection, setSortByDateDirection] = useState<'asc' | 'desc'>('asc')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const sortedCompanies = useMemo(() => {
      return [...companies].sort((a, b) => {
        const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        return sortByDateDirection === 'asc' ? diff : -diff
      })
    }, [companies, sortByDateDirection])

   



    const deleteCompany = (id:number):void => {
      setCompanies(prev => prev.filter((company) => company.id != id))
    }

    const addCompany = (company: CompanyType) => {
      setCompanies(prev => [...prev, company])
    }

    const sortByDate = () => {
      if (sortByDateDirection === 'asc') {
        setSortByDateDirection('des')
      }
      else {
        setSortByDateDirection('asc')
      }
    }

    
    
    const toggleModalVisibility = () => {
      isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
    }

    
    return (
        <CompaniesContext.Provider value={{ companies:sortedCompanies, deleteCompany, addCompany, sortByDate, toggleModalVisibility, isModalOpen, sortedCompanies }}>
          {children}
        </CompaniesContext.Provider>
    )
}

