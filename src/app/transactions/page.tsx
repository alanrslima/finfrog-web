import { Table, DefaultLayout, Button } from "@/components";

export default function Transactions() {
  return (
    <DefaultLayout>
      <Table
        columns={[
          { accessorKey: "id", header: "ID" },
          { accessorKey: "name", header: "Nome" },
        ]}
        data={[
          { id: "123", name: "John" },
          { id: "1234", name: "Joao" },
          { id: "123", name: "John" },
          { id: "1234", name: "Joao" },
          { id: "123", name: "John" },
          { id: "1234", name: "Joao" },
        ]}
      />
    </DefaultLayout>
  );
}
