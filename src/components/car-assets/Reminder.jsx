import { BiPlus } from "react-icons/bi";

const Reminder = () => {
  return (
    <div className="card mt-12">
      <div className="flex-center-between gap-2">
        <h1 className="text-xl font-semibold">Reminder</h1>
        <button className="btn btn-primary flex-align-center gap-x-2">
          <BiPlus />
          <span>add new</span>
        </button>
      </div>
      <div className="table-wrapper w-full p-4 rounded-lg overflow-auto">
        <table className="w-full border dark:border-dark">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left font-extrabold">
                Description
              </th>
              <th className="py-2 px-4 text-left font-extrabold">Due</th>
              <th className="py-2 px-4 text-left font-extrabold">Overdue</th>
              <th className="py-2 px-4 text-left font-extrabold">Notify</th>
              <th className="py-2 px-4 text-left font-extrabold">status</th>
            </tr>
          </thead>
          <tbody>
            {Array.apply(null, { length: 2 }).map((_, i) => (
              <tr key={i}>
                <td className="p-3">Urgent Safety Recall</td>
                <td className="p-3">06/04/2022</td>
                <td className="p-3">08/04/2022</td>
                <td className="p-3">Davido Demo</td>
                <td className="p-3">Completed</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reminder;
