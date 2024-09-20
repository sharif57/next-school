const Tables = () => {
  return <div className="mt-[130px] ">
    <div className="w-1/2 mx-auto text-center space-y-4 ">
      <p className="btn btn-outline text-black font-semibold">Our Features</p>
      <h1 className="text-5xl  font-bold">Fee Structure</h1>
      <p>Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.</p>
    </div>
    <div className="container mx-auto p-8 mt-10">
      <div className="border-2 border-r-8 border-l-8 border-black rounded-lg p-8">
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
          <thead className="">
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
              <td className="border border-gray-300 px-4 py-2">$20</td>
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
    </div>

    {/* second tables */}
    <div className="container mx-auto p-8 mt-8">
      <div className="border-2 border-r-8 border-l-8 border-black rounded-lg p-8">
        <div className="bg-gray-800 rounded-lg w-full text-white p-4 mb-3">
          <h1 className="text-xl font-semibold">Additional Services</h1>
        </div>
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">

          <thead className="">

          </thead>
          <tbody className="rounded-lg">
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Before and After-School Care</td>
              <td className="border border-gray-300 px-4 py-2">$120 / per month</td>

            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"> Language Immersion Program</td>
              <td className="border border-gray-300 px-4 py-2">$60 / per semester</td>

            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Transportation (optional)</td>
              <td className="border border-gray-300 px-4 py-2">$80 / per month</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>

  </div>;
};
export default Tables;