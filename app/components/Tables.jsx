const Tables = () => {
  return <div>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">HTML Table</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 px-4 py-2">Program</th>
            <th className="border border-gray-300 px-4 py-2">Age Group</th>
            <th className="border border-gray-300 px-4 py-2">Annual Tuition</th>
            <th className="border border-gray-300 px-4 py-2">Registration Fee</th>
            <th className="border border-gray-300 px-4 py-2">Activity Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Nursery</td>
            <td className="border border-gray-300 px-4 py-2">2 - 3 Years</td>
            <td className="border border-gray-300 px-4 py-2">$1,686</td>
            <td className="border border-gray-300 px-4 py-2">$162</td>
            <td className="border border-gray-300 px-4 py-2">$12</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"> Pre - Kindergartens</td>
            <td className="border border-gray-300 px-4 py-2">3 - 4 Years</td>
            <td className="border border-gray-300 px-4 py-2">$2,686</td>
            <td className="border border-gray-300 px-4 py-2">$16</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Kindergarten</td>
            <td className="border border-gray-300 px-4 py-2">4 - 5 Years</td>
            <td className="border border-gray-300 px-4 py-2">$3,686</td>
            <td className="border border-gray-300 px-4 py-2">$340</td>
            <td className="border border-gray-300 px-4 py-2">$20</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  
  </div>;
};
export default Tables;