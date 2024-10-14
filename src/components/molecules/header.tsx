"use client";

// import { useState } from "react";
import { Icon } from "../atoms/icon";
import { useRouter } from "next/navigation";
import {
  TransactionForm,
  TransactionFormSubmitProps,
} from "../organisms/transaction-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { redirect } from "next/navigation";
// import { useErrorHandler } from "@/hooks/use-error-handler";
// import { createTransaction } from "@/services/transactions/create-transaction";
// import { useToast } from "@/hooks/use-toast";
// import { revalidateTag } from "next/cache";

type HeaderProps = {
  showTransactionForm?: boolean;
};

export function Header(props: HeaderProps) {
  const { replace } = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  // const [errorHandler] = useErrorHandler();
  // const { toast } = useToast();

  async function onSubmit(values: TransactionFormSubmitProps) {
    // try {
    //   await createTransaction({
    //     accountId: "85441376-530d-4e15-ae84-69fe906f6841",
    //     date: values.date,
    //     name: values.description,
    //     value: Number(values.value),
    //   });
    //   setIsOpen(false);
    //   toast({
    //     title: "Transaction has been created",
    //     description: `${values.description} - ${values.value}`,
    //   });
    //   revalidateTag("get-transactions");
    // } catch (error) {
    //   errorHandler(error);
    // }
  }

  console.log("showTransactionForm", props.showTransactionForm);

  function transactionFormHandler(isOpen: boolean) {
    if (isOpen) {
      replace("?show-transaction-form=true");
      // redirect("?show-transaction-form=true");
    } else {
      replace("?show-transaction-form=");
    }
    // redirect("?show-transaction-form=");
  }

  return (
    <header className="flex border-b-2 h-[62px] justify-end items-center px-6">
      <Dialog
        onOpenChange={transactionFormHandler}
        open={props.showTransactionForm}
      >
        {/* <DialogTrigger asChild> */}
        <Button onClick={() => transactionFormHandler(true)}>
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
