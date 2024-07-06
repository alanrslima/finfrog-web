export type TableProps = {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ accessorKey: string; header: string }>;
};
