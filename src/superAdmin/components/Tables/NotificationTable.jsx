import { deleteNotification } from "../../helpers/notification";

function NotificationTable({ tktData }) {
  return (
    <div className="overflow-x-auto sm:max-w-3xl max-w-xs mt-10">
      <table className="min-w-[600px] w-full border border-gray-300 rounded-xl overflow-hidden shadow-md">
        <thead className="bg-blackBg text-white">
          <tr>
            <th className="px-4 py-3 text-left border-b border-gray-700">
              Ticket ID
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-700">
              Ticket Title
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-700">
              Content
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-700">Date</th>
            <th className="px-4 py-3 text-left border-b border-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tktData.map((tkt) => (
            <tr key={tkt.docId} className="hover:bg-gray-100">
              <td className="px-4 py-3 border-b border-gray-200">
                #{tkt.notificationId.slice(0, 4)}
              </td>
              <td className="px-4 py-3 border-b border-gray-200">{tkt.title}</td>
              <td className="px-4 py-3 border-b border-gray-200">{tkt.content}</td>
              <td className="px-4 py-3 border-b border-gray-200">{tkt.date}</td>
              <td className="px-4 py-3 border-b border-gray-200">
                <button
                  className="bg-red-100 px-2 py-1 rounded-md border text-sm text-red-700 font-semibold"
                  onClick={() => deleteNotification(tkt.docId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationTable;
