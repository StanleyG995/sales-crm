import { useState } from 'react';
import { companiesData } from '../data/companies';
import type { Company } from '../types/company';

const Table = () => {
  const [companies, setCompanies] = useState<Company[]>(companiesData);

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nazwa firmy</th>
          <th>Branża</th>
          <th>Email</th>
          <th>Telefon</th>
          <th>Sprzedaż (PLN)</th>
          <th>Pracownik</th>
          <th>Data dodania</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.id} className='table-row'>
            <td>{company.id}</td>
            <td>{company.companyName}</td>
            <td>{company.industry}</td>
            <td>{company.email}</td>
            <td>{company.phone}</td>
            <td>{company.totalSales.toLocaleString('pl-PL')}</td>
            <td>{company.assignedEmployee}</td>
            <td>{company.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
