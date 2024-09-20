const Table = () => {
    return <div >
        <h2 className="text-2xl font-semibold mb-4">HTML Table</h2>

        <div className="p-8 border-2 border-black rounded-lg">
            <table className="min-w-full border-collapse border border-gray-300 bg-white rounded-lg">
                <thead>
                    <tr className="border-2 border-black rounded-2xl">
                        <th class="  px-4 py-2 text-left ">Company</th>
                        <th class="border border-gray-300 px-4 py-2 text-left">Contact</th>
                        <th class="border border-gray-300 px-4 py-2 text-left">Country</th>
                        <th class="border border-gray-300 px-4 py-2 text-left">Country</th>
                        <th class="border border-gray-300 px-4 py-2 text-left">Country</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="border-2 border-black ">
                        <td className="border border-gray-300 px-4 py-2 rounded-lg">Alfreds Futterkiste</td>
                        <td className="border border-gray-300 px-4 py-2 rounded-lg">Maria Anders</td>
                        <td className="border border-gray-300 px-4 py-2 rounded-lg">Germany</td>
                        <td className="border border-gray-300 px-4 py-2 rounded-lg">Germany</td>
                        <td className="border border-gray-300 px-4 py-2 rounded-lg">Germany</td>
                    </tr>


                </tbody>
            </table>

        </div>
    </div>;
};
export default Table;