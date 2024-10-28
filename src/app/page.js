'use client';
import { useRouter } from 'next/navigation';
import Countries from './index';

export default function Home() {
  const router = useRouter();

  const handleCountryClick = (countryName) => {
    router.push(`/Country/${countryName}`); 
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Country List</h1>
      <ul className="space-y-2">
        {Object.keys(Countries).map((key) => (
          <li key={key}>
            <button 
              onClick={() => handleCountryClick(key)} 
              className="text-blue-500 hover:underline"
            >
              {Countries[key].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
