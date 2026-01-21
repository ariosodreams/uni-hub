import partners from '../data/partners.json';

export default function Home() {
  // Calculate totals safely
  const totalPartners = partners.length;
  const totalStudents = partners.reduce((sum, p) => sum + p.students, 0);

  return (
    <main className="min-h-screen bg-gray-50 pb-10 font-sans">
      {/* Prototype Disclaimer Banner */}
      <div className="bg-yellow-100 border-b border-yellow-200 text-yellow-800 px-4 py-2 text-center text-sm font-medium">
        ⚠️ PROTOTYPE MODE: All data shown below is for demonstration purposes only.
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Global Cooperation Hub</h1>
          <p className="text-gray-600 mt-2">Department Overview Dashboard</p>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Total Partners</h3>
            <p className="text-4xl font-bold text-blue-600">{totalPartners}</p>
          </div>
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
            <p className="text-4xl font-bold text-green-600">{totalStudents}</p>
          </div>
        </div>

        {/* The List */}
        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-700">Partnership Directory</h2>
          </div>
          <ul>
            {partners.map((p) => (
              <li key={p.id} className="border-b border-gray-100 last:border-0 px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.focus} • {p.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold 
                    ${p.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                    {p.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}