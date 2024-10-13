import { Icon } from "../atoms/icon";
import { TransactionForm } from "../organisms/transaction-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function Header() {
  return (
    <header className="flex border-b-2 h-[62px] justify-end items-center px-6">
      <Dialog>
        <DialogTrigger>
          <Button>
            <Icon name="plus" />
            <strong className="ml-2">Adicionar transação</strong>
          </Button>
        </DialogTrigger>
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
