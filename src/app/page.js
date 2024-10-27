// app/page.js
import Link from 'next/link';
import countries from './index';

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Country List</h1>
      <ul className="space-y-2">
        {Object.keys(countries).map((key) => (
          <li key={key}>
            <Link href={`/country/${key}`} className="text-blue-500 hover:underline">
              {countries[key].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
