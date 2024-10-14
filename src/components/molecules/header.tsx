"use client";

import { useState } from "react";
import { Icon } from "../atoms/icon";
import {
  TransactionForm,
  TransactionFormSubmitProps,
} from "../organisms/transaction-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useErrorHandler } from "@/hooks/use-error-handler";
import { createTransaction } from "@/services/transactions/create-transaction";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorHandler] = useErrorHandler();
  const { toast } = useToast();

  async function onSubmit(values: TransactionFormSubmitProps) {
    try {
      await createTransaction({
        accountId: "85441376-530d-4e15-ae84-69fe906f6841",
        date: values.date,
        name: values.description,
        value: Number(values.value),
      });
      setIsOpen(false);
      toast({
        title: "Transaction has been created",
        description: `${values.description} - ${values.value}`,
      });
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <header className="flex border-b-2 h-[62px] justify-end items-center px-6">
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        {/* <DialogTrigger asChild> */}
        <Button onClick={() => setIsOpen(true)}>
          <Icon name="plus" />
          <strong className="ml-2">Adicionar transação</strong>
        </Button>
        {/* </DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new transaction</DialogTitle>
            <TransactionForm onSubmit={onSubmit} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}
