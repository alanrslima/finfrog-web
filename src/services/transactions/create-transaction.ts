import { Cookies } from "@/lib/cookies";
import { ServiceError } from "../service-error";

type CreateTransactionInput = {
  name: string;
  value: number;
  date: Date;
  accountId: string;
};

export async function createTransaction(
  data: CreateTransactionInput
): Promise<void> {
  try {
    const cookies = new Cookies();
    const token = cookies.get("TESTE_TOKEN");
    const response = await fetch("http://localhost:3000/api/transaction", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const responseData = await response.json();
      throw new ServiceError("Error", responseData);
    }
  } catch (error) {
    throw error;
  }
}
