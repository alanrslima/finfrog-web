import { MenuItem } from "../molecules/menu-item";

export function NavBar() {
  return (
    <nav className=" px-4 w-[320px] flex flex-col h-full bg-card">
      <MenuItem text="Dashboard" selected />
      <MenuItem text="Transações" />
    </nav>
  );
}
