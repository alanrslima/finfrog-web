import { TableProps } from "./table.types";

export function Table(props: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-bone-dark bg-bone text-sm">
        <thead className="text-left">
          <tr className="bg-bone-dark">
            {props.columns.map((column) => (
              <th
                key={column.accessorKey}
                className="whitespace-nowrap px-6 py-4 font-medium text-black"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.data?.map((row, index) => (
            <tr key={index} className="odd:bg-white">
              {props.columns.map((column) => (
                <td
                  key={column.accessorKey}
                  className="whitespace-nowrap px-6 py-4 font-medium text-black"
                >
                  {row[column.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
