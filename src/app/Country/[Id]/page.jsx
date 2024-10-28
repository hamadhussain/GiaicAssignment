'use client'; 
import { useParams } from 'next/navigation';
import Countries from '../../index'; 

export default function CountryPage() {
  const { Id } = useParams();
    console.log(Id);

  const country = Countries[Id];

  if (!country) {
    return <div className="container mx-auto p-5">Country not found.</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold">{country.name}</h1>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}