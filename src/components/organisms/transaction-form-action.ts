/**
 * In cases of doubts, check it out this repo https://github.com/ProNextJS/forms-management-yt/tree/main
 */

"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormState } from "./transaction-form";

export async function onSubmitTransactionAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const response = Object.fromEntries(formData);

  console.log(prevState, formData, response);
  const token = cookies().get("FROG_TOKEN")?.value;
  await fetch("http://localhost:3000/api/transaction", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      value: Number(formData.get("value")),
      name: formData.get("description"),
      accountId: "85441376-530d-4e15-ae84-69fe906f6841",
      date: formData.get("date"),
    }),
  });
  revalidateTag("get-transactions");
  redirect("?show-transaction-form=");
}
