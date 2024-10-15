"use client";

import { Icon } from "../atoms/icon";
import { useRouter } from "next/navigation";
import { TransactionForm } from "../organisms/transaction-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

type HeaderProps = {
  showTransactionForm?: boolean;
};

export function Header(props: HeaderProps) {
  const { replace } = useRouter();

  function transactionFormHandler(isOpen: boolean) {
    if (isOpen) {
      replace("?show-transaction-form=true");
    } else {
      replace("?show-transaction-form=");
    }
  }

  return (
    <header className="flex border-b-2 h-[62px] justify-end items-center px-6">
      <Dialog
        onOpenChange={transactionFormHandler}
        open={props.showTransactionForm}
      >
        <Button onClick={() => transactionFormHandler(true)}>
          <Icon name="plus" />
          <strong className="ml-2">Adicionar transação</strong>
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new transaction</DialogTitle>
            <TransactionForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}
