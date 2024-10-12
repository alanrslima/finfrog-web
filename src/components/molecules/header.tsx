import { Icon } from "../atoms/icon";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="flex border-b-2 h-[62px] justify-end items-center px-6">
      <Button>
        <Icon name="plus" />
        <strong className="ml-2">Adicionar transação</strong>
      </Button>
    </header>
  );
}
