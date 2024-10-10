import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, setSearchQuery } from "../features/Records/recordSlices";

export const Records = () => {
  const records = useSelector((state) => state.records.records);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.records.searchQuery);

  const filteredRecords = searchQuery
    ? records.filter((record) =>
        record.exercise.toLowerCase().includes(searchQuery)
      )
    : records;

  return (
    <div className="flex items-center flex-col">
      <div className="relative mt-3" id="input">
        <input
          placeholder="Search by Exercise..."
          className="block w-full md:w-[35rem] text-base font-semibold h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-gray-500 focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
          id="floating_outlined"
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <div className="flex my-5 justify-center w-full">
        <table className="w-full md:w-[35rem] text-left text-gray-300 overflow-x-auto border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 md:px-6 py-3">
                Exercise
              </th>
              <th scope="col" className="px-3 md:px-6 py-3">
                Weight<span className="ml-1 text-xs font-bold">kg</span>
              </th>
              <th scope="col" className="px-3 md:px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-3 md:px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length > 0 &&
              filteredRecords.map((record) => (
                <tr
                  key={record.id}
                  className="border-b bg-gray-800 border-gray-700"
                >
                  <th className="px-3 md:px-6 py-4 font-medium text-white uppercase text-sm md:text-base">
                    {record.exercise}
                  </th>
                  <td className="px-2 md:px-6 py-4 font-semibold text-white text-center text-sm md:text-base">
                    {record.weight}
                    <span className="text-xs ml-1">KG</span>
                  </td>
                  <td className="px-2 md:px-6 py-4 font-semibold text-white text-center text-sm md:text-base">
                    {record.date}
                  </td>
                  <td className="px-2 md:px-6 py-4 text-center">
                    <button
                      onClick={() => dispatch(deleteRecord(record.id))}
                      className="uppercase text-xl text-center md:text-3xl text-red-600 active:scale-90 hover:text-gray-200 duration-300"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
