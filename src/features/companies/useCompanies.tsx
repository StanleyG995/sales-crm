import { useState, useMemo } from "react";
import type { CompanyType } from "./CompanyType";
import { companiesData } from "../../data/companies";

export const useCompanies = () => {
  const [companies, setCompanies] = useState<CompanyType[]>(companiesData);
  const [sortKey, setSortKey] = useState<keyof CompanyType>("createdAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortComparators: Record<string, (a: CompanyType, b: CompanyType) => number> = {
    id: (a, b) => a.id - b.id,
    companyName: (a, b) => a.companyName.localeCompare(b.companyName),
    createdAt: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    totalSales: (a, b) => a.totalSales - b.totalSales,
  };

  const sortedCompanies = useMemo(() => {
    const comparator = sortComparators[sortKey];
    if (!comparator) return companies;
    const sorted = [...companies].sort(comparator);
    return sortDirection === "asc" ? sorted : sorted.reverse();
  }, [companies, sortDirection, sortKey]);

  const addCompany = (company: CompanyType) => setCompanies(prev => [...prev, company]);
  const deleteCompany = (id: number) => setCompanies(prev => prev.filter(c => c.id !== id));
  const toggleSort = (key: keyof CompanyType) => {
    setSortKey(key);
    setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
  };
  const renderSortArrow = (key: keyof CompanyType) => (sortKey === key ? (sortDirection === "asc" ? " ▲" : " ▼") : null);

  return {
    companies: sortedCompanies,
    addCompany,
    deleteCompany,
    toggleSort,
    renderSortArrow,
  };
};