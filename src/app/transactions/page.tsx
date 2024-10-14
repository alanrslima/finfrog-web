"use server";

import { DefaultLayout } from "@/components/layouts/default-layout";
import { DataTable } from "@/components/organisms/data-table";
import { Headline } from "@/components/atoms/headline";
import { Card } from "@/components/molecules/card";
import { Stat, StatGroup } from "@/components/molecules/stat";
import { useEffect, useState } from "react";
import { Transaction } from "@/types/transaction";

import { columns } from "./columns";
import { FetchHttpClient } from "@/services/api/fetch-http-client";
import { cookies } from "next/headers";
import { PageProps } from "@/types/page";

export default async function Transactions(props: PageProps) {
  const showTransactionForm = props.searchParams["show-transaction-form"]
    ? true
    : false;

  const token = cookies().get("FROG_TOKEN")?.value;
  const response = await fetch("http://localhost:3000/api/transaction", {
    headers: { Authorization: `Bearer ${token}` },
    method: "GET",
    next: { tags: ["get-transactions"] },
  });
  const responseData = await response.json();
  const transactions: Transaction[] = responseData.data;
  // const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   async function fetchTransactions() {
  //     const fetchHttpClient = new FetchHttpClient();
  //     const response = await fetchHttpClient.get<{
  //       pages: number;
  //       data: Transaction[];
  //     }>("transaction");
  //     setTransactions(response.data);
  //   }
  //   fetchTransactions();
  // }, []);

  return (
    <DefaultLayout showTransactionForm={showTransactionForm}>
      <div className="flex flex-col gap-4">
        <StatGroup>
          <Stat value="450" />
          <Stat value="450" />
          <Stat value="450" />
        </StatGroup>
        <Card>
          <Headline
            title="Transações"
            description="Acompanhe suas últimas transações"
          />
          <ul>
            {transactions?.map((transaction) => (
              <li key={transaction.id}>
                {transaction.name} - {transaction.value}
              </li>
            ))}
          </ul>
          {/* <DataTable columns={columns} data={transactions} /> */}
        </Card>
      </div>
    </DefaultLayout>
  );
}
